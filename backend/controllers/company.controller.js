import { Company } from "../models/company.model.js";
export const registerCompany = async (req, res) => {
    try{
        const companyName = req.body;
        if(!companyName){
            return res.status(400).json({message: "Please fill all the fields", success: false});
        }
        let company = await Company.findOne({name: companyName});
        if(company){
            return res.status(400).json({message: "Company already exists", success: false});
        }
         company= await Company.create({
            name: companyName,
            userId: req.id

        });

        res.status(201).json({message: "Company created successfully",company, success: true});
        

    }

    catch(error){
        console.log(error);
    }
}
export const getCompany= async (req, res) => {
    try{
        const userId = req.id;
        const companies = await Company.find({ userId});
        if(!companies){
            return res.status(400).json({message: "No companies found", success: false});
        }
    }
    catch(error){
        console.log(error);
    }
}