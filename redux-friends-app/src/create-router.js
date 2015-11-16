import { Router5 } from 'router5'
import historyPlugin from 'router5-history';

export default function createRouter(routes) {
    const router = new Router5()
        .setOption('useHash', false)
        .setOption('defaultRoute', 'friends')
        // Routes
        .addNode('friends',         '/friends')
        // Plugins
        .usePlugin(Router5.loggerPlugin())
        .usePlugin(historyPlugin());

    return router;
};
