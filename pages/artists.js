import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function Artists() {
  return (
    <Layout pageTitle="diva cards">
      <Header />
      <main>
        <section className="flex place-content-center">
          <h3 className="text-xl">ARTISTS TODO</h3>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
