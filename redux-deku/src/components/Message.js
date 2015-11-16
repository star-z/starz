import element from 'virtual-element';
import { getEmail } from '../api';
import styles from './Message.css';

const Message = {
    render({ props }) {
        const { mailTitle, mailMessage } = getEmail(props.messageId);

        return element('section', { class: styles.message } , [
            element('h4', {}, mailTitle),
            element('p', {}, mailMessage)
        ]);
    }
};

export default Message;
