import * as React from "react";
import Home from "./home";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div className="pt-5 mt-5">
        <Home />
      </div>
    </main>
  );
};

export default IndexPage;
