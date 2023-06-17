import {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import style from 'components/AddContactForm/AddContactForm.module.css';

class AddContactForm extends Component {
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value });
    }
    
    handleOnSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className={style.phonebookForm}>
                <label htmlFor={ this.nameInputId } className={style.label} >Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={ this.nameInputId }
                    className={style.input}
                />
                <label htmlFor={ this.numberInputId } className={style.label}>Number</label>
                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={this.numberInputId}
                    className={style.input}
                />
                <button type='submit' className={style.button}>Add contact</button>
            </form>
        )
    }
}

export default AddContactForm;

AddContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}