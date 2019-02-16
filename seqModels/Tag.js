// Many-to-many association table for News and Tag

const Sequelize = require('sequelize');

const NewsTag = global.sequelize.define('tag', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
},
{
  freezeTableName: true,
});

module.exports = NewsTag;
