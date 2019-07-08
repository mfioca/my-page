import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {query: ''};
    }

    onInputChange(query) {
        this.setState({query});
        this.props.onSearchQueryChanged(query);
    }

    render() {
        return (
            <div className="search-bar">
                <p>Search:
                <input
                    value={this.state.query}
                    onChange={event => this.onInputChange(event.target.value)} />
                    </p>  
            </div>
        );
    }
}

export default SearchBar;