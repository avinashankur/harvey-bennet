import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Articles = () => {
  const articles = [
    { 
      key: 1,
      href: "/articles/crafting-a-design-system-for-a-multiplanetary-future",
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      desc: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    },
    { 
      key: 2,
      href: "/articles/introducing-animaginary",
      date: "September 2, 2022",
      title: "Introducing Animaginary: High performance web animations",
      desc: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    },
    { 
      key: 3,
      href: "/articles/rewriting-the-cosmos-kernel-in-rust",
      date: "July 14, 2022",
      title: "Rewriting the cosmOS kernel in Rust",
      desc: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    },
  ];

  return (
    <div className="page ">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="clr_secondary mt-6">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>

      {/* articles */}
      <div className="mt-16">
        {articles.map((article) => (
          <div key={article.id} className="flex  text-sm border-0 border-l clr_border">
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
