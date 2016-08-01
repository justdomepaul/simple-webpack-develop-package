import React, { Component, PropTypes } from "react";

export default class Footer extends Component {
    renderFilter(filter, name) {
        console.log("footer filter:")
        console.log(filter)
        console.log(name)
        console.log(this.props.filter)
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter("SHOW_ALL", "All")}
                {', '}
                {this.renderFilter("SHOW_COMPLETED", "Completed")}
                {', '}
                {this.renderFilter("SHOW_ACTIVE", "Active")}
                .
            </p>
        );
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};
