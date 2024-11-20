// lib/db.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "@/entity/User";
import { Category } from "@/entity/Category";
import { Resource } from "@/entity/Resource";
import { Program } from "@/entity/Program";
import { Admin } from "@/entity/Admin";
import { Student } from "@/entity/Student";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "student-resource",
    synchronize: true,
    logging: true,
    entities: [User, Admin, Program, Student, Category, Resource],
    migrations: [],
    subscribers: [],
});

let initialized = false;

async function initialize() {
    if (!initialized) {
        try {
            await AppDataSource.initialize();
            console.log("Database connected successfully");
            initialized = true;
        } catch (error) {
            console.error("Error during Data Source initialization:", error);
            throw error;
        }
    }
    return AppDataSource;
}

export { initialize, AppDataSource };