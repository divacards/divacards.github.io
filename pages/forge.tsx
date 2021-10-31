import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Invoker } from "../components/Widget/Invoker";

export default function Forge() {
  return (
    <Layout pageTitle="tokyo.cards">
      <Header />
      <main>
        <section className="flex place-content-center">
          <Invoker />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
