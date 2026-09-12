import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[--background]">
      <Image
        src="/images/LOGO.svg"
        alt="Loucos por Café"
        width={220}
        height={220}
        priority
        className="h-auto w-32"
      />
    </div>
  );
};

export default SplashScreen;