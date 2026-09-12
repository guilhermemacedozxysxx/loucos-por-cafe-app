const SplashScreen = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[--background]">
      <div className="absolute inset-0 bg-[url('/images/BANNER-LOUCOS-POR-CAFE.png')] bg-[length:900px_auto] bg-repeat opacity-30" />

      <div className="relative z-10">
        <h1>Loucos por Café</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
