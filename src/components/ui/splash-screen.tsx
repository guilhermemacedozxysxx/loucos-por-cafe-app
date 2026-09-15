"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

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

      <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-white/20">
        <div className="h-full animate-[loading_1.5s_linear_forwards] bg-white" />
      </div>
    </div>
  );
}