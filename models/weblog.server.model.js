var mongoose = require( 'mongoose' );
var WeblogSchema = mongoose.Schema;

var weblogSchema = new WeblogSchema({
    Uid: {
        type: String },
    Url: {
        type: String }
});

// Export model...
module.exports = mongoose.model( 'weblogitems', weblogSchema );
