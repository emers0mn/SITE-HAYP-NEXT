'use client'
import { useSearchParams } from "next/navigation";

export function PlanoMovel({ plano }) {

    const searchParams = useSearchParams()
    const movel = searchParams.get('movel')
    const quantidade =  (searchParams.get('quantidade'))

    return (
        <div>
        {movel ? (
            <>
                <p>( {quantidade == 0 ? 1 : 1} Chip de {movel} {quantidade < 2 ? "" : `+ ${quantidade - 1} chip adicional`} {plano >= 400 ? (<><br /> + 100 Mega )</>) : ")"}</p>
            </>)
        :"Selecionar plano"}
    </div>
    );
}