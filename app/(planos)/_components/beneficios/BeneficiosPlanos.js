import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './beneficiosPlanos.module.css'

export function Beneficios({ beneficio, imagem, alter }) {
    return (
        <div className={style.beneficios}>
            <img
                src={`/img/beneficios/planos/${imagem}.svg`}
                width={20}
                height={21}
                alt={alter}
            />
            <p>{beneficio}</p>
        </div>
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


export default function BeneficiosPlanos() {
    var settings = {

        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <section>
            <h2 className={style.title}>Benefícios:</h2>
            <Slider {...settings} className={style.content}>
                <Beneficios
                    imagem="card"
                    beneficio="Clube de desconto"
                    alter= "Clube de beneficios exclusivo"
                />
                <Beneficios
                    imagem="sem-fidelidade"
                    beneficio="Sem Fidelidade"
                    alter= "Sem fidelidade"
                />
                <Beneficios
                    imagem="wifi"
                    beneficio="Wi-fi 5.8ghz"
                    alter= "Wi-Fi na casa toda"
                />
                <Beneficios
                    imagem="365"
                    beneficio="Pacote Microsoft 365"
                    alter= "Pacote Microsoft 365 Completo"
                />
                
            </Slider >
        </section>
    )
}