
Ext.define('Portfolio.view.tablet.main.Main',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Portfolio.view.main.MainController',
        'Portfolio.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    html: 'Hello, World!!'
});
