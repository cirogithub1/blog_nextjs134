"use client"
// import type { AppProps } from 'next/app'
// import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

// export const metadata = {
//   title: 'Prompt AI',
//   description: 'Share AI searches'
// }

interface Props {
  children: React.ReactNode,
  session: any
}

// export default function RootLayout({ 
//   Component, 
//   pageProps: { 
//     session, 
//     ...pageProps 
//   }
// }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <div className='main'>
//         <div className='gradient'/>
//       </div>

//       <main className="app">
//         <Nav />
//         <Component {...pageProps} />
//       </main>
//     </SessionProvider>
//   )
// }

export default function RootLayout({ children, session }: Props) {
  
  return (
    <html lang="en">
      {/* Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed at body */}
      {/* suppressHydrationWarning={false} */}
      <body suppressHydrationWarning={true}>
        <Provider session={session}>
          <div className='main'>
            <div className='gradient'/>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
