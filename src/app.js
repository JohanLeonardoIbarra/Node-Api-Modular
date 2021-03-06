import express from "express";
import "./database";
import "module-alias/register";
//Import routes
import defaultRoute from "@routes/default";
import usersRoutes from "@routes/users";

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use("/api", defaultRoute);
app.use("/api/users", usersRoutes);

//Server Running
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});