import dynamic from "next/dynamic";
import PlanosPC from "../_components/planoPC/PlanosPC";
import Links from "@/components/(links)/Links";
import Planos from "../_components/plano/Plano"

// const Planos = dynamic(() => import("../_components/plano/Plano"));
const Benefits = dynamic(() => import("../_components/beneficios/Benefits"));


export const metadata = {
    title: 'Planos'
} 

export default function PagePlanos(){
    return(
        <div>
            <Planos />
            {/* <Links /> */}
            <Benefits />
        </div>
    )
};