import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-between gap-8 place-items-center">
      <Image
        className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/authjs.png"
        alt="Auth.js Logo"
        width={180}
        height={37}
        priority
      />
      <Image
        className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next-authjs.png"
        alt="NextAuth.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
