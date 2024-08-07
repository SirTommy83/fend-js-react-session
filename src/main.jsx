import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Program from "./pages/Program";

import { Excercise } from "./pages/Excercise";

import { Workout } from "./pages/Workout";
import { WorkoutComplete } from "./pages/WorkoutComplete";
import { Profile } from "./pages/Profile";

export const ThemeContext = createContext(null);

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
    path: "/program/:id/workout/:workoutWithDayId",
    element: <Workout />,
  },
  {
    path: "/program/:id/workout/:workoutId/complete",
    element: <WorkoutComplete />,
  },
  {
    path: "/program/:id/workout/:workoutId/exercise/:exerciseId",
    element: <Excercise />,
  },
]);

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clyfxuesy012407wbk5lmsq26/master",
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
