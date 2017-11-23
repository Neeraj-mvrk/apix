
module.exports = function(app){
var ctrl = require('../controller/lgncontroller');
app.route('/user')
.post(ctrl.addname)
.get(ctrl.records)
 app.route('/UserLogin')
.post(ctrl.LoginData)
app.route('/Session')
.get(ctrl.session)
app.route('/Logout')
.post(ctrl.logout)
/*app.route('/mypage')
.get(ctrl.chat)*/
}