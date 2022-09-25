import '../styles/globals.css'
import NProgress from 'nprogress'

import { AppProps } from 'next/app'
import { GetServerSideProps } from "next";

import MainContainer from '../components/MainContainer'
import { Router } from 'next/router'
import Header from 'next/head'

import { SessionProvider } from 'next-auth/react'
import { MongoClient } from "mongodb"

import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react'


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </SessionProvider>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);



  if (session.profile) {
    //let idGoogle = session.profile.id
    //console.log(`ID DO USUARIO: ${idGoogle} ==================================================================`)
  }

  //await client.connect().then(() => console.log('Mongo Conectado com sucesso')).catch(() => console.log('Mongo Não conectado'))

  if (session) {

    //let user = await dbUsers.findOne({ email: session?.user?.email })
    //if (!user) new dbUsers({ email: session?.user?.email }).save()

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }


  }

  return { props: {} }
}


export default MyApp
