export default {
    docsRepository: 'https://github.com/kkolk/scamp-wiki',
    repository: 'https://github.com/kkolk/scamp-wiki',
    titleSuffix: ' – SCAMP Wiki',

    logo: (
        <>
            <span className="mr-2 font-extrabold hidden md:inline">SCAMP Wiki</span>
        </>
    ),
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="description" content="SCAMP Wiki" />
            <meta name="og:description" content="SCAMP Wiki" />
            <meta name="og:title" content="SCAMP Wiki" />
            <meta name="apple-mobile-web-app-title" content="SCAMP Wiki" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </>
    ),

    search: true,

    prevLinks: false,
    nextLinks: false,

    footer: true,
    footerEditOnGitHubLink: true,
    footerText: (
        <>© SCAMP Wiki, Kevin Kolk 2023{new Date().getFullYear() === 2023 ? '' : ` - ${new Date().getFullYear()}`}</>
    ),
};
