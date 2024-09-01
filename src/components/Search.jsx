import React,{useState} from "react";


const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const[search,setSearch]=useState('');
    const[type,setType]=useState('all');



    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }
    const handleFilter = (event) => {
        let searchText = '';
        if (search === '') {
            searchText = 'Breaking Bad';
        }else {
            searchText = search;
        }
        setType(event.target.dataset.type);
        searchMovies(searchText,event.target.dataset.type);

    }



        return <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder='search'
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button className='btn search-btn deep-purple darken-3'
                        onClick={() => searchMovies(search, type)}>Search
                </button>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all"
                               onClick={handleFilter}
                               checked={type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie"
                               onClick={handleFilter}
                               checked={type === 'movie'}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series"
                               onClick={handleFilter}
                               checked={type === 'series'}/>
                        <span>Series</span>
                    </label>
                </div>

            </div>
        </div>


}

export {Search}