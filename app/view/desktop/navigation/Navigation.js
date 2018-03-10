
Ext.define('Portfolio.view.desktop.navigation.Navigation', {
    extend: 'Ext.list.Tree',

    requires: [
        'Portfolio.view.desktop.navigation.NavigationController',
        'Portfolio.view.desktop.navigation.NavigationModel'
    ],

    controller: 'desktop-navigation-navigation',
    viewModel: {
        type: 'desktop-navigation-navigation'
    },
    xtype: 'navigationlist',
    alias: 'widget.navigationlist',
    ui: 'nav',
    reference: 'navigationList',
    store: {
        root: {
            expanded: true,
            children: [{
                text: 'Home',
                leaf: true,
                iconCls: 'x-fa fa-home',
                routeId: 'home'
            },
            {
                text: 'About',
                leaf: true,
                iconCls: 'x-fa fa-info',
                routeId: 'about'
            },
            {
                text: 'Contact',
                leaf: true,
                iconCls: 'x-fa fa-envelope',
                routeId: 'contact'
            }]
        }
    },
    listeners: {
        selectionchange: 'onNavigationListSelectionChange'
    }

});
