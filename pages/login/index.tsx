
import { GetServerSideProps } from "next";

import { signIn } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import styles from "../../styles/Login.module.css"

import connect from '../../utils/database'

function newPage({ props }) {

    //console.log(props)

    return <>

        <header>
            <title>Entrar - SoundTrack</title>
            <meta name='keywords' content='acessar, conta, logar, entrar'></meta>
            <meta name='description' content='Sua música, sua vibe!'></meta>
        </header>

        <div className={styles.page}>

            <div className={styles.form}>
                <div onClick={() => signIn('google')} className={styles.google}>
                    <img src="/images/google-fundo.png" width="50px"></img>
                    <a>Entrar com Google</a>
                </div>
                <hr></hr>
                <a>Por enquanto as contas são conectadas apenas via Google.</a>
                <a>Em breve mais opções...</a>
            </div>
        </div>

    </>
}

/*


export async function getServerSideProps(context) {
    console.log(context)
    const session = await getSession(context);

    console.log(session)

    return { props: { } }
}
*/

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) {
        
        const { db } = await connect()
        await db.collection("users").updateOne({ email: session.user.email }, { $set: {
        }})
        //await db.collection("Users").createIndex({ item: 1, quantity: -1 })

        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return { props: { session } }
}

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    console.log(session)

    if(session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    
    return { props: { session } }

    
}
*/

export default newPage

