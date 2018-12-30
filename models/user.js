module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        email : {
            type : DataTypes.STRING(40),
            allowNull: true,
            unique : true,
        },
        nick : {
            type : DataTypes.STRING(20),
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING(40),
            allowNull : true,
        },
    },{
        timestamps : true,
        paranoid : true,
    })
)