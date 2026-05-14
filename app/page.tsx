import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Monster Blanco + Pre-entreno
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Soy Leonardo Delgado Medrano. Una mezcla simple y común es usar Monster Blanco con pre-entreno en polvo.
            Mezcla una porción de pre-entreno con un poco de Monster Blanco y agita bien. Evita exagerar la dosis y bebe agua adicional.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <div className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 text-zinc-950 dark:text-zinc-50 md:w-[158px]">
            Consejo: sé responsable con la cafeína.
          </div>
        </div>
      </main>
    </div>
  );
}
