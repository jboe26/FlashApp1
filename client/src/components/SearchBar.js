import React from 'react';
import './search.css';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search">
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                        <button id="search-term" type="button" onClick={this.handleFormSubmit}>Search</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default Searchbar;