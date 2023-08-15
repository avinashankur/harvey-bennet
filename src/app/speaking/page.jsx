import ArticleCard from "@/components/ArticleCard/ArticleCard";
import React from "react";

const Speaking = () => {
  return (
    <div className="page">
      <div className="max-w-2xl ">
        <h1 className="text-5xl font-bold">
          I’ve spoken at events all around the world and been interviewed for
          many podcasts.
        </h1>
        <p className="clr_secondary leading-6 mt-6">
          One of my favorite ways to share my ideas is live on stage, where
          there’s so much more communication bandwidth than there is in writing,
          and I love podcast interviews because they give me the opportunity to
          answer questions instead of just present my opinions.
        </p>
      </div>

      {/* content */}
      <div className="clr_border border-l flex mt-16">
        <p className="p-6 basis-[20%]">Confrences</p>
        <div className="basis-[80%] max-w-xl">
          <ArticleCard
            href="/"
            date="|  SysConf 2021"
            title="In space, no one can watch you stream — until now"
            desc="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            link="Watch Video"
          />
          <ArticleCard
            href="/"
            date="|  Business of startups 2020"
            title="Lessons learned from our first product recall"
            desc="They say that if you're not embarassed by your first version, you're doing it wrong. Well when you're selling DIY space shuttle kits it turns out it's a bit more complicated."
            link="Watch Video"
          />
        </div>
      </div>

      <div className="clr_border border-l flex mt-16">
        <p className="p-6 basis-[20%]">Podcasts</p>
        <div className="basis-[80%] max-w-xl">
          <ArticleCard
            href="/"
            date="|  Encoding Design, July 2022"
            title="Using design as a competitive advantage"
            desc="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            link="Listen to Podcast"
          />
          <ArticleCard
            href="/"
            date="|  The Escape Velocity Show, March 2022"
            title="Bootstrapping an aerospace company to $17M ARR"
            desc="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            link="Listen to Podcast"
          />
          <ArticleCard
            href="/"
            date="|  How They Work Radio, September 2021"
            title="Programming your company operating system"
            desc="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            link="Listen to Podcast"
          />
        </div>
      </div>
    </div>
  );
};

export default Speaking;
