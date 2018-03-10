/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Portfolio.view.desktop.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'Portfolio.view.main.MainController',
        'Portfolio.view.main.MainModel',
        'Portfolio.view.desktop.contentholder.ContentHolder',
        'Ext.Button',
        'Ext.Toolbar'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'toolbar',
        height: 100,
        padding: 0,
        ui: 'nav',
        bind: {
            title: '{name}'
        },
        style: {
            'color': '#ffffff',
            'font-weight': '300'
        },
        items: [{
            xtype: 'component',
            userCls: 'header-logo'
        }]
    }, {
        xtype: 'contentholder',
        flex: 1
    }]
});
