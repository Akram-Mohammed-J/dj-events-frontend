import Head from "next/head";
import Styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useRouter } from "next/router";
export default function Layout({ title, description, keywords, children }) {
  const router = useRouter();
  return (
    <div>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
      </div>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={Styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "DJ Events",
  description: "Where you ca find hottest parties ",
  keywords: "music,dj,party",
};
