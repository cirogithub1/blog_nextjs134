import { getSession } from 'next-auth/client'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
  title: 'My Blog',
  description: 'Share AI searches'
}

export default async function RootLayout({ children } : { children: React.ReactNode}) 
{
  const session = await getSession()
  return (
    <html lang="en">
      <body>
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
