import style from 'components/ContactListItem/ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({contact, deleteContact}) => {
    return (
        <li key={contact.id} className={style.listItem}>
            {contact.name}: {contact.number}
            <button value={contact.name} onClick={deleteContact} className={style.listButtton}>Delete</button>
        </li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    deleteContact: PropTypes.func.isRequired
}