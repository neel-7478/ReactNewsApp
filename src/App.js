// import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pagesize={this.pageSize}
                country={"in"}
                category={"general"}
              />
            </Route>
            <Route exact path="/home">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pagesize={this.pageSize}
                country={"in"}
                category={"general"}
              />
            </Route>
            <Route path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pagesize={this.pageSize}
                country={"in"}
                category={"business"}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pagesize={this.pageSize}
                country={"in"}
                category={"entertainment"}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pagesize={this.pageSize}
                country={"in"}
                category={"health"}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pagesize={this.pageSize}
                country={"in"}
                category={"science"}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pagesize={this.pageSize}
                country={"in"}
                category={"sports"}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pagesize={this.pageSize}
                country={"in"}
                category={"technology"}
              />
            </Route>
          </Switch>
        </Router>
        <Fragment>
          <ScrollButton />
        </Fragment>
      </div>
    );
  }
}
