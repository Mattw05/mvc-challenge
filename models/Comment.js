const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {


}
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            alloeNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        blog_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'blog',
                key: 'id',
            }
        }
    },{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;