import Link from 'next/link';
import styles from './header.module.css';

export const HeaderLayout = () => {
    return(
        <>
        <header className={styles.container}>
            <div>
            <Link href="/">
                    <div className={styles.iconHome} alt="Botão da Home"></div>
                </Link>
            </div>
        </header>
        </>
    )
}

export default HeaderLayout;