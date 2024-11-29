import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const about = await prisma.about.findFirst();

    return NextResponse.json(about, {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
