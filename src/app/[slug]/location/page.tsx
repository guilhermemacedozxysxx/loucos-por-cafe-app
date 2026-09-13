import Image from "next/image";

const LocationPage = () => {
  return (
    <>
      <header className="h-6 w-full mt-16 mb-40 flex items-center text-center justify-center">
        <p className="font-lufga font-semibold text-xl uppercase">Bem Vindo</p>
      </header>

      <main>
        <div className="flex gap-3 ml-14 items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[--primary]">
            <Image
              src="/images/LOGO.svg"
              alt="Loucos por Café"
              width={330}
              height={330}
              priority
              className="mt-2 mr-2 h-28 w-28 max-w-none"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-lufga font-semibold text-xl text-black">
              Loucos por Café®
            </h1>

            <p className="font-lufga font-medium text-md text-[--secondary] opacity-60">
              Cafeteria • 15 - 20 min
            </p>

            <span className="font-lufga font-medium text-sm text-[--primary]">
              Entrega gratuita
            </span>
          </div>
        </div>

        <div className="mt-14">
          <h1 className="font-lufga font-semibold text-2xl text-center">
            Permitir localização
          </h1>
          <p className="w-90 h-20 mt-1 font-lufga font-normal text-center text-[--muted-foreground] text-sm">
            Use sua localização para encontrarmos as <br />
            cafeterias mais próximas de você e oferecer uma <br />
            experiência mais personalizada.
          </p>
        </div>
      </main>
    </>
  );
};

export default LocationPage;
