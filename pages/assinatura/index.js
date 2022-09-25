import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'


import styles from '../../styles/Assinatura.module.css'
import Link from 'next/link'

import connect from '../../utils/database'
import { getSession } from 'next-auth/react';

export default function newPage() {

  function executarF() {

    var code = ''

    for (var i = 0; i < 25; i++) {
      if (code.length !== 25) {
        let alfa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        let letraPosi = Math.floor(Math.random() * 25 + 0)

        let code = code + alfa[letraPosi]
        console.log(code)
      }
    }
  }

  return <>
    <Head>
      <title>Assinar - SoundTrack</title>
      <meta name='keywords' content='assinar, comprar, contratar, obter, adquirir, soundtrack'></meta>
      <meta name='description' content='Sua música, sua vibe!'></meta>
    </Head>

    <div className={styles.body}>
      <div className={styles.infos}>
        <h1>Sobre a assinatura</h1>
        <br></br>
        <p>Assunto</p>
        <br></br>
        <ul>
          <li>Tal coisa</li>
          <li>Isso td</li>
          <li>mais isso</li>
        </ul>
      </div>


      <div className={styles.form}>
        <h1>Forma de pagamento</h1>
        <Link href='/assinatura/card'>
          <div className={styles.formasPag}>
            <img src='/images/cartao-de-credito.png' className={styles.logos}></img>
              <a>Cartão de Crédito</a>
          </div>
        </Link>

        <Link href='/assinatura/pix'>
          <div className={styles.formasPag}>
            <img src='/images/pix.png' className={styles.logos}></img>
            <a>PIX</a>
          </div>
        </Link>

        <hr className={styles.hrDivision}></hr>

        <div className={styles.code}>

          <label className={styles.codeTitle}>Eu tenho um código:</label>
          <input type="text" placeholder="Inserir código..." className={styles.text}></input>
          <a className={styles.button}>Resgatar código</a>
        </div>
      </div>
    </div>
  </>
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { db } = await connect()
  const dbUser = await db.collection("users").findOne({ email: session?.user?.email })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  if (dbUser?.plan !== 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }

  }

  return { props: {} }
}