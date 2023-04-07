import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Head from "next/head";
import Spinner from "@/modules/common/components/Spinner/Spinner";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql";
import { I18nextProvider } from "react-i18next";
import i18nObject from "@/i18n/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18nObject}>
      <Provider store={store}>
        <Spinner />
        <ToastContainer />
        <ApolloProvider client={client}>
          <Component {...pageProps} />{" "}
        </ApolloProvider>
      </Provider>
    </I18nextProvider>
  );
}
