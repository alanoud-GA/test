import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }

    handleClick(e) {
        e.stopPropagation()
        this.props.onFaveToggle()
        this.setState({ isFave: !this.state.isFave })
    }
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${isFave}`}>
                <p onClick={(e) => this.handleClick(e)} className="material-icons">{isFave}</p>
            </div>
        )
    }
}
