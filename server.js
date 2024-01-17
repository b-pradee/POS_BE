const express=require('express');
const app=express();

const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();



const companyRoute=require("./routes/Company");
app.use("/company/findAll",companyRoute);
app.use("/company/insert",companyRoute);

app.use(express.json());

app.listen(3001,() => console.log(`server running on port ${