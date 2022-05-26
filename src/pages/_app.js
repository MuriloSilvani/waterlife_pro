import GlobalStyle from '../styles/GlobalStyles'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Waterlife PRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
