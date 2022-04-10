import React, { Component } from 'react'
import loader from '../Resources/loader.gif'

export default class Preloader extends Component {
    render() {
        return (
            <div className="d-flex justify-center align-center">
                <img clasName='my-5' src={loader} alt="alternateImage" />
            </div>
        )
    }
}
