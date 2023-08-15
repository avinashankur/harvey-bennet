import Image from "next/image";
import Link from "next/link";

const Crafting = () => {
  return (
    <div className="article_page">
      <div className="mx-auto max-w-2xl leading-7">
        <time className="clr_light font-medium text-sm">
          | September 5, 2022
        </time>
        <h1 className="text-5xl font-bold my-8">
        Rewriting the cosmOS kernel in Rust
        </h1>
        <p className="clr_secondary">
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>

        <div className="relative w-full h-[30rem] my-8 overflow-hidden rounded-xl">
          <Image
          alt="planetaria"
            src="/planetaria-design-system.webp"
            fill
            className="object-cover"
          />
        </div>
        <p className="clr_secondary">
          I knew that to get it right I was going to have to replicate the
          viewing conditions of someone from the future, so I grabbed my space
          helmet from the closet, created a new Figma document, and got to work.
        </p>

        <h2 className="font-bold text-xl mt-16">Sermone fata</h2>
        <p className="clr_secondary my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore
          delectus aspernatur! Impedit minus iure sapiente expedita ab
          voluptatem in culpa atque non ullam mollitia, explicabo omnis optio
          cupiditate. Obcaecati, doloremque non. <Link href="/" className="text-teal-500 font-medium underline decoration-teal-800 hover:decoration-teal-500">Voluptas</Link> quos
          esse, eius illo facere tempore aspernatur! Deleniti incidunt quod
          expedita itaque architecto iure eligendi blanditiis praesentium!
        </p>
        <p className="clr_secondary my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          veniam. Veritatis sit<Link href="/" className="text-teal-500 font-medium underline decoration-teal-800 hover:decoration-teal-500"> laudantium ratione </Link> recusandae aspernatur?
          Doloremque, quod numquam unde rerum et neque maxime recusandae?
        </p>

        <h2 className="font-bold text-xl mt-16">Lethaei Pindumve me quae dinumerat Pavor</h2>
        <p className="clr_secondary my-6">Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec divite: et ille illa furit sim verbis Cyllenius.</p>
        <ol className="list-decimal clr_secondary pl-8 leading-10">
          <li>Captus inpleverunt collo</li>
          <li>Nec nam placebant</li>
          <li>Siquos vulgus</li>
          <li>Dictis carissime fugae</li>
          <li>A tacitos nulla viginti</li>
        </ol>
        <p className="clr_secondary my-6">Ungues fistula annoso, ille addit linoque motatque uberior verso rubuerunt confine desuetaque. Sanguine anteit emerguntque expugnacior est pennas iniqui ecce haeret genus: peiora imagine fossas <Link href="/" className="text-teal-500 font-medium underline decoration-teal-800 hover:decoration-teal-500">Cephisos formosa</Link> Cephisos formosa! Refugitque amata refelli supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum regna. Postquam conpescit iuvenis <b>habet</b> corpus, et erratica, perdere, tot mota ars talis.</p>
      </div>
    </div>
  );
};

export default Crafting;
