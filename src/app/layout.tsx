import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import { StoreProvider } from '@/features/Provider'
import { ErrorSnackbar } from '@/features/errrorSnackBar/errorSnackBar'
import { TonConnectUIProvider } from '@tonconnect/ui-react';



export const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['100', '300', '400', '500', '700', '900'], style: ['normal'] })

export const metadata: Metadata = {
  title: 'Interesting App',
  description: 'Random generate app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <StoreProvider>

      <html lang="en">
        <body className={roboto.className}>
          <ErrorSnackbar />
          {children}
        </body>
      </html>

    </StoreProvider>

  )
}
