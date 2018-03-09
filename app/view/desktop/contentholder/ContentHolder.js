
Ext.define('Portfolio.view.desktop.contentholder.ContentHolder', {
    extend: 'Ext.Panel',

    requires: [
        'Portfolio.view.desktop.contentholder.ContentHolderController',
        'Portfolio.view.desktop.contentholder.ContentHolderModel',
        'Portfolio.view.desktop.main.List',
        'Portfolio.view.desktop.navigation.Navigation'
    ],

    controller: 'desktop-contentholder-contentholder',
    viewModel: {
        type: 'desktop-contentholder-contentholder'
    },
    xtype: 'contentholder',
    alias: 'widget.contentholder',
    itemId: 'ContentHolder',
    defaults: {
        tab: {
            iconAlign: 'left',
            width: 100
        }
    },
    tabBarPosition: 'left',
    scrollable: true,
    layout: 'hbox',
    items: [{
        xtype: 'navigationlist',
        width: 200
    },{
        xtype: 'panel',
        flex: 1,
        ui: 'dark',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
