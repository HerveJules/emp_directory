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
				res.render('all-emp',{
					findAll,
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