const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Diet = sequelize.define('diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });

    Diet.associate = (models) => {
        Diet.belongsToMany(models.Recipe, {
        through: models.RecipeDiet,
        foreignKey: 'dietId',
        otherKey: 'recipeId',
        });
    };

    return Diet;
};