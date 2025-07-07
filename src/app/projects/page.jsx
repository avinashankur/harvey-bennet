import Link from "next/link";
import { HiOutlineLink } from "react-icons/hi";
import Image from "next/image";

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: "NexusFlow",
      image:"/planetaria.ecd81ade.svg",
      href: "/",
      desc: "Building cutting-edge platforms that enable everyday users to create amazing digital experiences with ease",
      link: "nexusflow.tech",
    },
    {
      id: 2,
      title: "CodeCanvas",
      image:"/animaginary.jpg",
      href: "/",
      desc: "AI-powered code generation library, built with advanced machine learning algorithms.",
      link: "github.com",
    },
    {
      id: 3,
      title: "StreamSync",
      image:"/helio.webp",
      href: "/",
      desc: "Real-time data streaming platform, optimized for high-performance web applications.",
      link: "github.com",
    },
    {
      id: 4,
      title: "DevOS",
      image:"/os.webp",
      href: "/",
      desc: "The development environment that powers our NexusFlow development tools.",
      link: "github.com",
    },
    {
      id: 5,
      title: "CloudDeploy",
      image:"/spaceship.webp",
      href: "/",
      desc: "The deployment system I designed that successfully scaled to handle millions of users.",
      link: "github.com",
    },
    {
      id: 6,
      title: "MonitorX",
      image:"/x.jpg",
      href: "/",
      desc: "A high-performance monitoring app for DevOS and more. Already being used in production across multiple platforms.",
      link: "github.com",
    },
  ];

  return (
    <div className="page">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Things I&apos;ve built trying to revolutionize the digital landscape.
        </h1>
        <p className="clr_secondary mt-6">
          I&apos;ve worked on tons of little projects over the years but these are
          the ones that I&apos;m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="flex flex-wrap mt-20">
        {cards.map((card) => (
          <div key={card.id} className="clr_bg_blog_home group rounded-2xl px-6 py-8 max-w-[21rem]">
            <Link href={card.href}>
              <div className="h-12 w-12 clr_bg rounded-full relative overflow-hidden"><Image src={card.image} alt={card.title} fill/></div>
              <h1 className="font-medium mt-4 mb-2">{card.title}</h1>
              <p className="clr_secondary text-sm ">{card.desc}.</p>
              <div className="flex items-center gap-3 mt-4">
                <HiOutlineLink className="group-hover:text-teal-500"/>
                <p className="clr_secondary group-hover:text-teal-500 font-semibold text-sm">
                  {card.link}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
