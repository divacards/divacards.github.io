import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Invoker } from "../components/Widget/Invoker";

export default function Forge() {
  return (
    <Layout pageTitle="tokyo.cards">
      <section className="flex place-content-center">
        <Invoker />
      </section>
    </Layout>
  );
}
