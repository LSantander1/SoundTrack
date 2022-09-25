import upMusics from '../api/upMusics.js'

const app = () => {
    return <>
    <h1>Teste</h1></>
}

export async function getServerSideProps(rota) {
    //await upMusics()

    return { props: { a: 'a'} }
}

export default app