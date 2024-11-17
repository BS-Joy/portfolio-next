import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany();
    // console.log(projects);
    return Response.json(projects);
  } catch (err) {
    throw new Error(err);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const refinedTags = data?.tags?.map((tag) => tag.value);

    data["publish"] = true;
    data.tags = refinedTags;

    const response = await prisma.project.create({ data: data });

    return NextResponse.json(response, {
      status: 201,
      statusText: "Project created",
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const DELETE = async (req) => {
  try {
    const { id } = req.params;
    console.log(id);
  } catch (err) {
    throw new Error(err);
  }
};
