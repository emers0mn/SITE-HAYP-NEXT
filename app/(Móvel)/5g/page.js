import PlanosMoveis from "../components/PlanosMoveis";
import BeneficiosMovel from "../components/Beneficios";


export const metadata = {
    title: 'Planos 5G',
    alternates: {
        canonical: 'https://hayp.com.br/5g',
        media: {
            'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/5g',
        },
    },
}

export default function Page5G(){
    return(
        <div>
            <PlanosMoveis/>
            <BeneficiosMovel />
            
        </div>
    )
}