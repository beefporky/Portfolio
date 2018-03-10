
Ext.define('Portfolio.view.desktop.contentholder.ContentHolder', {
    extend: 'Ext.Panel',

    requires: [
        'Portfolio.view.desktop.contentholder.ContentHolderController',
        'Portfolio.view.desktop.contentholder.ContentHolderModel',
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
        scrollable: true,
        itemId: 'ContentPanel',
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'container',
            itemId: 'homeContent',
            layout: 'center',
            height: 500,
            yPos: 0, //custom config
            items: [{
                xtype: 'component',
                userCls: 'wide-photo'
            }]
        },
        {
            xtype: 'container',
            itemId: 'aboutContent',
            height: 500,
            yPos: 500, //custom config
            layout: 'center',
            bind: {
                html: '{loremIpsum}'
            }
        },
        {
            xtype: 'container',
            itemId: 'contactContent',
            height: 500,
            layout: 'center',
            yPos: 1000, //custom config
            bind: {
                html: '{loremIpsum}'
            }
        }]
    }]
});
