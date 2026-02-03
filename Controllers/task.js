import {prisma} from "../lib/prisma.js";

export const addTask = async (req , res) => {
    const {title, description, completed, priority} = req.body;
    const task = await prisma.task.create({
        data: {
            title : title,
            description: description,
            completed: completed,
            priority: priority
        }
    });
    return res.status(200).json({ message: "Task created successfully" , task: task });
}
export const allTasks = async (req , res) => {
    const { completed } = req.query;
    const tasks = await prisma.task.findMany({
        where: {
            deletedAt: null,
      // filter by completion status
        ...(completed !== undefined && {
            completed: completed === "true"
        })
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return res.status(200).json({ tasks });
};
export const taskById = async (req , res) => {
    const { id } = req.params;
    const task = await prisma.task.findFirst({
        where : {
            id: id,
            deletedAt: null
        }
    })
    if(!task) {
        return res.status(400).json({ message: "Task not found" });
    }
    return res.status(200).json({ task: task });
}
export const updateTask = async (req , res) => {
    const { id } = req.params;
    const { title, description, completed, priority } = req.body;
    const task = await prisma.task.findFirst({
    where: {
      id: id,
      deletedAt: null
    }
  });
  if (!task) {
    return res.status(400).json({ message: "Task not found" });
  }
  await prisma.task.update({
    where: {
      id: id
    },
    data: {
      title: title,
      description: description,
      completed: completed,
      priority: priority
    }
  });
  return res.status(200).json({ message: "Task updated successfully" });
};
export const deleteTask = async (req , res) => {
    const { id } = req.params;
    const task = await prisma.task.findFirst({
        where: {
            id: id,
            deletedAt: null
        }
    });
    if(!task) {
        return res.status(400).json({ message: "Task not found" });
    }
    await prisma.task.update({
        where: {
            id: id
        },
        data: {
            deletedAt: new Date()
        }    });
    return res.status(200).json({ message: "Task deleted successfully" });
}