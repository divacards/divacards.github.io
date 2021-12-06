import Layout from "../components/Layout";
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
