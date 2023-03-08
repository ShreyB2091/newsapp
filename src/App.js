import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="home" pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
            <Route path="/entertaiment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertaiment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
            <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
            <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}/>
            <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
