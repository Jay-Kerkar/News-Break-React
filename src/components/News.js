import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Preloader from './Preloader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import logo from '../Resources/logo.png'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    searchQuery: ""
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    searchQuery: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      resultsPerPage: 12,
      page: 1,
      loading: true
    }
  }

  async updateNews() {
    this.props.setProgress(25)
    const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.resultsPerPage}&q=${this.props.searchQuery}`;
    this.setState({ loading: true });
    let data = await fetch(api);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(75)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreNews = async () => {
    this.setState({ page: this.state.page + 1 })
    const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.resultsPerPage}&q=${this.props.searchQuery}`;
    let data = await fetch(api);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }

  render() {
    return (
      <>
        <h1 className='text-center fw-bold heading my-5 text-capitalize' style={{ fontSize: '35px' }}>Top {this.props.category} Headlines</h1>
        {this.state.loading && <Preloader />}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreNews} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Preloader />}>
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 news-card rounded overflow-hidden shadow-lg my-4 position-relative" style={{ height: '548px' }} key={element.url}>
                  <NewsCard title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} image={element.urlToImage ? element.urlToImage : "https://st1.bgr.in/wp-content/uploads/2022/03/Halo-Infinite-Season-2-Lone-Wolves.jpg"} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>;
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
