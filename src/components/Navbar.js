import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Resources/logo.png'
import News from './News'

export default class Navbar extends Component {
    apiKey = process.env.REACT_APP_NEWS_API
    constructor() {
        super();
        this.state = {
            searchQuery: "",
            progress: 0
        }
    }
    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    setSearchQuery = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    search = () => {
        {<News setProgress={this.setProgress} key={this.state.searchQuery} apiKey={this.apiKey} country="in" searchQuery={this.state.searchQuery} />}
    }
    render() {
        return (
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only"></span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src={logo} alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6 navbar" style={{ marginTop: '40px' }}>
                                <Link to="/business" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Business</Link>
                                <Link to="/entertainment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Entertainment</Link>
                                <Link to="/general" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>General</Link>
                                <Link to="/health" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Health</Link>
                                <Link to="/science" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Science</Link>
                                <Link to="/sports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Sports</Link>
                                <Link to="/technology" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ fontSize: '18px' }}>Technology</Link>
                            </div>
                            <div className="flex justify-center" style={{ marginTop: '38px', marginLeft: '220px' }}>
                                <div className="mb-3 xl:w-96">
                                    <div className="input-group relative flex flex-wrap items-stretch w-75 mb-4">
                                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={this.setSearchQuery} />
                                        <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" style={{ marginLeft: '3px' }} onClick={this.search}>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}