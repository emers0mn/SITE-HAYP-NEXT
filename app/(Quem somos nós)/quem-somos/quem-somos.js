'use client'

import styles from "./quemsomos.module.css"
import { useState, useEffect } from "react"

export function Links() {
    const [page, setPage] = useState('quem-somos')
    useEffect(() => {
        

        function handleResize() {
            var width = window.innerWidth;
            //console.log("My screen resolution is: " + width);
            
            if(width >= 600){
                window.location.href = `https://site-pc-hayp-next.vercel.app/${page}`;
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

  return null;
}

export function InfoText({ title, text }) {
    return (
        <p className={styles.textValores}>
            <strong className={styles.valores}>{title}</strong>: {text}
        </p>
    )

}

export function Imagem() {
    return (
        <div className={styles.imgContent}>
            <div className={styles.fotoContent}>
                <img
                    src="/img/quemSomos/haypTelecom.png"
                    alt="Imagem"
                    loading="lazy"
                />
                <img
                    src="/img/quemSomos/haypTelecom1.png"
                    alt="Imagem"
                    loading="lazy"
                />

                <img
                    src="/img/quemSomos/haypTelecom2.png"
                    alt="Imagem"
                    loading="lazy"
                />
                <img
                    src="/img/quemSomos/haypTelecom3.png"
                    alt="Imagem"
                    loading="lazy"
                />
            </div>
        </div>
    )
}

export default function PageQuemSomos() {
    return (
        <>
            <Links />
            <main className={styles.content}>
                <div >
                    <h1 className={styles.title1}>Bem vindo ao universo <strong>HAYP</strong></h1>

                    {/* <img
                        className={styles.video}
                        src="/video/videoTest.svg" 
                        alt="Imagem"
                        loading="lazy"
                    /> */}

                    <video width="300" height="214" autoPlay muted>
                        <source src="/video/videoHAYP.mp4" type="video/mp4"></source>
                    </video>
                    <h2 className={styles.title2}>Quem somos</h2>

                    <p>
                        Existimos por um mundo mais conectado. Por uma realidade mais integrada e inclusiva. Onde todos possam ter acesso a informação. Acesso à comunicação, à conexão. Conexão que tem o poder de dar voz àqueles que não estão conectados. Àqueles que não fazem parte da rede, mas que agora farão. Fazemos questão de dar voz ao que a TV não mostra. Para isso vamos conectar pessoas para revelar realidades distintas.
                    </p>

                    <h2 className={styles.title2}>
                        Porque somos HAYP Telecom</h2>

                    <p>
                        Levamos conexão acessível, de qualidade com grande velocidade e atendimento excelente àqueles que não tem. Conexão que leva inclusão social e digital para milhares de pessoas. E queremos fazer a diferença na vida delas! Queremos enaltecer o lado humano, a atenção aos detalhes, o envolvimento com cada serviço e a compreensão das diversas necessidades. Esses sim, são frutos de uma empresa que pensa em pessoas. E só assim proporcionaremos uma realidade diferente. Porque acreditamos em um mundo conectado e que fazemos parte dele. Reconhecemos o poder da conexão. <strong>Bem-vindo ao universo HAYP</strong>.
                    </p>

                    <Imagem
                    />

                    <h2 className={styles.title2}>
                        Missão
                    </h2>

                    <p>
                        Levar conexão de qualidade, através de um atendimento e um serviço de excelência, ao máximo de pessoas que conseguirmos, com o intuito de promover a inclusão digital e social.
                    </p>

                    <h2 className={styles.title2}>
                        Visão
                    </h2>

                    <p>
                        Proporcionar uma realidade onde a conexão que oferecemos às pessoas possa contribuir para a inclusão digital e social, promovendo um mundo mais conectado.
                    </p>

                    <h2 className={styles.title2}>
                        Valores
                    </h2>

                    <InfoText
                        title="Qualidade"
                        text="Do atendimento até o pós-venda, da instalação ao suporte, de um simples problema a uma solução incrível. Enxergamos qualidade na prestação de serviço como um todo, sempre buscando a satisfação do cliente em primeiro lugar."
                    />

                    <InfoText
                        title="Comprometimento"
                        text="Com o cliente, dando todo o suporte necessário em sua jornada aqui na empresa. Entrega de um serviço redondo do jeito que foi contratado."
                    />

                    <InfoText
                        title="Acessibilidade"
                        text="Através de uma conexão com funcionamento pleno e boa acessibilidade promovemos a inclusão de pessoas em um ambiente digital para que tenham sucesso em suas demandas profissionais, de entretenimento ou lazer."
                    />

                    <InfoText
                        title="Inovação"
                        text="Entender a necessidade do cliente e propor soluções que o atendam, sempre de forma conectada e inteligente."
                    />

                    <InfoText
                        title="Excelência"
                        text="A excelência está no pleno funcionamento da conexão, no suporte e no atendimento rápido para a resolução de problemas, sempre com um sorriso no rosto e uma simpatia de tocar o coração. A excelência está desde a contratação do serviço até a entrega do que foi prometido."
                    />

                    <InfoText
                        title="Tecnologia"
                        text="Respiramos tecnologia, e prezamos por levar a inovação ao maior número de pessoas possível."
                    />

                    <InfoText
                        title="Ética"
                        text="Respeitamos pessoas, cuidamos de clientes, valorizamos parceiros, sempre de forma justa e correta para o bem das relações pessoais e comerciais."
                    />

                    <InfoText
                        title="Humano"
                        text="Enxergamos além do serviço: percebemos quem são nossos clientes e quais são suas necessidades, levando atendimento atencioso e humanizado."
                    />

                    <div>
                        <h2 className={styles.title2}>Onde estamos:</h2>
                        <p>Av. Manuel Alves Soares, 638 - Sala 3 - Parque Colonial, São Paulo - SP, 04821-270, Brasil</p>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5901174074565!2d-46.68878512387909!3d-23.726326967675035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f1a16fe3451%3A0x2ceb01894481701d!2sHayp!5e0!3m2!1ses-419!2sar!4v1705522750089!5m2!1ses-419!2sar"
                        width="100%"
                        height="300"
                        style={{ border: "none", borderRadius: "5px", margin: "10px auto 20px auto" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>

                </div>


            </main>
        </>
    )
}