import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

export const getAllOrders = async(req,res)=>{
    try{
        const orders = await prisma.orders.findMany();
        res.json(orders)
    }
    catch{
        res.status(500).json({Error:'failed to fetch orders'})
    }
}
export const GetOrderByPhoneNo = async(req,res)=>{
    try{
        const phoneno = req.params.phoneno
        const orders = await prisma.orders.findMany({
            where:{ph_no:phoneno}
        })
        res.json(orders)
    }
    catch{
        res.status(500).json({Error:'failed to fetch orders'})
    }
}
export const DeleteOrders = async(req,res)=>{
    try{
        const id = parseInt(req.params.id)
        await prisma.orders.deleteMany({
            where:{id:id}
        })
        res.json('data deleted')
    }
    catch{
        res.status(500).json({Error:'failed to delete orders'})
    }
}
export const AddOrders = async (req,res)=>{
    try{
        const {email,date,ph_no,address,product,purity,weight,rate,deposit,total}=req.body;
        const neworder = await prisma.orders.create({
            data:{
                email:email,
                date:date,
                ph_no:ph_no,
                address:address,
                product:product,
                purity:purity,
                weight:parseFloat(weight),
                rate:parseFloat(rate),
                deposit:parseFloat(deposit),
                total:parseFloat(total)
            }
        })
        res.json(neworder)
    }
    catch(error){
        console.error("Add order error:", error);
        res.status(500).json({ Error: 'failed to add order' });
    }
}