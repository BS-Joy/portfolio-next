import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";

export const getPorjects = async () => {
  try {
    const res = await prisma.project.findMany();

    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getAboutData = async () => {
  try {
    const res = await prisma.about.findFirst();

    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getSocialLinks = async () => {
  try {
    const res = await prisma.socials.findMany();

    // revalidatePath("/");

    return res;
  } catch (err) {
    throw new Error(err);
  }
};
