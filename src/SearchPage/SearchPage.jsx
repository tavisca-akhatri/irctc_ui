import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../SearchResults/Results';

class SearchPage extends Component {
    state = {
        trainData : []
    }

    updateTrainData(trainData){
        this.setState({trainData});
    }

    render() {

        this.updateTrainData = this.updateTrainData.bind(this);

        return (
            <React.Fragment>
                <Search updateTrainData={this.updateTrainData} />
                <br />
                <Results trainData={this.state.trainData} />
            </React.Fragment>

        );
    }
}

export default SearchPage;