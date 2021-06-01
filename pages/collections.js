import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Collections() {
  return (
    <Layout pageTitle="diva cards">
      <Header />
      <main>
        <section className="flex place-content-center">
          <h3 className="text-xl">COLLECTIONS TODO</h3>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
