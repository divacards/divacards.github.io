import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Footer from "../components/Footer";

export default function Index({ blockchain, setBlockchain }) {
  return (
    <Layout pageTitle="diva cards">
      <Header onBlockchainSelect={setBlockchain} blockchain={blockchain} />
      <main>
        <Hero />
        {/* <Feature /> */}
        <Service />
        {/* <About /> */}
      </main>
      <Footer />
    </Layout>
  );
}
