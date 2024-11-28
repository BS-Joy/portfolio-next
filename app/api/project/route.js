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

    const authToken = req.cookies.get("api-auth")?.value;

    if (authToken === undefined) {
      return NextResponse.json("Not authorized to access.", {
        status: 401,
      });
    }

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

    const authToken = req.cookies.get("api-auth")?.value;

    console.log({ authToken });

    if (authToken === undefined) {
      return NextResponse.json("Not authorized to access.", {
        status: 401,
      });
    }

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
