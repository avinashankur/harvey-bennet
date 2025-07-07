import ArticleCard from "@/components/ArticleCard/ArticleCard";
import React from "react";

const Speaking = () => {
  return (
    <div className="page">
      <div className="max-w-2xl ">
        <h1 className="text-5xl font-bold">
          I&apos;ve spoken at events all around the world and been interviewed for
          many podcasts.
        </h1>
        <p className="clr_secondary leading-6 mt-6">
          One of my favorite ways to share my ideas is live on stage, where
          there&apos;s so much more communication bandwidth than there is in writing,
          and I love podcast interviews because they give me the opportunity to
          answer questions instead of just present my opinions.
        </p>
      </div>

      {/* content */}
      <div className="clr_border border-l flex mt-16">
        <p className="p-6 basis-[20%]">Conferences</p>
        <div className="basis-[80%] max-w-xl">
          <ArticleCard
            href="/"
            date="|  TechConf 2023"
            title="Building scalable microservices for the modern web"
            desc="A technical deep-dive into NexusFlow's architecture, the real-time platform I built for creating seamless digital experiences."
            link="Watch Video"
          />
          <ArticleCard
            href="/"
            date="|  Startup Summit 2022"
            title="Lessons learned from our first major platform outage"
            desc="They say that if you're not embarrassed by your first version, you're doing it wrong. Well when you're running a platform serving millions of users it turns out it's a bit more complicated."
            link="Watch Video"
          />
        </div>
      </div>

      <div className="clr_border border-l flex mt-16">
        <p className="p-6 basis-[20%]">Podcasts</p>
        <div className="basis-[80%] max-w-xl">
          <ArticleCard
            href="/"
            date="|  Code & Design, November 2023"
            title="Using AI as a competitive advantage in development"
            desc="How we used cutting-edge AI technology to attract top talent, win over developers, and get more recognition for NexusFlow."
            link="Listen to Podcast"
          />
          <ArticleCard
            href="/"
            date="|  The Tech Velocity Show, August 2023"
            title="Bootstrapping a tech platform to $25M ARR"
            desc="The story of how we built one of the most promising development tool companies in the world without taking any capital from investors."
            link="Listen to Podcast"
          />
          <ArticleCard
            href="/"
            date="|  How They Code Radio, May 2023"
            title="Programming your company's development culture"
            desc="On the importance of creating systems and processes for running your tech team so that everyone knows how to make the right technical decisions no matter the situation."
            link="Listen to Podcast"
          />
        </div>
      </div>
    </div>
  );
};

export default Speaking;
