module.exports = ( sequelize, DataTypes ) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
        name: DataTypes.STRING,
        company: DataTypes.STRING,
        script: DataTypes.STRING,
        quantity: DataTypes.STRING,
        schedule: DataTypes.STRING

    })
    return Blog
}