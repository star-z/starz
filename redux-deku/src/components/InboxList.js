import element from 'virtual-element';
import InboxItem from './InboxItem';
import styles from './InboxList.css';

const InboxList = {
    render({ props }) {
        return element(
            'ul',
            { class: styles.inboxList },
            props.emails.map(mail => element(InboxItem, { ...mail, key: mail.id }))
        );
    }
};

export default InboxList;
