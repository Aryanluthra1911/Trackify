import { PrismaClient } from "@prisma/client";
import { getEmailFromReq } from "../utils/GetEmailFromReq.js";
const prisma = new PrismaClient();



export const getAllCustombills = async (req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        const custombills = await prisma.customBill.findMany({where:{email:userEmail}});
        res.json(custombills)
    }
    catch{
        res.status(500).json({error:'failed to fetch custombills'})
    }
}
export const FindBillsByTotal = async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        const total = parseFloat(req.params.total)
        const custombills = await prisma.customBill.findMany({
            where:{total:total,email:userEmail}
        })
        res.json(custombills)
    }
    catch{
        res.status(500).json({error:'failed to fetch custombills'})
    }
}
export const DeleteBills =async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        await prisma.customBill.deleteMany({where:{email:userEmail}})
        res.json('data deleted')
    }
    catch{
        res.status(500).json({error:'failed to delete custombills'})
    }
}
export const AddBill = async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        const {cost,quantity,mop}=req.body
        const newbill = await prisma.customBill.create({
            data:{
                email:userEmail,
                cost: parseFloat(cost),
                quantity: parseInt(quantity),
                mop:mop,
                total: parseFloat(cost) * parseInt(quantity),
            }
        })
        res.status(201).json(newbill);
    }
    catch (error) {
        console.error("CustomBill insert error:", error);
        res.status(500).json({ error: "failed to add custombill" });
    }
}