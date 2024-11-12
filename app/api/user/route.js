import { prismaClient } from "@/prisma";

export const GET = async () => {
  try {
    const projects = await prismaClient.project.findMany();
    console.log(projects);
    return Response.json(projects);
  } catch (err) {
    throw new Error(err);
  }
};
