import React from "react";


class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }
    handleFilter = (event) => {
        let searchText = '';
        if (this.state.search === '') {
            searchText = 'Breaking Bad';
        }else {
            searchText = this.state.search;
        }
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(searchText, this.state.type);
        });
    }


    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder='search'
                    type="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className='btn search-btn deep-purple darken-3'
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search
                </button>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all"
                               onClick={this.handleFilter}
                               checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie"
                               onClick={this.handleFilter}
                               checked={this.state.type === 'movie'}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series"
                               onClick={this.handleFilter}
                               checked={this.state.type === 'series'}/>
                        <span>Series</span>
                    </label>
                </div>

            </div>
        </div>

    }
}

export {Search}