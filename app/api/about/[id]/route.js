import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const data = await req.json();

    const { id } = await params;

    const authToken = req.cookies.get("api-auth")?.value;

    if (authToken === undefined) {
      return NextResponse.json("Not authorized to access.", {
        status: 401,
      });
    }

    const about = await prisma.about.update({
      where: { id: id },
      data: data,
    });

    revalidatePath("/admin");

    return NextResponse.json("updated", {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
