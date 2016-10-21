"use strict";

module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define('item', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        text: {
            type: DataTypes.STRING
        },
        complete: {
            type: DataTypes.BOOLEAN
        }
    });

    return Item;
}
