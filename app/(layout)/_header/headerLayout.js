import styles from './header.module.css';

export const HeaderLayout = () => {
    return(
        <>
        <header className={styles.container}>
            <div>
            <a href="/">
                    <div className={styles.iconHome} alt="Botão da Home"></div>
                </a>
            </div>
        </header>
        </>
    )
}

export default HeaderLayout;