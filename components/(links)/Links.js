"use client";

import { useEffect } from 'react';

export default function Links() {
    useEffect(() => {
        function handleResize() {
            var width = window.innerWidth;
            if(width >= 1470){
                window.location.href = 'https://site-pc-hayp-next.vercel.app/';
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return null;
}

