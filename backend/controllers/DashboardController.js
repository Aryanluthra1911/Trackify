import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const AddSales = async (req,res)=>{
    try{
        const {email,product,weight,rate,labourcost,total,date ,time} = req.body
        const newsales = await prisma.sales.create({
            data:{
                email:email,
                product:product,
                weight:parseFloat(weight),
                rate:parseFloat(rate),
                labour_cost:parseFloat(labourcost),
                total:parseFloat(total),
                date:date,
                time:time
            }
        })
        res.json(newsales)
    }
    catch (error) {
        console.error("sales insert error:", error);
        res.status(500).json({ error: "failed to add sales" });
    }
}
export const AddGstSales = async (req,res)=>{
    try{
        const {email,element,bill_no,purity,mode_of_payment,date,weight,rate,cost_exc_gst,cgst,sgst,total } = req.body
        const newgstsales = await prisma.gstSales.create({
            data:{
                email:email,
                element:element,
                bill_no:parseInt(bill_no),
                purity:purity,
                mode_of_payment:mode_of_payment,
                date:date,
                weight:parseFloat(weight),
                rate:parseFloat(rate),
                cost_exc_gst:parseFloat(cost_exc_gst),
                cgst:parseFloat(cgst),
                sgst:parseFloat(sgst),
                total:parseFloat(total)
            }
        })
        res.json(newgstsales)
    }
    catch (error) {
        console.error("gstsales insert error:", error);
        res.status(500).json({ error: "failed to add gstsales" });
    }
}