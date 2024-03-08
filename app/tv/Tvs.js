import style from './tv.module.css';

export function Tvs({ canal }) {
    return (
        <>

            <div className={style.canva}>

                <img
                    width={300}
                    height={500}
                    className={style.imagen}
                    src={`/${canal}`}
                    alt={`Canal ${canal}`}
                />

                <img
                    className={style.logo}
                    src={`/logo-${canal}`}
                    alt={`logo ${canal}`}
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
                    canal="Globo.svg"
                />
                <Tvs
                    canal="Band.svg"
                />
                <Tvs
                    canal="SBT.svg"
                />
                <Tvs
                    canal="Record.svg"
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
                    canal="Discoverry.svg"
                />
                <Tvs
                    canal="Warner.svg"
                />
                <Tvs
                    canal="Animal-Planet.svg"
                />
                <Tvs
                    canal="Fox.svg"
                />
            </div>
        </div>
    )
}