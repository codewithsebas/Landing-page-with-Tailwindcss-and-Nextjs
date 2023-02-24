import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.svg"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <h1 className="text-2xl font-extrabold text-zinc-700">Globos</h1>
        </div>
        <ul className="flex gap-5 font-bold text-zinc-600 text-lg">
          <li className="cursor-pointer border-b-2 border-zinc-700 pb-1">Home</li>
          <li className="cursor-pointer ">Product</li>
          <li className="cursor-pointer">Customers</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
        <div className="flex items-center gap-3">
          <Link
            className="rounded-lg border border-black/20 bg-white py-2 px-7 font-bold duration-200 hover:border-black/40"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="rounded-lg bg-zinc-700 py-2 px-5 font-bold text-white shadow duration-200 hover:bg-zinc-800"
            href={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
