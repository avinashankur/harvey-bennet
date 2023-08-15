import UsesCard from "@/components/UsesCard/UsesCard";

const Uses = () => {
  return (
    <div className="page">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="clr_secondary mt-6">
          I get asked a lot about the things I use to build software, stay
          productive, or buy to fool myself into thinking I’m being productive
          when I’m really just procrastinating. Here’s a big list of all of my
          favorite stuff.
        </p>
      </div>

      {/* main content */}
      <div className="clr_border flex mt-16 border-l pl-5 text-sm">
        <p className="clr_secondary basis-[20%]">Workstation</p>
        <div className="basis-[80%] max-w-xl">
          <UsesCard
            title="
            16” MacBook Pro, M1 Max, 64GB RAM (2021)"
            desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
          />
          <UsesCard
            title="Apple Pro Display XDR (Standard Glass)"
            desc="The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts."
          />
          <UsesCard
            title="IBM Model M SSK Industrial Keyboard"
            desc="They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main."
          />
          <UsesCard
            title="Apple Magic Trackpad"
            desc="Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers."
          />
          <UsesCard
            title="Herman Miller Aeron Chair"
            desc="If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair."
          />
        </div>
      </div>

      {/* part 2 */}
      <div className="clr_border flex mt-16 border-l pl-5 text-sm">
        <p className="clr_secondary basis-[20%]">Development Tools</p>
        <div className="basis-[80%] max-w-xl">
          <UsesCard
            title="
            Sublime Text 4"
            desc="I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made."
          />
          <UsesCard
            title="iTerm2"
            desc="I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use."
          />
          <UsesCard
            title="TablePlus"
            desc="Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years."
          />
        </div>
      </div>

      {/* part 3 */}
      <div className="clr_border flex mt-16 border-l pl-5 text-sm">
        <p className="clr_secondary basis-[20%]">Design</p>
        <div className="basis-[80%] max-w-xl">
          <UsesCard
            title="Figma"
            desc="We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook."
          />
        </div>
      </div>

      {/* part 4 */}
      <div className="clr_border flex mt-16 border-l pl-5 text-sm">
        <p className="clr_secondary basis-[20%]">Productivity</p>
        <div className="basis-[80%] max-w-xl">
          <UsesCard
            title="Alfred"
            desc="It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world."
          />
          <UsesCard
            title="Reflect"
            desc="Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note."
          />
          <UsesCard
            title="SavvyCal"
            desc="Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week."
          />
          <UsesCard
            title="Focus"
            desc="Simple tool for blocking distracting websites when I need to just do the work and get some momentum going."
          />
        </div>
      </div>
    </div>
  );
};

export default Uses;
