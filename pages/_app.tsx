import React from "react";
import { AppProps } from "next/app";
import "@styles/app.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
