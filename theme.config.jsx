export default {
    logo: <span>My photo</span>,
    project: {
        link: 'https://github.com/Ruanrls/portfolio'
    },
    useNextSeoProps() {
        const {asPath} = useRouter()
        if(asPath !== '/') {
            return {
                titleTemplate: '%s - My portfolio',
            }
        }
    },
    i18n: [
        {locale: 'en', text: 'English'},
        {locale: 'pt-BR', text: 'Português'},
    ]
}