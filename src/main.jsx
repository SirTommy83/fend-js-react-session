import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import "./index.css";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Program from "./pages/Program";

export const ThemeContext = createContext(null);

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
  {
    path: "/program/:id/workout/:workoutId/exercise/:exerciseId",
    element: <Program />,
  },
]);

const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cko4j7ro2ig7j01yz5tfzd0fi/master",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ThemeContext.Provider>
  </React.StrictMode>
);
