import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalProvider } from '../components/contexts/ModalContext'
import toast, { Toaster } from 'react-hot-toast'
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script async src="https://cdn.splitbee.io/sb.js"></Script>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        style: {
          background: '#ccc',
          color: '#1A1C34',
          maxWidth: '550px'
        },
        // Default options for specific types
        success: {
          theme: {
            primary: 'green',
            secondary: 'black',
          },
          icon: '✅',
          duration: 5000
        },
        error: {
          theme: {
            primary: 'red',
            secondary: 'black',
          },
          icon: '❌',
        },
      }}
    />
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  </>

}

export default MyApp
