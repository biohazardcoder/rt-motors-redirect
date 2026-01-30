"use client";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("https://rt-motors.com");
  }, []);
  return (
    <main className="w-full h-screen bg-white">
      <Head >
        <title>Redirecting...</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </main>
  );
}
