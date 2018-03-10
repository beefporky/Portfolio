Ext.define('Portfolio.view.desktop.navigation.NavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.desktop-navigation-navigation',

    onNavigationListSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        if (to) {
            this.view.up('app-main').lookupController().redirectTo(to);
            var cp = this.view.up('app-main').down('#ContentPanel');
            var item = cp.query().filter(function (item) {
                if (item.getItemId().split('Content')[0] === to) {
                    return item.getItemId().split('Content')[0];
                }
            })[0];
            
            cp.getScrollable().scrollTo(0,item.yPos,true);
        }
    }

});
