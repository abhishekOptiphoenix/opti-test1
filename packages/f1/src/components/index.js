import React, { useState, useEffect, Fragment } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import AbTest from "./pages/ab-tests";
import HomePage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from "./styles/bootstrap.css";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import customStyle from "./styles/custom.css";
import ScrollToTop from "./goTop";
import Footer2 from "./footer/footer-2";
import Loader from "./customComponents/Loader";
import slickcss from "slick-carousel/slick/slick.css";
import slickcssTheme from "slick-carousel/slick/slick-theme.css";
import AboutUs from "./pages/about-us";
import CroPlan from "./pages/cro-plan";
import Drift from "react-driftjs";
import ContactUs from "./pages/contact-us";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  const [isloading, setIsLoading] = useState(true);
  const data = state.source.get(state.router.link);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return isloading ? (
    <Loader />
  ) : (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={globalStyles} />
      <Global styles={css(customStyle)} />
      <Global styles={css(slickcss)} />
      <Global styles={css(slickcssTheme)} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <HomePage when={data.isHome} />
          <AbTest when={data.isAbTest} />
          <AboutUs when={data.isAbout} />
          <CroPlan when={data.isCro} />
          <ContactUs when={data.isContact} />
          <Jobs when={data.isAwsmJobOpenings} />
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
        <Fragment>
        <Drift appId="k5ix5gaeka4x" />
          <FooterContainer>
            <Footer />
          </FooterContainer>
          <FooterContainer2>
            <Footer2 />
            <ScrollToTop />
          </FooterContainer2>
        </Fragment>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --primary: #f7b246;
    --brand: #5b3be8;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
  }
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;900&family=Inter:wght@400;500;700;900&family=Merriweather+Sans&family=Manrope:wght@400;600&family=Enriqueta:wght@500&display=swap");

  body {
    margin: 0;
    color: var(--bodycolor);
    font-family: "Inter", sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
    /* max-width: 1440px;
    margin:0 auto; */
  }
  html {
    height: -webkit-fill-available;
  }
  a,
  a:visited {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }
  p {
    line-height: 24px;
    font-size: 18px;
    font-family: "Source Sans Pro", sans-serif;
  }
  .container {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section {
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1.75rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 1.75rem;
  align-items: center;
  /* @media (max-width: 992px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  } */
  /* @media (max-width: 480px) {
    margin-top: 24px;
  } */
`;
const FooterContainer = styled.div`
  width: 100%;
  background: rgb(126, 0, 198);
  background: linear-gradient(
    90deg,
    rgba(126, 0, 198, 1) 13%,
    rgba(87, 52, 240, 1) 82%
  );
`;

const FooterContainer2 = styled.div`
  width: 100%;
  background: #ffffff;
  text-align: center;
  p {
    padding: 0.8rem;
    font-size: 14px;
    margin-bottom: 0;
  }
  .scrollToTop {
    position: fixed;
    inset: auto auto 2rem 3rem;
  }
  .scroll_btn_container button:after {
    content: " ";
    height: 5px;
    width: 100%;
    background: #1e1e1e3d;
    position: absolute;
    bottom: -8px;
    left: 0;
    border-radius: 50%;
  }
`;

const Main = styled.div`
  width: 100%;
`;
