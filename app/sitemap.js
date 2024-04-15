export default function sitemap() {
    return [
        {
            url: 'https://links.hayp.com.br/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://links.hayp.com.br/planos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://links.hayp.com.br/avaliacoes',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://links.hayp.com.br/quem-somos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://links.hayp.com.br/beneficios',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },

    ]
}