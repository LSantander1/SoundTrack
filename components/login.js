//  ====== Cabeçalho - [PageInicial] [Playlist] -|- [Login] [Registro] ===========

import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Head from 'next/head'

import { GetServerSideProps } from "next";

import { signIn } from 'next-auth/react';
import { getSession } from 'next-auth/react';
//import connect from '../utils/database'

import { signOut, useSession } from 'next-auth/react'

export default function newPage({ dbUser }) {
    const { data: session } = useSession()

    if (session) {
        return (<>
            <head>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'></link>
            </head>

            <form className={styles.form}>
                <image src={`${session.user.image}.png`}></image>
                <image width="300px" height="300px" src="../public/images/user.png"></image>

                <div className={styles.dropdown}>
                    <a className={styles.dropbtn}><img width='40px' className={styles.profile} src={`${session.user.image}.png`}></img></a>
                    <div className={styles.dropdownContent}>

                        <a className={styles.username}>{session?.user?.name}</a>

                        <hr></hr>

                        <div>
                            <Link href="{`/uses/${db.id}`}">
                                <a className={styles.clicks}>Perfil</a>
                            </Link>
                            <a onClick={() => signOut()} className={styles.clicks}>Sair</a>
                        </div>

                    </div>
                </div>

            </form>

        </>)
    } else {
        return (<>

            <Link href="/login">
                <a className={styles.elements}>Entrar</a>
            </Link>
            <Link href="/login">
                <a className={styles.elements}>Registrar</a>
            </Link>

        </>)
    }

    /*
    if (dbUser && dbUser.plan !== 0) {

    } else {

    }
    */
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) {
        const { db } = await connect()
        const dbUser = await db.collection("users").findOne({ email: session?.user?.email })

        return {
            redirect: {
                destination: '/',
                permanent: false
            },
            props: { session, dbUser }
        }
    }

    return { props: { session } }
}