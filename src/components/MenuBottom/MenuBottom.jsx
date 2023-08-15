import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { LuNewspaper } from "react-icons/lu";
import { LuBook } from "react-icons/lu";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";

const MenuBottom = () => {
  return (
    <div id="menu-bottom" className="hidden">
      <div className="flex text-2xl justify-between px-10 py-6">
        <Link href=""><GoPerson /></Link>
        <Link href=""><LuNewspaper /></Link>
        <Link href=""><LuBook /></Link>
        <Link href=""><PiMicrophoneStageBold /></Link>
        <Link href=""><BsLaptop /></Link>
      </div>
    </div>
  );
};

export default MenuBottom;
