import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './beneficiosPlanos.module.css'


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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}


export default function Tv({ plano }) {
    var settings = {

        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <section className={style.container}>
            <h2 className={style.title}>Benefícios:</h2>
            <Slider {...settings} className={style.content}>
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

            </Slider >
        </section>
    )
}