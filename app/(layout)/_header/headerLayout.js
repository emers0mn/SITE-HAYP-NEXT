import Link from 'next/link';
import style from './headerMobile.module.css';

export const HeaderLayoutMobile = () => {
    return(
        <>
        <header className={style.container}>
            <div>
            <Link href="/">
                    <div className={style.iconHome} alt="Botão da Home"></div>
                </Link>
            </div>
        </header>
        </>
    )
}

export default HeaderLayoutMobile;