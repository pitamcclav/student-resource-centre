import { AppDataSource } from "./data-source"



AppDataSource.initialize()
.then(()=>{
    console.log("Database connected");

})
.catch(error => console.log("Failed to connect to the Db",error))
