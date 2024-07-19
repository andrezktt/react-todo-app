module.exports = function(req, res, next) {
   res.header('Access-Control-Allow-origin', '*')
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE')
   res.header('Access-Control-Allow-Headers', 'Origins, X-Requested-With, Content-Type, Accept')
   next()
}