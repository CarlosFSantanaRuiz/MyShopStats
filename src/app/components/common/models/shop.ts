export interface Shop {
    _id: String;
    shopName: String,
    shopAddress: String;
    shopCity: String;    
    shopState: String;
    shopZip: String;
    shopRate: String;
    shopTax: String;
    hours_of_op: [{
        monday: Number;
        tuesday: Number;
        wednesday: Number;
        thursday: Number;
        friday: Number;
        saturday: Number;
        sunday: Number;
    }]

};
