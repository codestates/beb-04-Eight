import '../styles/globals.css'
import Layout from '../components/Layout'

/*
==================================================
===================라우터 페이지=====================
==================================================
수정일자 : 2022. 06. 21
완 : 레이아웃 적용
미완:
*/

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
