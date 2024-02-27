import Script from "next/script"

export function GoogleAnalytcs() {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-9FVHHECVF3"
            />

            <Script id="google-analytcs" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-9FVHHECVF3');
                `}
            </Script>
        </>
    )
}

export function Hotjar() {
    return (
        <>
            <Script id="hotjar" strategy="afterInteractive">
                {`
                    (function (h, o, t, j, a, r) {
                        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                        h._hjSettings = { hjid: 3072707, hjsv: 6 };
                        a = o.getElementsByTagName('head')[0];
                        r = o.createElement('script'); r.async = 1;
                        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                        a.appendChild(r);
                      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
                `}
            </Script>
        </>
    )
}