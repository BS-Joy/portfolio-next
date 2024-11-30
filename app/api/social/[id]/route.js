import { prisma } from "@/prisma";
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

    const res = await prisma.socials.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json("Link Updated.", {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
