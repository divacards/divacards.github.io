import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <Layout pageTitle="diva cards">
      <Header />
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
