"use client";
import Head from 'next/head'
import { useEffect } from 'react'

export default function NotFound() {
    useEffect(() => {
        window.location.replace("https://rt-motors.com");
    }, []);
    return (
        <div>
            <Head>
                <title>Redirecting...</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

        </div>
    )
}