import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Header/Header'
import AppProvider from '../Context/AppProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
