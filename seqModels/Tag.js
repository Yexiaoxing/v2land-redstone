// Many-to-many association table for News and Tag

const Sequelize = require('sequelize');

const NewsTag = global.sequelize.define('tag', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
},
{
  freezeTableName: true,
});

module.exports = NewsTag;
