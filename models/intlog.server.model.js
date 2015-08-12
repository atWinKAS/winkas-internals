var mongoose = require( 'mongoose' );
var IntlogSchema = mongoose.Schema;

var intlogSchema = new IntlogSchema({
    InvocationId: { type: String },
    GlobalInvocationId: { type: String },
	Class: { type: String },
	Method: { type: String },
	TimeElapsed: { type: String },
	Token: { type: String }
});

// Export model...
module.exports = mongoose.model( 'interceptionlogitems', intlogSchema );
