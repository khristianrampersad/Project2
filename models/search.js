// Import Sequelize library for `Sequelize.literal`.
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define('Search', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        search_results: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
        search_source: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        search_author: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
        search_title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        search_description: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
        search_url: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        search_urlToImage: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
        search_content: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
      search_publishedAt: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      search_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Return the model we defined.
    return Search;
};