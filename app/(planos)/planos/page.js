import Benefits from "../_components/beneficios/Benefits";
import Planos from "../_components/plano/Plano";


export const metadata = {
    title: 'Planos'
} 

export default function PagePlanos(){
    return(
        <div>
            <Planos/>
            <Benefits />
        </div>
    )
}