module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        catid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'product'
    });

    Product.associate = function (models) {
        Product.belongsTo(models.category, { foreignKey: 'catid', as: 'categoryType' });
    }

    return Product;
}