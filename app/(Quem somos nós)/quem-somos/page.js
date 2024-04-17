import PageQuemSomos from "./quem-somos"
import styles from "./quemsomos.module.css"

export const metadata = {
    title: 'Quem somos',
    alternates: {
        canonical: 'https://hayp.com.br/quem-somos',
        media: {
            'only screen and (max-width: 1380px)': 'https://links.hayp.com.br/quem-somos',
          },
      },
}

export function InfoText({ title, text }) {
    return (
        <p className={styles.textValores}>
            <strong className={styles.valores}>{title}</strong>: {text}
        </p>
    )

}
export default function QuemSomos() {
    return (
        <PageQuemSomos />
    )
}