"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";

export default function SplashScreen() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(`/${params.slug}/location`);
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, params.slug]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[--background]">
      <Image
        src="/images/LOGO.svg"
        alt="Loucos por Café"
        width={220}
        height={220}
        priority
        className="h-auto w-32"
      />

      <div className="mt-6">
        <PulseLoader color="#ffffff" size={8} speedMultiplier={0.7} />
      </div>
    </div>
  );
}