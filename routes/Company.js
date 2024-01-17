const express=require('express');
const {getAllCompany,postCompany,updateCompany} = require('../controller/Company');
let router=express.Router();


router.get("/company/findAll",getAllCompany);
router.post("/company/insert",postCompany);
// router.put("/update/Company/:id",updateCompany);

module.exports=router