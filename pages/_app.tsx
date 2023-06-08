import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
