const DbConnection = require('../dbConnection'),
      Sequelize = require('sequelize');

const Grade = require('./grades'),
      grade = new Grade();

class User{
  constructor(){
    var sequelize = DbConnection.getConnection();
    this.UserSchema = sequelize.define('users', {
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true // Model tableName will be the same as the model name
    });
    //Grade.getGradeschema.belongsTo(this.UserSchema);
    grade.getGradeSchema().belongsToMany(this.UserSchema,{through: 'user_grades',foreignKey: 'userId', otherKey: 'ClientId'
  })
  this.UserSchema.belongsToMany(grade.getGradeSchema(),{through: 'user_grades',foreignKey: 'userId'});

    sequelize.sync({force:false});

    // this.UserSchema.getGrades().then((users)=>{
    //   console.log(users)
    // });
       
  }

  getUserSchema(){
    return this.UserSchema;
  }

  create(a,b){
    let UserSchema = this.UserSchema;
    this.UserSchema.sync({force: false}).then(function () {
      return UserSchema.create({
        firstName: a,
        lastName: b
      });
    });
  }
}

module.exports = User;
