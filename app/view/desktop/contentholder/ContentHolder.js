
Ext.define('Portfolio.view.desktop.contentholder.ContentHolder', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Portfolio.view.desktop.contentholder.ContentHolderController',
        'Portfolio.view.desktop.contentholder.ContentHolderModel',
        'Portfolio.view.desktop.main.List'
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
            iconAlign: 'left'
        }
    },

    tabBarPosition: 'left',

    items: [{
        title: 'Home',
        iconCls: 'x-fa fa-home',
        layout: 'fit',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'About',
        iconCls: 'x-fa fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Photos',
        iconCls: 'x-fa fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Contact',
        iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }
    ]
});
