import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const ArticleCard = ({href, date, title, desc, link }) => {
  return (
    <Link
      href={href}
      className="clr_bg_blog_home flex flex-col gap-3 text-sm p-6 py-8 rounded-2xl transition ease-out"
    >
      <time className="clr_light">{date}</time>
      <h1 className="font-medium text-base">{title}</h1>
      <p className="clr_secondary">{desc}</p>
      <div className="flex gap-1 items-center text-teal-500 font-semibold">
        <p className="">{link}</p>
        <BiChevronRight />
      </div>
    </Link>
  );
};

export default ArticleCard;
