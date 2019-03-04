const DbConnection = require('../dbConnection'),
    Sequelize = require('sequelize');

let User = require('./user');
    //user = new User();

class Grade{

    constructor(){
        var sequelize = DbConnection.getConnection();
        this.GradeSchema = sequelize.define('grade', {
            grade: {
              type: Sequelize.STRING,
            },
            userId: {
              type: Sequelize.STRING
            }
          }, {
            freezeTableName: true // Model tableName will be the same as the model name
          });

         // console.log(user)
        //   console.log(typeof this.GradeSchema)
        //   console.log(typeof user.getUserSchema)

    
        //this.GradeSchema.hasMany(user.getUserSchema())      
    }
    
      getGradeSchema(){
        return this.GradeSchema;
      }

create(userId,grade){
    let GradeSchema = this.GradeSchema;

    GradeSchema.sync({force: false}).then(function () {
    return GradeSchema.create({
        grade: grade,
        userId: userId
    });
    });
  }
}

module.exports = Grade;
   
