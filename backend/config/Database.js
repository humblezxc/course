import { Sequelize } from "sequelize";

const db = new Sequelize('course_db', 'root', 'password', {
    host: "127.0.0.1",
    dialect: "mysql"
});

export default db;
