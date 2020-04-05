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
            <form>
            <label>
              <h3>Most Trending Videos:</h3>
              <input type="text" name="name" />
            </label> <br />
            <input type="submit" value="Search" />
          </form>
        )
    }
}
export default Searchbar;