import dynamic from "next/dynamic";
import Planos from "../_components/plano-copy/Plano"
import Links from "@/app/components/(links)/Links";


// const Planos = dynamic(() => import("../_components/plano/Plano"));
const Benefits = dynamic(() => import("../_components/beneficios/Benefits"));


export const metadata = {
    title: 'Planos',
    alternates: {
        canonical: 'https://hayp.com.br/planos',
        media: {
            'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/planos',
        },
    },
}

export default function PagePlanos() {
    return (
        <div>
            <Links
                pagina="planos"
            />
            <Planos />
            {/* <Links /> */}
            <Benefits />
        </div>
    )
};