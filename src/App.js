import React from "react";
import Banner from "./components/Home/Banner";
import Discover from "./components/Home/Discover";
import LiveAnywhere from "./components/Home/LiveAnywhere";
import NearBy from "./components/Home/NearBy";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error";
import Search from "./components/Search/Search";

//https://devdojo.com/savio/set-up-tailwind-jit-in-react-the-fastest-way
//https://githubmemory.com/repo/badrap/bar-of-progress
//https://stackoverflow.com/questions/41736048/what-is-a-state-in-link-component-of-react-router
//https://www.npmjs.com/package/react-date-


const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Banner />
          <NearBy />
          <LiveAnywhere />
          <Discover />
        </Layout>
      </Route>
      <Route path="/search">
        <Layout>
          <Search />
        </Layout>
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
};

export default App;
