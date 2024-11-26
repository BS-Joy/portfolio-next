import { generateToken } from "@/utils/tokenUtils";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const userData = await req.json();
    const newToken = generateToken(userData);
    return NextResponse.json(newToken);
  } catch (err) {
    throw new Error(err);
  }
};
