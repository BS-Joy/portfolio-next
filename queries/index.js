import { prisma } from "@/prisma";

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

    return res;
  } catch (err) {
    throw new Error(err);
  }
};
