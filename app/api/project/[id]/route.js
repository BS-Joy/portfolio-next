import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const updatedData = await req.json();
    const { id } = await params;

    const response = await prisma.project.update({
      where: { id: id },
      data: updatedData,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    throw new Error(err);
  }
};
