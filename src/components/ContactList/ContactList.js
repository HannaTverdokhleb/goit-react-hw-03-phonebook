import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import style from 'components/ContactList/ContactList.module.css'

const ContactList = ({contacts, searchValue, deleteContact}) => {
    return (
        <ul className={style.contactList}>
            {
            contacts && contacts
            .filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase())) 
            .map(contact => {
                return (
                    <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
                )
            })}
            
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    searchValue: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}