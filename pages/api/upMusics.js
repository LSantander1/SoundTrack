import nc from "next-connect";
import upload from "../../utils/upload";
import connect from "../../utils/database"

export async function upMusics() {
    const handler = nc()
    .use(upload.single('file'))
    .post(async (req, res) => {
        const { file, id } = req.body
        const { db } = await connect()
        const collection = db.collection("Musics")

        await collection.insertOne({
            id: id,
        })

        return res.status(200).json({ ok: true });
    })
    .patch(async (req, res) => {
        throw new Error("Throws me around! Error can be caught and handled.");
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default upMusics;