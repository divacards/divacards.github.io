import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function Forge() {
  return (
    <Layout pageTitle="diva cards">
      <Header />
      <main>
        <section className="flex place-content-center">
          <h3 className="text-xl">FORGE TODO</h3>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
