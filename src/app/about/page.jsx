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
          I&apos;m Harvey Bennet. I live in San Francisco, where I build the future.
        </h1>
        <p className="clr_secondary my-8 leading-7">
          I&apos;ve loved creating digital experiences for as long as I can remember, and wrote my
          first line of code when I was 7 years old, just three weeks after my dad
          brought home the brand new iMac G3 that I taught myself to
          program on.
        </p>
        <p className="clr_secondary leading-7">
          The only thing I loved more than computers as a kid was building things. When I
          was 9, I disassembled my family&apos;s VCR while wearing my older brother&apos;s safety goggles, 
          studied every component, and reassembled it — hoping to understand how technology
          worked and maybe even improve it somehow.
        </p>
        <p className="clr_secondary my-8 leading-7">
          I spent the next few summers indoors working on web applications, while
          I recovered from the multiple coding sessions that left me with carpal tunnel.
          It took eleven iterations, but when I was 16 I built my first full-stack
          application and was able to deploy it live on the internet for the world to see.
        </p>
        <p className="clr_secondary leading-7">
          Today, I&apos;m the founder of NexusFlow, where we&apos;re working on AI-powered
          development tools and no-code platforms that enable anyone to create
          amazing digital experiences — from the comfort of their own browser.
        </p>
        <p></p>
      </div>
      <div className="flex-1">
        <div className="relative max-w-md w-full h-[25rem] overflow-hidden rounded-3xl">
          <Image src="/about.jpg" alt="portrait" fill className="object-cover object-top"/>
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
            <Link href="mailto:harvey@gmail.com" className="flex items-center gap-4 font-semibold hover:text-teal-500 duration-150">
                <FiMail className="clr_secondary text-xl" />
                <p>harvey@gmail.com</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
