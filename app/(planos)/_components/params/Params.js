'use client'
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import style from './Params.module.css'
export function PlanoMovel({ plano }) {

    const searchParams = useSearchParams()
    const movel = searchParams.get('movel')
    const quantidade =  (searchParams.get('quantidade'))
    const [conteudo, setConteudo] =useState('(Ganhe + 100 Mega)')

    useEffect(() => {
        if (plano == 900){
            setConteudo('1 Chip de 8GB já incluso')
        } else if(plano == 100 || plano == 300){
            setConteudo('')
        } else{
            setConteudo('(Ganhe + 100 Mega)')
        }
    },[plano])

    return (
        <div>
        {movel ? (
            <>
                <p className={style.p1}>{quantidade == 0 ? 1 : 1} Chip de {movel} {quantidade < 2 ? "" : `+ ${quantidade - 1} Chip adicional`} {plano >= 400 && plano <= 700 ? (<span><br /> + 100 Mega )</span>) :""}</p>
            </>)
        : <p className={style.p1}>
            {conteudo}
            </p>}
    </div>
    );
}