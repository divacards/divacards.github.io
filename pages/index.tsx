import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Service from "../components/Home/Service";
import Feature from "../components/Home/Feature";

export default function Index() {
  return (
    <Layout pageTitle="tokyo.cards">
      <Hero />
      <Feature />
      <Service />
      {/* <About /> */}
    </Layout>
  );
}
