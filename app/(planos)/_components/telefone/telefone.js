import Image from 'next/image';
import './Telefone.css'
import Button from '@/app/components/(button)/Button';

function Telefone() {
    return (
        <>
            <div className='contianer-telefone'>
                <h2 className='tittle-benefits-2'>Telefone Fixo Ilimitado</h2>
                <div className="Lista-Telefone">
                    <ul>

                        <li>
                            <img src={"/img/icone-telefone.png"} alt='Sua casa com Telefone' />
                            Portabilidade gratuita</li>
                        <li>
                            <img src={"/img/icone-telefone.png"} alt='Sua casa com Telefone' />
                            Ligações ilimitada para fixo<br />e móvel em todo brasil</li>
                        <li>
                            <img src={"/img/plus-telefone.png"} alt='Sua casa com Telefone' />
                            100 Mega de Bônus
                        </li>

                        <li className='button-telefone1'>
                        <Button
                        btText="Assine agora"
                        href="https://wa.me/551128762641?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+plano+com+Telefone+Fixo"
                    />
                        </li>
                    </ul>

                    <img
                        width={500}
                        height={282}
                        className='imgTelefone'
                        src={"/img/telefone.svg"}
                        alt='Usando o telefone HAYP'
                        quality={30}
                        loading="lazy"
                    />
                </div>

                <div className="icones-telefone">
                    <ul>
                        <li>
                            <img className='iconTelefone' src={"/img/casa-telefone.svg"} alt='Sua casa com Telefone' />
                            <p>Para sua casa</p>
                        </li>
                        <li>
                            <img className='iconTelefone' src={"/img/negocio-telefone.svg"} alt='Sua casa com Telefone' />
                            <p>Para seu negócio</p>
                        </li>
                    </ul>
                </div>

                <div  className='button-telefone2'>
                    <Button
                        btText="Assine agora"
                        href="https://wa.me/551128762641?text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+plano+com+Telefone+Fixo"
                    />
                </div>
            </div>
        </>
    )
}

export default Telefone;