import styles from "./footer.module.css"


export default function Footer() {
    return(
        <footer className={styles.footer}>
        <div className={styles.redesSociais}>
        <a href="tel:+551128762641">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_telefone.svg" alt='Nosso perfil no Istagram'/>
              Telefone
            </div>
          </a>

          <a href="mailto:contato@hptelecom.com.br">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_email.svg" alt='Nosso perfil no Istagram'/>
              E-mail
            </div>
          </a>
          
          <a href="https://www.instagram.com/haypoficial/">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_instagram.svg" alt='Nosso perfil no Istagram'/>
              Instagram
            </div>
          </a>

          <a href="https://www.facebook.com/HaypTelecom/">
            <div>
              <img className={styles.imgRedes} src="assets/images/icons/assets_facebook.svg" alt='Nosso perfil no Facebook' />
              Facebook
            </div>
          </a>
        </div>

        <div hidden>
          <div className={styles.dados1}>
            <strong>Av. Manuel Alves Soares, 638 - sala 3, Parque Colonial
              <br />
              <span className={styles.dados2}>Cep</span>: 04821-270</strong>
          </div>
          <div className={styles.dados1}>
            <strong><span className={styles.dados2}>CNPJ</span>: 28.973.552/0001-03</strong>
          </div>
          <div className={styles.dados1}>
            <strong><span className={styles.dados2}>Empresa autorizada pela Anatel</span>, ato 1018</strong>
          </div>
        </div>

      </footer>
    )
}