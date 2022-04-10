import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <BrowserRouter>
        <LoadingBar color='#f11946' progress={this.state.progress} height={3} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="in" apiKey={this.apiKey} category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="in" apiKey={this.apiKey} category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey} apiKey={this.apiKey} apiKey={this.apiKey} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    )
  }
}