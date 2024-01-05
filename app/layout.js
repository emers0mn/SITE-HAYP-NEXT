import { Inter } from 'next/font/google';
///import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { HeaderLayout } from '../app/(layout)/_header/headerLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HP Telecom Agora é HAYP',
  description: 'Simplifique sua rotina assine HAYP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="Pt-br">
      <body className={inter.className}>
        <HeaderLayout />
        {children}
      </body>
    </html>

    
  )

}
