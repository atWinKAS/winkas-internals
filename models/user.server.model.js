var mongoose = require( 'mongoose' );
var bcrypt   = require('bcrypt-nodejs');
var UserSchema = mongoose.Schema;

var userSchema = new UserSchema({
    local            : {
        email        : String,
        password     : String,
    },
	roles: [String]
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// Export model...
module.exports = mongoose.model( 'user', userSchema );
