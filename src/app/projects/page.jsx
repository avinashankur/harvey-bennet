import Link from "next/link";
import { HiOutlineLink } from "react-icons/hi";
import Image from "next/image";

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: "Planetaria",
      image:"/planetaria.ecd81ade.svg",
      href: "/",
      desc: "Creating technology to empower civilians to explore space on their own terms.",
      link: "planetaria.tech",
    },
    {
      id: 2,
      title: "Animaginary",
      image:"/animaginary.jpg",
      href: "/",
      desc: "High performance web animation library, hand-written in optimized WASM.",
      link: "github.com",
    },
    {
      id: 3,
      title: "HelioStream",
      image:"/helio.webp",
      href: "/",
      desc: "Real-time video streaming library, optimized for interstellar transmission.",
      link: "github.com",
    },
    {
      id: 4,
      title: "cosmOS",
      image:"/os.webp",
      href: "/",
      desc: "The operating system that powers our Planetaria space shuttles.",
      link: "github.com",
    },
    {
      id: 5,
      title: "OpenShuttle",
      image:"/spaceship.webp",
      href: "/",
      desc: "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: "github.com",
    },
    {
      id: 6,
      title: "X",
      image:"/x.jpg",
      href: "/",
      desc: "A high-performance monitoring app fo cosmoOs and more. Have been already used in the openShuttle.",
      link: "github.com",
    },
  ];

  return (
    <div className="page">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="clr_secondary mt-6">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
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
