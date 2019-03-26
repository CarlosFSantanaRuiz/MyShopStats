const mongoose = require('mongoose');

const UserSettingsSchema = mongoose.Schema({
    canAddInvoices: {type: Boolean, require: true},
    canDeleteInvoices: {type: Boolean, require: true},
    canAddShops: {type: Boolean, require: true},
    canDeleteShops: {type: Boolean, require: true},
    canAddShopGoals: {type: Boolean, require: true},
    canAddTech: {type: Boolean, require: true},
    canAddTechGoals: {type: Boolean, require: true},
    canDeleteTechs: {type: Boolean, require: true},
    canAddUsers: {type: Boolean, require: true}
});

const UserSettings = module.exports = mongoose.model('UserSettings', UserSettingsSchema);


