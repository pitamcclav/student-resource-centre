import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Resource } from "./entity/Resource"
import { Program } from "./entity/Program"
import { Admin } from "./entity/Admin"
import { Student } from "./entity/Student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "student-resource",
    synchronize: true,
    logging: true,
    entities: [User,Admin, Program, Student, Category, Resource],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
});
console.log("DataSource Config:", AppDataSource.options);
 

AppDataSource.initialize().then(() => {
    console.log("Database connected");
}).catch(error => console.log("Failed to connect to the Db", error))
