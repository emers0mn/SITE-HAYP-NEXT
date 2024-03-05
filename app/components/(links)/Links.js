"use client";

import { useEffect } from 'react';

export default function Links() {
    useEffect(() => {
        function handleResize() {
            var width = window.innerWidth;
            //console.log("My screen resolution is: " + width);
            
            if(width <= 1380){
                window.location.href = 'https://links.hayp.com.br/';
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
