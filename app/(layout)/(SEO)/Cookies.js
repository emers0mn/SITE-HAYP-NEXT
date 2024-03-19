'use client';
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

// https://www.npmjs.com/package/react-cookie-consent#getting-the-cookies-value-in-your-own-code

export default function Cookies() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceitar"
            // visible="show"
            cookieName="myAwesomeCookieName2"
            
            style={{ 
                background: "var(--cor-3)",
                fontSize:"12px",
                position:"sticky",
            }}
            
            buttonStyle={{ 
                background: "var(--cor-2)",
                borderRadius:"10px",
                color: "var(--cor-3)",
                fontSize: "12px",
                fontFamily:"gordita",
                fontWeight:"500",
            }}
            
        >
            Esta página utiliza Cookies para poder garantir a melhor experência.{" "}
            <Link href={"/Quemsomos/politicas-internas"} style={{ fontSize: "10px", color:"var(--cor-2)", marginLeft:"10px" }}>Políticas de privacidade</Link>
        </CookieConsent>
    )
}