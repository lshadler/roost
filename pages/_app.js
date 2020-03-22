import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../config/theme';
import Nav from '../components/Nav';
import WebsiteLink from '../components/WebsiteLink';

/**
 * Adds theme via Material UI theme provider
 */
export default class RoostApp extends App {
  /**
   * Grab server-side styling
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Render page
   * @return {JSX} a next page
   */
  render() {
    const {Component, pageProps} = this.props;

    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <Component {...pageProps} />

          <footer>
            Questions? Business Request? Send us a message at&nbsp;
            <WebsiteLink
              href="mailto:roost.sb@gmail.com"
              color="primary"
              label="roost.sb@gmail.com" />
          </footer>
        </ThemeProvider>
        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
