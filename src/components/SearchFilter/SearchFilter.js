import { Component } from "react";
import PropTypes from 'prop-types';
import style from 'components/SearchFilter/SearchFilter.module.css';

class SearchFilter extends Component {
    state = {
        query: '',
    }
    handleChange = e => {
        this.setState({ query: e.target.value });
        this.props.toFind(e.target.value);
    }
    render() {
        const { query } = this.state;
        return (
            <>
            <h3>Find contact by name</h3>
                <label>
                    <input type="text" value={query} onChange={this.handleChange} placeholder="Search..." className={style.searchInput}/>
                </label>
            </>
        )
    }
}

export default SearchFilter;

SearchFilter.propTypes = {
    toFind: PropTypes.func.isRequired
}