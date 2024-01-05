import styles from "./quemsomos.module.css"

export default function QuemSomos() {
    return (
        <>
            <main className={styles.content}>
                <div >
                    <h1 className={styles.title1}>Quem somos</h1>

                    <p>
                        Existimos por um mundo mais conectado. Por uma realidade mais integrada e inclusiva. Onde todos possam ter acesso a informação. Acesso à comunicação, à conexão. Conexão que tem o poder de dar voz àqueles que não estão conectados. Àqueles que não fazem parte da rede, mas que agora farão. Fazemos questão de dar voz ao que a TV não mostra. Para isso vamos conectar pessoas para revelar realidades distintas.
                    </p>

                    <div className={styles.carinhas1}>
                        <h2 className={styles.title2}>
                        Porque somos Hayp telecom</h2>

                        <img className={styles.img} src="assets/images/icons/carinha1.svg" />
                    </div>

                    <p>
                    Levamos conexão acessível, de qualidade com grande velocidade e atendimento excelente àqueles que não tem. Conexão que leva inclusão social e digital para milhares de pessoas. E queremos fazer a diferença na vida delas! Queremos enaltecer o lado humano, a atenção aos detalhes, o envolvimento com cada serviço e a compreensão das diversas necessidades. Esses sim, são frutos de uma empresa que pensa em pessoas. E só assim proporcionaremos uma realidade diferente. Porque acreditamos em um mundo conectado e que fazemos parte dele. Reconhecemos o poder da conexão. Bem-vindo ao universo HAYP.
                    </p>

                    <h2 className={styles.title2}>
                    Missão</h2>

                    <div className={styles.carinhas2}>
                    <img className={styles.img} src="assets/images/icons/carinha2.svg" />
                        <p>
                        Levar conexão de qualidade, através de um atendimento e um serviço de excelência, ao máximo de pessoas que conseguirmos, com o intuito de promover a inclusão digital e social.
                        </p>
                    </div>

                    <h2 className={styles.title2}>
                    Visão</h2>

                    <p>
                    Proporcionar uma realidade onde a conexão que oferecemos às pessoas possa contribuir para a inclusão digital e social, promovendo um mundo mais conectado.
                    </p>

                    <h2 className={styles.title2}>
                    Valores</h2>

                    <p>
                    <strong className={styles.valores}>Qualidade</strong>: Do atendimento até o pós-venda, da instalação ao suporte, de um simples problema a uma solução incrível. Enxergamos qualidade na prestação de serviço como um todo, sempre buscando a satisfação do cliente em primeiro lugar.
                    </p>

                    <p>
                    <strong className={styles.valores}>Comprometimento</strong>: Com o cliente, dando todo o suporte necessário em sua jornada aqui na empresa. Entrega de um serviço redondo do jeito que foi contratado. 
                    </p>

                    <p>
                    <strong className={styles.valores}>Acessibilidade</strong>: Através de uma conexão com funcionamento pleno e boa acessibilidade promovemos a inclusão de pessoas em um ambiente digital para que tenham sucesso em suas demandas profissionais, de entretenimento ou lazer. 
                    </p>

                    <div className={styles.carinhas3}>
                        <p>
                        <strong className={styles.valores}>Inovação</strong>: Entender a necessidade do cliente e propor soluções que o atendam, sempre de forma conectada e inteligente.
                        </p>

                        <img className={styles.img} src="assets/images/icons/carinha3.svg" />
                    </div>

                    <p>
                    <strong className={styles.valores}>Excelência</strong>: A excelência está no pleno funcionamento da conexão, no suporte e no atendimento rápido para a resolução de problemas, sempre com um sorriso no rosto e uma simpatia de tocar o coração. A excelência está desde a contratação do serviço até a entrega do que foi prometido.                    </p>

                    <p>
                    <strong className={styles.valores}>Tecnologia</strong>: Respiramos tecnologia, e prezamos por levar a inovação ao maior número de pessoas possível.
                    </p>

                    <div className={styles.carinhas4}>
                    <img className={styles.img} src="assets/images/icons/carinha4.svg" />
                        <p>
                        <strong className={styles.valores}>Ética</strong>: Respeitamos pessoas, cuidamos de clientes, valorizamos parceiros, sempre de forma justa e correta para o bem das relações pessoais e comerciais.</p>
                    </div>

                    <p>
                    <strong className={styles.valores} >Humano</strong>: Enxergamos além do serviço: percebemos quem são nossos clientes e quais são suas necessidades, levando atendimento atencioso e humanizado. 
                    </p>

                </div>
                
            </main>
        </>
    )
}