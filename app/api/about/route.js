import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const about = await prisma.about.findFirst();

    revalidatePath("/");

    return NextResponse.json(about, {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
