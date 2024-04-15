import PageHome from './(home)/_home/Home';

export const metadata = {
  title: 'HP Telecom agora é HAYP - Internet 100% Fibra Ótica',
  alternates: {
      canonical: 'https://hayp.com.br/',
      media: {
          'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/',
        },
    },
} 


export default function Home() {

  return (
    <PageHome />
  )
}
