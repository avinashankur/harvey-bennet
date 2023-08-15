import Link from "next/link";
import Image from "next/image";
import ButtonDark from "../ButtonDark/ButtonDark";

const Navbar = () => {
  return (
    <nav className="clr_border border-b-0 flex justify-between items-center border mx-[9.5rem] px-32 pt-6 clr_bg_secondary">
      <Link href="/" className="w-12 h-12 rounded-full relative overflow-hidden">
        <Image
          alt="avatar"
          fill
          src="/avatar.webp"
        />
      </Link>
      <div className="clr_bg_nav clr_border flex text-sm font-medium  shadow px-4 rounded-3xl justify-center  border ">
        <Link
          href="/about"
          className="hover:text-teal-500 grid place-items-center px-3 h-10 transition"
        >
          About
        </Link>
        <Link
          href="/articles"
          className="hover:text-teal-500 grid place-items-center px-3 h-10 transition"
        >
          Articles
        </Link>
        <Link
          href="/projects"
          className="hover:text-teal-500 grid place-items-center px-3 h-10 transition"
        >
          Projects
        </Link>
        <Link
          href="/speaking"
          className="hover:text-teal-500 grid place-items-center px-3 h-10 transition"
        >
          Speaking
        </Link>
        <Link
          href="/uses"
          className="hover:text-teal-500 grid place-items-center px-3 h-10 transition"
        >
          Uses
        </Link>
      </div>
      <ButtonDark />
    </nav>
  );
};

export default Navbar;
