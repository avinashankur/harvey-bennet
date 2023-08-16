import Image from "next/image";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const About = () => {
  return (
    <div className="page border flex gap-16 pb-32 flex-wrap">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">
          I’m Spencer Sharp. I live in New York City, where I design the future.
        </h1>
        <p className="clr_secondary my-8 leading-7">
          I’ve loved making things for as long as I can remember, and wrote my
          first program when I was 6 years old, just two weeks after my mom
          brought home the brand new Macintosh LC 550 that I taught myself to
          type on.
        </p>
        <p className="clr_secondary leading-7">
          The only thing I loved more than computers as a kid was space. When I
          was 8, I climbed the 40-foot oak tree at the back of our yard while
          wearing my older sister’s motorcycle helmet, counted down from three,
          and jumped — hoping the tree was tall enough that with just a bit of
          momentum I’d be able to get to orbit.
        </p>
        <p className="clr_secondary my-8 leading-7">
          I spent the next few summers indoors working on a rocket design, while
          I recovered from the multiple surgeries it took to fix my badly broken
          legs. It took nine iterations, but when I was 15 I sent my dad’s
          Blackberry into orbit and was able to transmit a photo back down to
          our family computer from space.
        </p>
        <p className="clr_secondary leading-7">
          Today, I’m the founder of Planetaria, where we’re working on civilian
          space suits and manned shuttle kits you can assemble at home so that
          the next generation of kids really can make it to orbit — from the
          comfort of their own backyards.
        </p>
        <p></p>
      </div>
      <div className="flex-1">
        <div className="relative max-w-md w-full h-[25rem] overflow-hidden rounded-3xl">
          <Image src="/portrait.webp" alt="portrait" fill />
        </div>
        <div className="mt-16 text-sm flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150"
          >
            <AiOutlineTwitter className="clr_secondary text-2xl" />
            <p>Follow on Twitter</p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150"
          >
            <AiOutlineInstagram className="clr_secondary text-2xl" />
            <p>Follow on Instagram </p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150"
          >
            <AiOutlineGithub className="clr_secondary text-2xl" />
            <p>Follow on Github</p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150"
          >
            <AiFillLinkedin className="clr_secondary text-2xl" />
            <p>Follow on LinkedIn</p>
          </Link>
        </div>
        <div className="clr_border mt-8 pt-8 border-t text-sm">
            <Link href="mailto:spencer@plenetaria.com" className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150">
                <FiMail className="clr_secondary text-xl" />
                <p>spencer@planetaria.tech</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
