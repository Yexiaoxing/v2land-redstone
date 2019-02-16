// Many-to-many association table for News and Tag

const Sequelize = require('sequelize');

const NewsTag = global.sequelize.define('eventTag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
},
{
  freezeTableName: true,
});

module.exports = NewsTag;
