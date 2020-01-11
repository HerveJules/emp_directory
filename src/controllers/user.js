const db = require('../models');
const sequelize = require('sequelize');

class Users{

	static async display_user(req,res){

		// test inputs

		// console.log(req.body);
		const {emp_dirs}=db;

		try{
			const all = await emp_dirs.FindAll();
			if (all) {

				res.render('all-emp',{
					all
				})
			} else {
				return 'not found'
			}
		}catch(err){
			return err
		}
	}

}
module.exports = Users.display_user;