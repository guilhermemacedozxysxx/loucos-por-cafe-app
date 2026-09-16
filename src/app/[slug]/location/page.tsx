"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const LocationPage = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex w-full items-center justify-center pt-14 text-center">
        <p className="font-lufga text-lg font-semibold uppercase">
          Bem Vindo
        </p>
      </header>

      <main className="flex flex-1 flex-col px-5 pt-20">
        <div className="flex items-center gap-3 ml-9">
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[--primary]">
            <Image
              src="/images/LOGO.svg"
              alt="Loucos por Café"
              width={330}
              height={330}
              priority
              className="mr-2 mt-2 h-28 w-28 max-w-none"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-lufga text-lg font-semibold text-black">
              Loucos por Café®
            </h1>

            <p className="font-lufga text-sm font-medium text-[--secondary] opacity-60">
              Cafeteria • 15 - 20 min
            </p>

            <span className="font-lufga text-sm font-medium text-[--primary]">
              Entrega gratuita
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h1 className="font-lufga text-xl font-semibold">
            Permitir localização
          </h1>

          <p className="mx-auto mt-2 max-w-sm font-lufga text-sm font-normal leading-5 text-[--muted-foreground]">
            Use sua localização para encontrarmos as cafeterias mais próximas de
            você e oferecer uma experiência mais personalizada.
          </p>
        </div>
      </main>

      <footer className="px-5 pb-6">
        <Button className="w-full rounded-full border-none bg-[--primary] p-6 font-lufga text-base font-medium text-[--foreground] active:bg-[--primary] active:text-[--foreground] focus:bg-[--primary] focus:text-[--foreground]">
          Permitir localização
        </Button>
      </footer>
    </div>
  );
};

export default LocationPage;