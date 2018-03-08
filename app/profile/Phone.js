Ext.define('Portfolio.profile.Phone', {
    extend: 'Ext.app.Profile',
    // views: ['main.Main'],
    mainView: 'Portfolio.view.phone.main.Main',
    views: { //when views are declared as an object, the key will be the xtype. No need to declare an xtype in the code itself.
        main: 'Portfolio.view.phone.main.Main'
    },
    isActive: function () {
        console.log('Phone: ', Ext.platformTags.phone);
        return Ext.platformTags.phone;
    }

});