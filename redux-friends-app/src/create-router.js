import { Router5 } from 'router5'
import historyPlugin from 'router5-history';

export default function createRouter(routes) {
    const router = new Router5()
        .setOption('useHash', false)
        .setOption('defaultRoute', 'movie')
        // Routes
        .addNode('movie',         '/movie')
        .addNode('movie.detail', '/detail/:id')
        // Plugins
        .usePlugin(Router5.loggerPlugin())
        .usePlugin(historyPlugin());

    return router;
};
