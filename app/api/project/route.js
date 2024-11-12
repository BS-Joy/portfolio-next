import { prisma } from "@/prisma";

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany();
    return Response.json(projects);
  } catch (err) {
    throw new Error(err);
  }
};
