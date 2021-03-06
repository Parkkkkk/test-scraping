module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        email : {
            type : DataTypes.STRING(40),
            allowNull: false,
            unique : true,
        },
        nick : {
            type : DataTypes.STRING(20),
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
    },{
        timestamps : true,
        paranoid : true,
    })
)