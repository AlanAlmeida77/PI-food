const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Diet, {
      through: models.RecipeDiet,
      foreignKey: 'recipeId',
      otherKey: 'dietId',
    });
  };

  return Recipe;
};