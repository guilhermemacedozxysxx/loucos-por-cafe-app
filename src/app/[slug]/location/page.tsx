import Image from "next/image";

const LocationPage = () => {
  return (
    <>
      <header className="h-6 w-full mt-16 mb-40 flex items-center text-center justify-center">
        <p className="font-lufga font-semibold text-lg uppercase">Bem Vindo</p>
      </header>

      <main>
        <div className="flex">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-[--primary]">
            <Image
              src="/images/LOGO.svg"
              alt="Loucos por Café"
              width={330}
              height={330}
              priority
              className="mt-2 mr-2 h-20 w-20 max-w-none"
            />
          </div>

          <div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default LocationPage;
