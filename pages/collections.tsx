import Layout from "../components/Layout";
import CollectionItem from "../components/Collections/Collection";
import Hero from "../components/Collections/Hero";

export default function Forge() {
  return (
    <Layout pageTitle="tokyo.cards">
      <Hero />
      <section className="deck-section py-5 h-20">
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
        <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
          nft
        </span>
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
      </section>
      <CollectionItem />
      <section className="flex place-content-center">
      </section>
    </Layout>
  );
}
