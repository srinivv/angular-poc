var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: String,
	userid: String,	
	name: String
});

var User = mongoose.model('users', userSchema);


/*var UserDummy = new User({
		email: 'srinivv@gmail.com',
		userid: 'srini',
		name: 'srini velusamy'	
	});

UserDummy.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
*/

/**
 * User model for most of the user functions.
 */
var UserModel = {		
		/** 
		 * Get User details.
		 */
		getUserDetails: function(userid,callback)
	    {
			User.find({'userid':userid},
				function(err, result) {				
				  if (!err) {					  			
					callback(result);
				} else {
					console.log("Error in GetAllFeaturedPost--> " , err);
					callback(result);
				}
			});
	    },
}


module.exports = UserModel;