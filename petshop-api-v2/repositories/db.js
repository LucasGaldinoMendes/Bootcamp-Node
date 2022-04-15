import Sequelize from "sequelize";

const sequelize = new Sequelize(
    //string url de conexao
    "",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;

