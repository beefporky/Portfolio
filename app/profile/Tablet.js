Ext.define('Portfolio.profile.Tablet', {
    extend: 'Ext.app.Profile',
    // views: ['main.Main'],
    mainView: 'Portfolio.view.tablet.main.Main',
    views: { //when views are declared as an object, the key will be the xtype. No need to declare an xtype in the code itself.
        main: 'Portfolio.view.tablet.main.Main'
    },
    isActive: function () {
        console.log('Tablet: ', Ext.platformTags.tablet);
        return Ext.platformTags.tablet;
    }

});