import Head from "next/head";
import Image from "next/image";
import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Planet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}
