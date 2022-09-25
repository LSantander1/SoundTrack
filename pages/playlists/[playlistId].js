import Head from 'next/head'
//import { connectToDatabase } from '../../databaseConnect'

export default function newPage() {
  return <>
    <h1>Nome da playlist</h1>
    <a>musicas</a>
  </>
}

export async function getServerSideProps() {
  //let { db } = await connectToDatabase()

  return { props: { } }
}