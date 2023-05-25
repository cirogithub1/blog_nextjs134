import '../styles/globals.css'

import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
  title: 'My Blog',
  description: 'Share AI searches'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
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
