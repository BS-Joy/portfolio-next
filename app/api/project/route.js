import { getUser } from "@/app/actions/cookieActions";
import { prisma } from "@/prisma";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

// of: get request
export const GET = async () => {
  try {
    const projects = await prisma.project.findMany();

    return Response.json(projects);
  } catch (err) {
    throw new Error(err);
  }
};

// of: post request
export const POST = async (req) => {
  try {
    const data = await req.json();

    const headerList = await headers();

    const user = headerList.get("User-Auth");

    const cookieStore = await cookies();

    const authToken = req.cookies.get("user");

    console.log(authToken);

    data["publish"] = true;

    const response = await prisma.project.create({ data: data });

    return NextResponse.json(response, {
      status: 201,
      statusText: "Project created",
    });
  } catch (err) {
    throw new Error(err);
  }
};

// of: delete request
export const DELETE = async (req) => {
  try {
    const { id } = await req.json();

    const response = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (err) {
    throw new Error(err);
  }
};
