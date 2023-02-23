import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div></div>
            <ul></ul>
            <div>
                <Link href={'/login'}>Login</Link>
                <Link href={'/signup'}>Sign Up</Link>
            </div>
        </header>
    )
}