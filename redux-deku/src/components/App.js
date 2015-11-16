import element from 'virtual-element';
import Nav from './Nav';
import Main from './Main';
import styles from './App.css';

const App = {
    render({ props }) {
        return element('div', {class: styles.mailClient}, [
            element('aside', {}, element(Nav)),
            element('main', {}, element(Main))
        ]);
    }
}

export default App;
