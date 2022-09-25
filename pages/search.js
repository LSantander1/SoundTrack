import Head from 'next/head';
import { withRouter } from 'next/router'
const Post = withRouter((props) => {

    let dados = props.dados
    console.log(dados)

    let searchContent = props.router.query.content

    return <>
        <Head>
            <title>Busca: {searchContent} - SoundTrack</title>
        </Head>

        <h2>Exibindo resultados para "{searchContent}"</h2>


    </>
})

//  items(id,snippet(thumbnails,title,channelTitle),contentDetails(duration),statistics(likeCount))

export async function getServerSideProps(rota) {

    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })

    

    var dataFetch = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=Luan&fields=items(id.videoId)&key=AIzaSyBt6QUXTgALK-r0THl-pbE09oFFdfCvwU4")
    var dataJson = await dataFetch.json()
    var dataItems = await dataJson.items
    
    let dados = []

    dataItems.map(async (music) => {
        let result = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${music.id.videoId}&fields=items(id%2Csnippet(thumbnails%2Ctitle%2CchannelTitle)%2CcontentDetails(duration)%2Cstatistics(likeCount))&key=AIzaSyBt6QUXTgALK-r0THl-pbE09oFFdfCvwU4`)
        var dataJson = await result.json()
        var dataItems = await dataJson.items

        console.log('PASAANDOOOOOOOOOOOOOOOOOOOOOO')

        dados.push(dataItems)
    })


    return { props: { dados } }
}

export default Post;