import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCustombills = async (req,res)=>{
    try{
        const custombills = await prisma.customBill.findMany({});
        res.json(custombills)
    }
    catch{
        res.status(500).json({error:'failed to fetch custombills'})
    }
}
export const FindBillsByTotal = async(req,res)=>{
    try{
        const total = parseFloat(req.params.total)
        const custombills = await prisma.customBill.findMany({
            where:{total:total}
        })
        res.json(custombills)
    }
    catch{
        res.status(500).json({error:'failed to fetch custombills'})
    }
}
export const DeleteBills =async(req,res)=>{
    try{
        await prisma.customBill.deleteMany({})
        res.json('data deleted')
    }
    catch{
        res.status(500).json({error:'failed to delete custombills'})
    }
}
export const AddBill = async(req,res)=>{
    try{
        const {email,cost,quantity}=req.body
        
        
        const newbill = await prisma.customBill.create({
            data:{
                email:email,
                cost: parseFloat(cost),
                quantity: parseInt(quantity),
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