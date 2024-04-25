"use client";

import { useEffect } from 'react';

export default function Links({pagina}) {
    useEffect(() => {
        function handleResize() {
            var width = window.innerWidth;
            //console.log("My screen resolution is: " + width);
            
            if(width >= 600){
                window.location.href = `https://site-pc-hayp-next.vercel.app/${pagina}`;
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

  return null;
}
