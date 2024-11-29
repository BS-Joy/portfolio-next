import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const data = await req.json();

    const { id } = await params;

    const about = await prisma.about.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json("updated", {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
