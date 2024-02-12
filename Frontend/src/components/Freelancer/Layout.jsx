import React from "react";
import Sidebar from "../../components/Freelancer/Sidebar";
import Footer from "../Footer";
import Header from "./Header";
import { Fragment } from "react/cjs/react.development";

const FreelancerLayout = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Footer />
    </Fragment>
  );
};

export default FreelancerLayout;
