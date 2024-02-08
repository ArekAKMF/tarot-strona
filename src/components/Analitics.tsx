import Script from "next/script";

export default function Analitics() {

    const identifier = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    const anliticsUrl = `https://www.googletagmanager.com/gtag/js?id=${identifier}`;

    const showScript = (
        <>
            <Script strategy="afterInteractive" src={anliticsUrl} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${identifier}', {
            page_path: window.location.pathname,
          });
        `,
                }}
            />
        </>
    );

    return <>{showScript}</>;
}