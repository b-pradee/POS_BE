const getAllCompanyS = ()=>{
    return Company.findAll().exec();
}

const postCompanyS = (companyData)=>{
    return Company.create().exec();
}