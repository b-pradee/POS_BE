

const getAllCompany=async (req,res) => {
const company=await prisma.Company.findMany();
return res.json(company);
    // const companyList=getAllCompanyS();
    // return res(companyList);
};


const postCompany=async (req,res) => {
    const newCompany=await prisma.Company.create({data:req.body});
    return res.json(newCompany);

    // const companyData=req.body;
    // const company=PostService(companyData);
    // return res(company);
};

