import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageTabs from "@site/src/components/HomepageTabs";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import Avatar from "../components/Avatar";
import { ShinyButton } from "../components/ShinyButton";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Avatar/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs/intro">
          <ShinyButton />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <HomepageTabs />
      </main>
    </Layout>
  );
}
