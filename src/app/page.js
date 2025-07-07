import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { FiMail } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

const Home = () => {
  return (
    <div className="page">
      <h1 className="pl text-5xl font-bold tracking-tight">
        Creative developer, innovator,
        <br /> and digital architect.
      </h1>
      <p className="pl clr_secondary py-6">
        I&apos;m Harvey, a creative developer and tech entrepreneur based in San
        Francisco Bay Area. I&apos;m the founder <br /> and CTO of NexusFlow, where
        we build cutting-edge platforms that enable everyday users to create{" "}
        <br /> amazing digital experiences with ease.
      </p>
      <div className="pl clr_secondary flex gap-4 text-2xl">
        <Link href="/">
          <AiOutlineTwitter />
        </Link>
        <Link href="/">
          <AiOutlineInstagram />
        </Link>
        <Link href="/">
          <AiOutlineGithub />
        </Link>
        <Link href="/">
          <AiFillLinkedin />
        </Link>
      </div>

      {/* Images */}
      <div
        id="home-image"
        className="mt-28 pb-8 flex gap-8 flex-wrap justify-center"
      >
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg rotate-3">
          <Image src="/plane.jpg" alt="image" fill className="object-cover" />
        </div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg -rotate-3">
          <Image src="/beach.jpg" alt="image" fill className="object-cover" />
        </div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg rotate-2">
          <Image src="/adv1.jpg" alt="image" fill className="object-cover" />
        </div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden relative clr_bg">
          <Image src="/adv2.jpg" alt="image" fill className="object-cover" />
        </div>
      </div>
      {/* Blog, Subscribe and Work */}
      <div className="flex mt-32 gap-15 justify-between flex-wrap">
        <div className="flex flex-col gap-2 max-w-md ">
          <ArticleCard
            href="/"
            date="| November 15, 2023"
            title="Building scalable microservices for the modern web"
            desc=" Most organizations struggle to maintain legacy monolithic systems, but for NexusFlow we needed to architect a platform that would scale seamlessly for the next decade as we expand our global infrastructure and user base."
            link="Read Article"
          />
          <ArticleCard
            href="/"
            date="| November 12, 2023"
            title="Revolutionizing UI/UX with AI-powered design systems"
            desc="When you&apos;re creating a platform as innovative as NexusFlow, you need to push boundaries. I wanted developers to experience our interface and see interactions that felt more intuitive than anything they&apos;d used before."
            link="Read Article"
          />
          <ArticleCard
            href="/"
            date="| October 28, 2023"
            title="Migrating our entire stack to TypeScript and Next.js"
            desc="When we launched the initial version of NexusFlow last year, it was built with vanilla JavaScript. JavaScript is an excellent language with many advantages, but it&apos;s been a while since I&apos;ve seen developers raving about migrating large codebases to JavaScript and I see teams moving to TypeScript every single day."
            link="Read Article"
          />
        </div>
        <div>
          <div id="join" className="clr_border border p-8 text-sm rounded-2xl">
            <div className="flex gap-2 items-center mb-3">
              <FiMail className="text-xl" />
              <h1 className="font-medium">Stay up to date</h1>
            </div>
            <p className="clr_secondary mb-4">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <form action="" className="flex flex-wrap gap-4 justify-between">
              <input
                type="email"
                placeholder="Email address"
                className="clr_border shadow py-3 px-2 flex-1 rounded-md border mr text-black"
              />
              <button className="bg-slate-600 text-white px-2 rounded-md font-medium py-3">
                Join
              </button>
            </form>
          </div>

          {/* WOrk */}
          <div
            id="join"
            className="clr_border mt-8 border p-8 text-sm rounded-2xl"
          >
            <div className="flex gap-4 items-center">
              <MdWorkOutline className="text-xl" />
              <h1 className="font-medium">Work</h1>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/planetaria.ecd81ade.svg" alt="nexusflow" fill />
              </div>
              <div className="w-full">
                <h1 className="font-medium">NexusFlow</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>CTO</p>
                  <p className="font-medium">2020 - Present</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/airbnb.b4000690.svg" alt="aribnb" fill />
              </div>
              <div className="w-full">
                <h1 className="font-medium">Airbnb</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>Lead Developer</p>
                  <p className="font-medium">2017 - 2020</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/facebook.dd9e7d48.svg" alt="Facebook" fill />
              </div>
              <div className="w-full">
                <h1 className="font-medium">Facebook</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>Senior Engineer</p>
                  <p className="font-medium">2015 - 2017</p>
                </div>
              </div>
            </div>

            {/* <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/starbucks.4a5bd050.svg" alt="startup" fill/>
              </div>
              <div className="w-full">
                <h1 className="font-medium">StartupHub</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>Full Stack Developer</p>
                  <p className="font-medium">2013 - 2015</p>
                </div>
              </div>
            </div> */}
            <h1 className="clr_bg py-3 mt-4 cursor-pointer rounded-lg text-center font-medium hover:text-teal-500 transition">
              Download CV
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
