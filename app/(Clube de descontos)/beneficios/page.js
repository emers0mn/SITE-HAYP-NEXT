import Beneficios from "./Beneficios"

export const metadata = {
    title: 'Benefícios',
    alternates: {
        canonical: 'https://hayp.com.br/beneficios',
        media: {
            'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/beneficios',
          },
      },
} 

export default function PageBeneficios() {

    return (
        <>
            <Beneficios />
        </>
    )
}