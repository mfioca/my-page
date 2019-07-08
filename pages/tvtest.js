import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/layout.js'
import AsyncGet from './tvtest/async_get';
import SearchBar from './tvtest/search_bar';
import TVMazeList from './tvtest/tvmaze_list';
import TVMazeDetail from './tvtest/tvmaze_detail';
import _ from 'lodash';
const ROOT_URL = 'http://api.tvmaze.com';


class TvTestApp extends Component {
    constructor(props) {
        super (props);

        this.state = {
            series: [],
            selectedSerie: null
        };

        this.serieSearch(' ');
    }

    serieSearch(query) {
        AsyncGet(`${ROOT_URL}/search/shows?q=${query}`)
        .then(
            series => {this.setState(
                {
                    series: series,
                    selectedSerie: series[0]
                }
            )},
            error => console.log(error)
        );
    }

    render() {
        const videoSearch = _.debounce((query) => {this.serieSearch(query)}, 300);

        return (
            <Layout>
                <h1 className="center">trying to create a searchable page like my tvpage</h1>
            <div>
                <SearchBar onSearchQueryChanged={videoSearch} />
                <TVMazeDetail serie={this.state.selectedSerie} />
                <TVMazeList
                    onSerieSelect={selectedSerie => this.setState({selectedSerie})}
                    series={this.state.series} />
            </div>
            </Layout>
        );
    }
};

export default TvTestApp;