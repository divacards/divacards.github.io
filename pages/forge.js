import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Forge({ blockchain, setBlockchain }) {
  return (
    <Layout pageTitle="diva cards">
      <Header onBlockchainSelect={setBlockchain} blockchain={blockchain} />
      <main>
        <section className="flex place-content-center">
          <h3 className="text-xl">FORGE TODO</h3>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
