'use client'
import { useState } from "react"
import style from "./popup.module.css"
import { Apps } from "@/app/(Móvel)/components/PlanosMoveis"
import Link from "next/link"
import { useSearchParams } from "next/navigation";

export const Popup = ({ isOpen, toggle }) => {
  const searchParams = useSearchParams()
  const [quantidadeChip, setQuantidadeChip] = useState(parseInt(searchParams.get('quantidade'))+1)
  
  
  function PlanoChipAdicional() {
    const dadosPlanos = require("../../../(Móvel)/components/dados/movel.json");
    const [selectedId, setSelectedId] = useState(1);
    const [beneficios, setBeneficios] = useState(false);
    
    function verBeneficios() {
      setBeneficios(!beneficios);
    }
  
    return (
  
      <div>
        {dadosPlanos.moveis
          .filter(movel => movel.id === selectedId)
          .map(movel => (
            <section key={movel.id} className={style.combo}>
              <div className={style.planos}>
                <p>{movel.plano + movel.portabilidade === 12 ? "Plano mais vendido" : ""}</p>
                <div className={style.contentGiga}>
                  <button className={(movel.plano == 5) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId <= 1 ? setSelectedId(selectedId - 0) : setSelectedId(selectedId - 1) }}><img
                    src="/img/movel/buttonMinus.svg"
                    alt='Remover GB'
                    width={50}
                    height={50}
                  /></button>
                  <h2 className={style.giga}>{movel.plano + movel.portabilidade}GB</h2>
                  <button className={(movel.plano + movel.portabilidade == 45) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId < 7 ? setSelectedId(selectedId + 1) : setSelectedId(selectedId - 0) }}><img
                    width={50}
                    height={50}
                    alt='Adiconar GB'
                    src="/img/movel/buttonPlus.svg" />
                  </button>
                </div>
                {movel.plano == 5 ? `` : <h3 className={style.haypMovel}>{movel.plano}GB + {movel.portabilidade} GB de Portabilidade</h3>}
                <div className={style.price}>
                  <h4><span>Por: </span>R${movel.revenda},00</h4>
                  <small>/mês</small>
                </div>
                <div className={style.btRemoverChip}>
                  <Link type="button"
                  onClick={() => {setQuantidadeChip(quantidadeChip - 1)}}
                  href={
                    `/planos?movel=${movel.plano + movel.portabilidade}GB&checkMovel=true&priceMovel=${movel.revenda}&quantidade=${quantidadeChip}`
                  }
                  
                  >Remover
                  </Link>
                </div>
              </div>
              <article className={beneficios ? style.containerBeneficiosAberto : style.containerBeneficios}>
                <div className={style.activeBeneficios} onClick={verBeneficios}>
                  <h2>Benefícios</h2>
                  <button className={style.buttonBeneficios} type="button" onClick={verBeneficios}>
                    <img
                      width={12}
                      height={12}
                      src="/img/movel/ver-mais-beneficios.svg"
                      alt="Ver mais beneficios"
                      onClick={verBeneficios}
                      className={beneficios ? style.verMaisBeneficios : style.verMaisBeneficiosFechado}
                    />
                  </button>
                </div>
                <div className={beneficios ? style.contentBeneficios : style.contentBeneficiosFechado}>
                  <h3>Apps <strong>ilimitados</strong></h3>
                  <p>Sem consumir da internet</p>
                  <div className={style.imgBeneficios}>
                    <Apps
                      aplicativo={movel.bonus[0]}
                    />
                    <Apps
                      aplicativo={movel.bonus[1]}
                    />
                    <Apps
                      aplicativo={movel.bonus[2] == null ? "WazeOff" : movel.bonus[2]}
                    />
                  </div>
                  <h3>{movel.plano <= 7 ? `Ligações ${movel.ligacoes}` : `Ligações e SMS ilimitado:`}</h3>
                  <h3>{movel.plano <= 7 ? `${movel.sms} SMS` : <p>Não tenha limites para poder se comunicar com quem você quiser.</p>}
                  </h3>
                </div>
              </article>
            </section>
          ))}
      </div>
    )
  }

  const dadosPlanos = require("../../../(Móvel)/components/dados/movel.json");
  const [selectedId, setSelectedId] = useState(1);
  const [beneficios, setBeneficios] = useState(false);

  function verBeneficios() {
    setBeneficios(!beneficios);
    
  }

  return (
    <> {dadosPlanos.moveis
      .filter(movel => movel.id === selectedId)
      .map(movel => (
        <div key={movel.id} className={isOpen ? style.content : ""}>
          <dialog open={isOpen} className={style.modal} >

            <div className={style.containerDestaqueAtiva}>
              <h5 className={style.destaque}>Hayp Móvel</h5>
            </div>
            
            <section className={style.combo}>
              <div className={style.planos}>
                <p>{movel.plano + movel.portabilidade === 12 ? "Plano mais vendido" : ""}</p>
                <div className={style.contentGiga}>
                  <button className={(movel.plano == 5) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId <= 1 ? setSelectedId(selectedId - 0) : setSelectedId(selectedId - 1) }}><img
                    src="/img/movel/buttonMinus.svg"
                    alt='Remover GB'
                    width={50}
                    height={50}
                  /></button>
                  <h2 className={style.giga}>{movel.plano + movel.portabilidade}GB</h2>
                  <button className={(movel.plano + movel.portabilidade == 45) ? style.buttonActionOpacity : style.buttonAction} onClick={() => { selectedId < 7 ? setSelectedId(selectedId + 1) : setSelectedId(selectedId - 0) }}><img
                    width={50}
                    height={50}
                    alt='Adiconar GB'
                    src="/img/movel/buttonPlus.svg" />
                  </button>
                </div>
                {movel.plano == 5 ? `` : <h3 className={style.haypMovel}>{movel.plano}GB + {movel.portabilidade} GB de Portabilidade</h3>}
                <div className={style.price}>
                  <h4><span>Por: </span>R${movel.revenda},00</h4>
                  <small>/mês</small>
                </div>
              </div>
              <article className={beneficios ? style.containerBeneficiosAberto : style.containerBeneficios}>
                <div className={style.activeBeneficios} onClick={verBeneficios}>
                  <h2>Benefícios</h2>
                  <button className={style.buttonBeneficios} type="button" onClick={verBeneficios}>
                    <img
                      width={12}
                      height={12}
                      src="/img/movel/ver-mais-beneficios.svg"
                      alt="Ver mais beneficios"
                      onClick={verBeneficios}
                      className={beneficios ? style.verMaisBeneficios : style.verMaisBeneficiosFechado}
                    />
                  </button>
                </div>
                <div className={beneficios ? style.contentBeneficios : style.contentBeneficiosFechado}>
                  <h3>Apps <strong>ilimitados</strong></h3>
                  <p>Sem consumir da internet</p>
                  <div className={style.imgBeneficios}>
                    <Apps
                      aplicativo={movel.bonus[0]}
                    />
                    <Apps
                      aplicativo={movel.bonus[1]}
                    />
                    <Apps
                      aplicativo={movel.bonus[2] == null ? "WazeOff" : movel.bonus[2]}
                    />
                  </div>
                  <h3>{movel.plano <= 7 ? `Ligações ${movel.ligacoes}` : `Ligações e SMS ilimitado:`}</h3>
                  <h3>{movel.plano <= 7 ? `${movel.sms} SMS` : <p>Não tenha limites para poder se comunicar com quem você quiser.</p>}
                  </h3>
                </div>
              </article>
            </section>

            <section>
              <div hidden={quantidadeChip >= 2 ? false : true}>
                <PlanoChipAdicional />
              </div>
              <div hidden={quantidadeChip === 3 ? false : true}>
                
                <PlanoChipAdicional />
              </div>
            </section>

            <section className={style.adicionarChip}>
              
              <Link 
              href={
                `/planos?movel=${movel.plano + movel.portabilidade}GB&checkMovel=true&priceMovel=${movel.revenda}&quantidade=${quantidadeChip + 1}`
              }
              className={quantidadeChip === 3 ? style.adicionarChipHidden : style.btAdicionarChip} onClick={() => {
                
                setQuantidadeChip(quantidadeChip + 1)
              }}>
                <img
                  width={63.54}
                  height={36.28}
                  src="/img/movel/adicionarMaisChip.svg"
                  alt="Plano de internet + Plano Móvel"
                />
                <h2>Adicionar mais um chip</h2>
              </Link>
              

              <article className={style.containerButtons}>
                <Link href={
                  `/planos?movel=${movel.plano + movel.portabilidade}GB&checkMovel=true&priceMovel=${movel.revenda}&quantidade=${quantidadeChip}`
                }>
                  <button type="button" className={style.button} onClick={toggle}>
                    Confirmar
                  </button>
                </Link>

                <Link href={{
                  pathname: '/planos',
                  query: {

                    checkMovel: false,
                    priceMovel: `0`,

                  }
                }}>
                  <button type="button" className={style.buttonRemove} onClick={toggle}>
                    Remover
                  </button>
                </Link>
              </article>
            </section>

          </dialog>
        </div>))}

    </>
  )
}