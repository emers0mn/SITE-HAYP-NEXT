import Link from 'next/link';
import style from './button.module.css';


export default function Button( {btText, href} ){
    return(
        <>
        <Link href={href}>
            <button className={style.CButton}>{btText}</button>
        </Link>
        </>
    )
}