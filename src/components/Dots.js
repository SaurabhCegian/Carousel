import React, { Component } from 'react'
import './Slide.css';

const styles= {
    textAlign: 'center',
}
export default class Dots extends Component {
    render() {
        return (
            <div style = {styles}>
                {
                    this.props.image.map((image, index) =>
                        <span className="dot" onClick={() => this.props.dotClick(index)} >
                        </span>
                    )
                }
            </div>
        )
    }
}
