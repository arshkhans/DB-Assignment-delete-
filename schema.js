import { Sequelize, DataTypes } from "sequelize";

const databaseURI = process.env.DATABASE_URL;
export const sequelize = new Sequelize(databaseURI, {
  dialect: "postgres",
});

const product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.TIME,
    },
    updated_at: {
      type: DataTypes.TIME,
    },
  },
);

const product_category = sequelize.define(
  "product_category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.TIME,
    },
    updated_at: {
      type: DataTypes.TIME,
    },
  },
);

const product_inventory = sequelize.define(
  "product_inventory",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.TIME,
    },
    updated_at: {
      type: DataTypes.TIME,
    },
  },
);

const discount = sequelize.define(
  "discount",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.TIME,
    },
    updated_at: {
      type: DataTypes.TIME,
    },
  },
);

/*
Association: 
  Table: product (primary key) -> 1 to 1 -> Table: product_category (foreign key)
  Column: id                                     Column: product_id
*/
product.hasOne(product_category, {
  foreignKey: {
    allowNull: false,
  },
});
product_category.belongsTo(product);

/*
Association: 
  Table: product (primary key) -> 1 to 1 -> Table: product_inventory (foreign key)
  Column: id                                     Column: product_id
*/
product.hasOne(product_inventory);
product_inventory.belongsTo(product);

/*
Association: 
  Table: product (primary key) -> 1 to 1 -> Table: discount (foreign key)
  Column: id                                     Column: product_id
*/
product.hasOne(discount);
discount.belongsTo(product);
