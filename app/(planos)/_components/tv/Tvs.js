import style from './tv.module.css';

export function Tvs({ canal }) {
    return (
        <>

            <div className={style.canva}>

                <img
                    width={300}
                    height={500}
                    className={style.imagen}
                    src={`https://hayp.imgix.net/links/img/canais/${canal}.png?fm=webp`}
                    alt={`Canal ${canal}`}
                    loading='lazy'
                />

                <img
                    className={style.logo}
                    src={`https://hayp.imgix.net/links/img/canais/logo/logo-${canal}.png?fm=webp`}
                    alt={`logo ${canal}`}
                    loading='lazy'
                />

            </div>

        </>
    )
}

export function TvAberta() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Tvs
                    canal="Globo"
                />
                <Tvs
                    canal="Band"
                />
                <Tvs
                    canal="SBT"
                />
                <Tvs
                    canal="Record"
                />
                
            </div>
        </div>
    )
}

export function TvFechada() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Tvs
                    canal="Discoverry"
                />
                <Tvs
                    canal="Warner"
                />
                <Tvs
                    canal="Animal"
                />
                <Tvs
                    canal="Fox"
                />
            </div>
        </div>
    )
}