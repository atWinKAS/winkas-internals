
exports.getAppData = function(req) {
    
    var viewBag = {
        isAuthenticated:  false,
        userName: ''
    };
    
    if (req.user){
        viewBag.isAuthenticated = true;
        viewBag.userName = req.user.local.email;
    }
    
    return viewBag;
};
