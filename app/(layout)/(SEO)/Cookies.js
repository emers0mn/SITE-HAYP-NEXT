'use client';
import CookieConsent from "react-cookie-consent";

// https://www.npmjs.com/package/react-cookie-consent#getting-the-cookies-value-in-your-own-code

export default function Cookies() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aceitar"
            
            cookieName="myAwesomeCookieName2"
            style={{ background: "var(--cor-3)", fontSize:"12px", position:"sticky" }}
            buttonStyle={{ background: "var(--cor-2)", color: "var(--cor-3)", fontSize: "12px", fontFamily:"gordita", fontWeight:"500" }}
            
        >
            Esta página utiliza Cookies para poder garantir a melhor experência{" "}
            <a href="/saibamais" style={{ fontSize: "10px" }}>saiba mais</a>
        </CookieConsent>
    )
}