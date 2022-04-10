import React, { Component } from 'react'

export default class NewsCard extends Component {
  render() {
    let { title, description, image, url, author, date, source } = this.props;
    return (
      <>
        <img className="w-full" style={{ width: '625px', height: '270px' }} src={image} alt="altImage" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}...
            <span className="position-absolute top-3 left-15 start-100 translate-middle badge rounded-pill bg-danger" style={{ marginLeft: "-90px", marginTop: "10px" }}>{source}</span>
          </div>
          <p className="text-gray-700 text-base">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {date}</small></p>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '50px', paddingTop: '20px' }}>
          <a rel="noreferrer" href={url} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Read More</a>
        </div>
      </>
    )
  }
}