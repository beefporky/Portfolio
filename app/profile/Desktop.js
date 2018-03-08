Ext.define('Portfolio.profile.Desktop', {
    extend: 'Ext.app.Profile',
    // views: ['main.Main'],
    mainView: 'Portfolio.view.desktop.main.Main',
    views: { //when views are declared as an object, the key will be the xtype. No need to declare an xtype in the code itself.
        main: 'Portfolio.view.desktop.main.Main'
    },
    isActive: function () {
        console.log('Desktop: ', Ext.platformTags.desktop);
        return Ext.platformTags.desktop;
    }

});