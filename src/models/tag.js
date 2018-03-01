module.exports = (sequelize, DataTypes) => {
  let TagDefinition = sequelize.define(
    'Tag',
    {
      name: {
        type: DataTypes.STRING,
        field: 'name'
      },
      createdAt: { type: DataTypes.DATE, field: 'created_at' },
      updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
    },
    {
      underscored: true,
      timestamps: true,
      tableName: 'tags'
    }
  );

  class Tag extends TagDefinition {
    static associate(models) {
      Tag.belongsToMany(models.Item, {
        through: 'item_tags',
        foreignKey: 'tag_id',
        as: 'items'
      });
    }
  }

  return Tag;
};