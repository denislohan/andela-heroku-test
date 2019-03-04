
const Sequelize = require('sequelize');

        let sequelize = new Sequelize(process.env.DATABASE_URL, 'postgres', '', {
            host: 'lpisfweczetfaz:f8358480c1f3ba4f2def6351e774123725d59fade028875c4e743a6323e47b05',
            dialect: 'postgres',
            operatorsAliases: false,
        
            pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            },
        });

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        exports.getConnection = function(){
            return sequelize;
        }
