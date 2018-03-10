/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Portfolio.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        ':node': 'onRouteChange'
    },

    onRouteChange: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var view = this.getView(),
            navigationList = view.down('navigationlist'),
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag) ||
                store.findNode('viewType', hashTag);
        // item = view.child('component[routeId=' + hashTag + ']');

        // if (!item) {
        //     item = {
        //         xtype: node.get('viewType'),
        //         routeId: hashTag
        //     };
        // }
        // view.setActiveItem(item);

        navigationList.setSelection(node);
    }
});
