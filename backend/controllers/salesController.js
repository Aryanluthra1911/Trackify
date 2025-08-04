import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllSales = async (req, res) => {
    try {
        const sales = await prisma.sales.findMany();
        res.json(sales);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Data unable to delete" });
    }
};

export const getSalesForWeight =  async(req,res)=>{
    try{
        const weight = parseFloat(req.params.weight);
        const sales = await prisma.sales.findMany({
            where:{weight:weight},
        })
        res.json(sales);
    }
    catch{
        res.status(500).json({ error: 'Failed to fetch sales by weight' });
    }
}

export const DeleteAllSales = async(req,res)=>{
    try{
        await prisma.sales.deleteMany({})
        res.json("data deleted")
    }
    catch{
        res.json('data unable to delete')
    }
}

export const DeleteSaleById =async(req,res)=>{
    try{
        const id = parseInt(req.params.id)
        console.log("Delete route hit:", req.params.id)
        await prisma.sales.delete({
            where:{id:id},
        })
        res.json('data deleted')
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Data unable to delete" });
    }
}