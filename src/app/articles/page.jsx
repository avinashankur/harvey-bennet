import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Articles = () => {
  const articles = [
    { 
      key: 1,
      href: "/articles/building-scalable-microservices",
      date: "November 15, 2023",
      title: "Building scalable microservices for the modern web",
      desc: "Most organizations struggle to maintain legacy monolithic systems, but for NexusFlow we needed to architect a platform that would scale seamlessly for the next decade as we expand our global infrastructure and user base.",
    },
    { 
      key: 2,
      href: "/articles/revolutionizing-ui-ux-with-ai",
      date: "November 12, 2023",
      title: "Revolutionizing UI/UX with AI-powered design systems",
      desc: "When you're creating a platform as innovative as NexusFlow, you need to push boundaries. I wanted developers to experience our interface and see interactions that felt more intuitive than anything they'd used before.",
    },
    { 
      key: 3,
      href: "/articles/migrating-to-typescript-nextjs",
      date: "October 28, 2023",
      title: "Migrating our entire stack to TypeScript and Next.js",
      desc: "When we launched the initial version of NexusFlow last year, it was built with vanilla JavaScript. JavaScript is an excellent language with many advantages, but it's been a while since I've seen developers raving about migrating large codebases to JavaScript and I see teams moving to TypeScript every single day.",
    },
  ];

  return (
    <div className="page ">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Writing on software architecture, product innovation, and digital platforms.
        </h1>
        <p className="clr_secondary mt-6">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </div>

      {/* articles */}
      <div className="mt-16">
        {articles.map((article) => (
          <div key={article.key} className="flex  text-sm border-0 border-l clr_border">
            <time className="clr_light p-6 basis-[20%]">{article.date}</time>
            <Link
              href={article.href}
              className="max-w-xl clr_bg_blog_home p-6 rounded-xl duration-200 ease-out basis-[80%]"
            >
              <h2 className="text-base font-medium ">{article.title}</h2>
              <p className="clr_secondary my-3 leading-6">{article.desc}</p>
              <div className="flex gap-1 items-center text-teal-500 font-medium">
                <p className="">Read Article</p>
                <BiChevronRight />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
