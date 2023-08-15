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
        Software designer, founder,
        <br /> and amateur astronaut.
      </h1>
      <p className="pl clr_secondary py-6">
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder <br /> and CEO of Planetaria, where we develop
        technologies that empower regular people to explore <br /> space on
        their own terms.
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
      <div className="mt-28 pb-8 flex gap-8 flex-wrap justify-center">
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg rotate-3"><Image src="/image-1.webp" alt="image" fill className="object-cover"/></div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg -rotate-3"><Image src="/image-2.webp" alt="image" fill className="object-cover"/></div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden clr_bg rotate-2"><Image src="/image-3.webp" alt="image" fill className="object-cover"/></div>
        <div className="h-[18rem] w-[14rem] rounded-lg overflow-hidden relative clr_bg"><Image src="/image-4.webp" alt="image" fill className="object-cover"/></div>
      </div>
      {/* Blog, Subscribe and Work */}
      <div className="flex mt-32 gap-15 justify-between flex-wrap">
        <div className="flex flex-col gap-2 max-w-md ">
          <ArticleCard
            href="/"
            date="| September 5, 2022"
            title="Crafting a design system for a multiplanetary future"
            desc=" Most companies try to stay ahead of the curve when it comes to visual
            design, but for Planetaria we needed to create a brand that would still
            inspire us 100 years from now when humanity has spread across our entire
            solar system."
            link="Read Article"
          />
          <ArticleCard
            href="/"
            date="| September 2, 2022"
            title="Introducing Animaginary: High performance web animations"
            desc="When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
            link="Read Article"
          />
          <ArticleCard
            href="/"
            date="| July 14, 2022"
            title="Rewriting the cosmOS kernel in Rust"
            desc="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
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
          <div id="join" className="clr_border mt-8 border p-8 text-sm rounded-2xl">
            <div className="flex gap-4 items-center">
              <MdWorkOutline className="text-xl" />
              <h1 className="font-medium">Work</h1>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/planetaria.ecd81ade.svg" alt="planetaria" fill/>
              </div>
              <div className="w-full">
                <h1 className="font-medium">Planeteria</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>CEO</p>
                  <p className="font-medium">2019 - Present</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/airbnb.b4000690.svg" alt="aribnb" fill/>
              </div>
              <div className="w-full">
                <h1 className="font-medium">Airbnb</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>CEO</p>
                  <p className="font-medium">2014 - 2019</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/facebook.dd9e7d48.svg" alt="facebook" fill/>
              </div>
              <div className="w-full">
                <h1 className="font-medium">Facebook</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>CEO</p>
                  <p className="font-medium">2011 - 20014</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="clr_bg h-10 w-12 rounded-full relative">
                <Image src="/starbucks.4a5bd050.svg" alt="starbucks" fill/>
              </div>
              <div className="w-full">
                <h1 className="font-medium">Starbucks</h1>
                <div className="clr_secondary flex justify-between items-center text-xs">
                  <p>CEO</p>
                  <p className="font-medium">2008 - 2011</p>
                </div>
              </div>
            </div>
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
