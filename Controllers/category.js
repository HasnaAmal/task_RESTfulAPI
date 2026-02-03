import { prisma } from "../lib/prisma.js";

// Add Category
export const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await prisma.category.create({ 
    data: { 
        name : name
    } });
  return res.status(201).json({ message: "Category created", category });
};

// Get all Categories
export const allCategories = async (req, res) => {
  const categories = await prisma.category.findMany({ 
    include: { 
        tasks: true 
    } 
});
  return res.status(200).json({ categories });
};
