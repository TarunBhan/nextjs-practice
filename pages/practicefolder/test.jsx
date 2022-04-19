import reactDom from "react-dom";
import { useRef } from "react";
import { BlogDetails } from "./practice folder/blogDetails";
import { useRouter } from "next/router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./practice folder/home";
import About from "./about";
const test = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact Path="/">
            <home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default test;
