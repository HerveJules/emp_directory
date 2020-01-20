import db from '../models';
import sequelize from 'sequelize';

class Users{

	static async display_user(req,res){
		const {emp_dir}=db;

		try{
			const findAll = await emp_dir.findAll({
       			attributes:['id','FName','LName','Email','Phone','skype','Position','Department','DoB']
      		});
			if (findAll) {
				// console.log(findAll[0].FName);
				res.render('contact',{
					findAll,
				})
			} else {
				console.log('not found');
			}
		}catch(err){
			console.log(err);
		}
	}

	// user details

	static async single(req,res){
		const {emp_dir}=db;
		// console.log(req.params);
		try{
			const findOne = await emp_dir.findOne({where:req.params});
			if (findOne) {

				res.render('profile',{
					profile:findOne.dataValues
				})
			} else {
				console.log('not found');
			}
		}catch(err){
			console.log(err);
		}
	}

}
export default Users