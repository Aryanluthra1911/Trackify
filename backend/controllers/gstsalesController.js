import { PrismaClient } from "@prisma/client";
import { getEmailFromReq } from "../utils/GetEmailFromReq.js";
const prisma = new PrismaClient()

export const getAllGstSales = async(req,res)=>{
    try {
        const userEmail = await getEmailFromReq(req)
        const gstsales = await prisma.gstSales.findMany({where:{email:userEmail}})
        res.json(gstsales)
    }
    catch (err) {
        console.error("❌ getAllGstSales error:", err);  // ADD THIS
        res.status(500).json({ error: "failed to fetch gstsales" });
    }
}
export const getGstSalesForBillNo =  async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        const billno = req.params.billno;
        console.log(billno);
        const gstsales = await prisma.gstSales.findMany({
            where:{bill_no:billno,email:userEmail},
        })
        res.json(gstsales);
    }
    catch{
        res.status(500).json({ error: 'Failed to fetch gst sales by bill no' });
    }
}

export const DeleteAllGstSales = async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        await prisma.gstSales.deleteMany({where:{email:userEmail}})
        res.json("data deleted")
    }
    catch{
        res.json('data unable to delete')

    }
}
export const DeleteGstSaleByBillNo =async(req,res)=>{
    try{
        const userEmail = await getEmailFromReq(req)
        const bill_no = parseInt(req.params.bill_no)
        console.log("Delete route hit:", req.params.bill_no)
        await prisma.gstSales.delete({
            where:{bill_no:bill_no,email:userEmail},
        })
        res.json('data deleted')
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Data unable to delete" });
    }
}