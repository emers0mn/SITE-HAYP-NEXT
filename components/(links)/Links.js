'use client';

import React, { useState, useEffect } from 'react';
import Planos from '@/app/(planos)/_components/plano/Plano';
import PlanosPC from '@/app/(planos)/_components/planoPC/PlanosPC';

export default function Links() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setIsMobile(width <= 1600);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <Planos /> : <PlanosPC />}
        </>
    );
}
