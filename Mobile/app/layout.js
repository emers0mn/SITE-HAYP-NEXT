import { Inter } from 'next/font/google';
///import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { HeaderLayout } from '../app/(layout)/_header/headerLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HP Telecom Agora é HAYP - Interet 100% Fibra Óptica',
  description: 'Simplifique sua rotina assine HAYP - Somos o provedor de internet mais bem avaliado de São Paulo',
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
