module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        email : {
            type : DataTypes.STRING(40),
            allowNull: true,
            unique : true,
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