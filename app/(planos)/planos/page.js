import dynamic from "next/dynamic";

const Planos = dynamic(() => import("../_components/plano/Plano"));
const Benefits = dynamic(() => import("../_components/beneficios/Benefits"));


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