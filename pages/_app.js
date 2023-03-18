import "@/styles/globals.scss";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { useState } from "react";

import store from "../store";
const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // disabling caching and background reloading during testing
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: false,
            cacheTime: 0,
            retry: false,
          },
        },
      })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}
