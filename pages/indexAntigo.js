import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

//  [5 músicas em alta internacional] [5 músicas em alta BR] [10 músicas lançamento internacinal] [10 músicas lançamento br] -|- 
//  [5 músicas dos artistas das 3 mus em alta internacional] [5 músicas dos artistas das 3 mus em alta br] ====== -->

export default function newPage() {

  {/*
  (
    <Link href={`/musics/${musica.id}`}>
      <div>
        Card da musica
      </div>
    </Link>
  )
    */
  }


  return <>
    <Head>
      <title>Página Inicial - SoundTrack</title>
      <meta name='keywords' content='musica, soundtrack, musics, sound, track, playlist'></meta>
      <meta name='description' content='Sua música, sua vibe!'></meta>
    </Head>

    <h3>pagina iniciaaaall</h3>

    {/* 
    <div className={styles.page}>

      <div class="musics-destaques">

        <div class="emAlta-internacional">
          <h1 class="title">Populares Internacional</h1>
          <a href={`/musics/${music.id}`}>
            <div class="card">
              <img src="{musica.thumb}"></img>
              <h3>musica.title</h3>
              <p>musica.author</p>
            </div>
          </a>
        </div>

        <div class="emAlta-br">
          <h1 class="title">Populares Brasil</h1>
          <div class="card">
            <img src="{musica.thumb}"></img>
            <h3>musica.title</h3>
            <p>musica.author</p>
          </div>
        </div>



      </div>
    </div>
    */}
  </>
}

/*
{
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=6&regionCode=br&videoCategoryId=20&fields=items(id%2Csnippet(title))&key=AIzaSyAZHeqd842UCnGbK4Mk-hA1LKyCoXm_G8k HTTP/1.1")
    .then(async (data) => {
      console.log(await data.json())
    })
}
*/