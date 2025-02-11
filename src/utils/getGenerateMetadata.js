import Head from "next/head";

export default function GetGenerateMetadata({meta = {}}) {
    const defaultMetas = {
        title: 'Qarabağ Universiteti',
        description: 'Qarabağ Universiteti Azərbaycan Respublikası Elm və Təhsil Nazirliyinin tabeliyində olan ali təhsil müəssisəsidir. Azərbaycanın Qarabağ İqtisadi Rayonunun Xankəndi şəhərində yerləşir.',
    }

    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#44766C"/>
            <meta name="apple-mobile-web-app-title" content="Karabakh University"/>
            <meta name="application-name" content="Karabakh University"/>
            <meta name="msapplication-TileColor" content="#44766C"/>
            <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png"/>
            <meta name="theme-color" content="#44766C"/>

            <title>{meta.title || defaultMetas.title}</title>
            <meta name="title" content={meta.title || defaultMetas.title}/>
            <meta name="description" content={meta.description || defaultMetas.description}/>
            <meta property="og:url" content={meta.title || defaultMetas.title} />
            <meta property="og:site_name" content={meta.title || defaultMetas.title} />
        </Head>
    )
}