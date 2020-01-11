'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp_dir = sequelize.define('emp_dir', {
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.NUMBER,
    skype: DataTypes.STRING,
    Position: DataTypes.STRING,
    Department: DataTypes.STRING,
    DoB: DataTypes.DATE
  }, {});
  emp_dir.associate = function(models) {
    // associations can be defined here
  };
  return emp_dir;
};