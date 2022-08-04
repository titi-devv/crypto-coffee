import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ModalProvider } from '../components/contexts/ModalContext'
import toast, { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        style: {
          background: '#1A1C34',
          color: '#fff',
          maxWidth: '500px'
        },
        // Default options for specific types
        success: {
          theme: {
            primary: 'green',
            secondary: 'black',
          },
          icon: '✅',
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
