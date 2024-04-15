import { Inter } from 'next/font/google';
import './globals.css';
import { HeaderLayout } from '../app/(layout)/_header/headerLayout'
import Footer from './(layout)/(footer)/Footer';
import Links from '@/components/(links)/Links';
import { Hotjar } from './(layout)/(SEO)/SEO';
import Cookies from './(layout)/(SEO)/Cookies';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'HP Telecom Agora é HAYP - Internet 100% Fibra Óptica',
    template: '%s - HAYP Telecom'
  },
  description: 'Simplifique sua rotina assine HAYP - Somos o provedor de internet mais bem avaliado de São Paulo',

  alternates: {
    canonical: 'https://hayp.com.br/',
    media: {
      'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/',
    },
  },
  verification: {
    google: 'Jf42sg9OPjaOyhEZwy_F2Ln7nlWDlZ47Zmvlyx2Naks',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="Pt-br">
      <body className={inter.className}>
        <HeaderLayout />
        <Hotjar />
        {children}


        {/* <Links /> */}

        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Footer />
        <Cookies />
      </body>
    </html>


  )

}
