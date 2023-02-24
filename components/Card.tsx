import Image from "next/image";
import Link from "next/link";

interface Image {
  img: string;
}

export default function Card({ img }: Image) {
  return (
    <div className="grow flex h-44 w-full overflow-hidden rounded-xl bg-white shadow-lg hover:scale-95 ease-out duration-200 cursor-pointer">
      <div className="w-60">
        <Image
          className="h-full w-full object-cover duration-200"
          src={img}
          alt="Background"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-2 py-4 px-5">
        <div className="w-full text-left">
          <h1 className="font-bold text-xl text-zinc-700">Visited new places</h1>
          <p className="text-sm text-zinc-500">
            Acquire reliable information and gain the necessary.
          </p>
        </div>
        <Link
          className="rounded-lg bg-zinc-700 py-2 px-4 font-semibold text-white duration-200 hover:bg-zinc-800"
          href={"/login"}
        >
          Let´s Get Started
        </Link>
      </div>
    </div>
  );
}
