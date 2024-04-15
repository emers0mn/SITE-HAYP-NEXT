import ComentPage from "./Avalia"

export const metadata = {
    title: 'Avaliações',
    alternates: {
        canonical: 'https://hayp.com.br/avaliacoes',
        media: {
            'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/avaliacoes',
          },
      },
} 

export default function PageAvaliacoes(){
    return(
        <>
            <ComentPage />
        </>
    )
}