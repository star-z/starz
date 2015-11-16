import element from 'virtual-element';
import { Link } from 'deku-router5';
import { connect } from 'deku-redux';
import { actions } from 'redux-router5';

const Nav = {
    propTypes: {
        router: { source: 'router' }
    },

    render({ props }) {
        const { router, navigateTo } = props;

        return element('nav', {}, [
            element(Link, { routeName: 'inbox', routeOptions: { reload: true } }, 'Inbox'),
            element(Link, { routeName: 'compose' }, 'Compose'),
            element(Link, { routeName: 'contacts' }, 'Contacts')
        ]);
    }
};

export default connect(
    state => state.router.route,
    { navigateTo: actions.navigateTo }
)(Nav);
