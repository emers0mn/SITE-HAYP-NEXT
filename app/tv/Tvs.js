import style from './tv.module.css';
import Slider from 'infinite-react-carousel';

export function Tvs({ canal }) {
    return (
        <>

            <div className={style.canva}>

                <img
                    width={300}
                    height={500}
                    className={style.imagen}
                    src={`/${canal}.svg`}
                    alt={`Canal ${canal}`}
                />

                <img
                    className={style.logo}
                    src={`/logo-${canal}.svg`}
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

export function Slide() {
    return (
        
            <Slider
            dots
            autoplay="true"
            pauseOnhover="false"
            className="carousel-initialized"
            >
                <Tvs
                    canal="Discoverry"
                />
                <Tvs
                    canal="Warner"
                />
                <Tvs
                    canal="Animal"
                />
            </Slider>
        
    )
}