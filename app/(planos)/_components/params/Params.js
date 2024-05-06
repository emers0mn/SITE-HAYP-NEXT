'use client'
import { useSearchParams } from "next/navigation";

export function PlanoMovel({ plano }) {

    const searchParams = useSearchParams()
    const movel = searchParams.get('movel')

    return (
        <div>
        {movel ? (
            <>
                <p>( 1 Chip de: {movel} {plano >= 400 ? (<><br /> + 100 Mega )</>) : ")"}</p>
            </>) : " Selecionar plano"}
    </div>
    );
}