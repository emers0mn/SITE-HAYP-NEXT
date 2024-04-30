import React, { useState } from 'react';
import style from './dados.module.css'

export default function DadosMoveis() {
    const dadosPlanos = require("./movel.json");
    const [selectedId, setSelectedId] = useState(1); // Estado para armazenar o ID selecionado

    return (
        <div>
            {dadosPlanos.moveis
                .filter(movel => movel.id === selectedId) // Filtra para mostrar apenas o item com o ID selecionado
                .map(movel => (
                    <div key={movel.id}>
                        
                        <div className={style.contentGiga}>
                            <button className={(movel.plano == 5) ? style.buttonActionOpacity : style.buttonAction} onClick={() => {selectedId <= 1 ? setSelectedId(selectedId - 0) : setSelectedId(selectedId - 1)}}><img
                                src="/img/movel/buttonMinus.svg"
                                alt='Remover GB'
                                width={50}
                                height={50}
                            /></button>


                                <h2 className={style.giga}>{movel.plano}GB</h2>

                            <button className={(movel.plano == 35) ? style.buttonActionOpacity : style.buttonAction} onClick={() => {selectedId < 6 ? setSelectedId(selectedId + 1) : setSelectedId(selectedId - 0)}}><img
                                width={50}
                                height={50}
                                alt='Adiconar GB'
                                src="/img/movel/buttonPlus.svg" />
                            </button>

                        </div>

                    </div>
                ))}
        </div>
    );
}
