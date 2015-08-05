var mongoose = require( 'mongoose' );
var WeblogSchema = mongoose.Schema;

var weblogSchema = new WeblogSchema({
    Uid: { type: String },
    Url: { type: String },
	RequestType: { type: String },
	RequestBody: { type: String },
	IpAddress: { type: String },
	Action: { type: String },
	Controller: { type: String },
	RequestDate: { type: Date },
	ResponseBody: { type: String },
	ResponseDate: { type: Date },
	UserAuthenticated: { type: Boolean },
	UserName: { type: String },
	Area: { type: String }
});

// Export model...
module.exports = mongoose.model( 'weblogitems', weblogSchema );
