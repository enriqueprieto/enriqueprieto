module.exports = {
    title: 'Prieto Blog',
    logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
    },
    items: [
        {to: '/', label: 'Início', position: 'left'},
        {
            type: 'localeDropdown',
            position: 'right', 
        },
        {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
        }
    ]
}