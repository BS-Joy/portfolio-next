"use server";

import { verifyToken } from "@/utils/tokenUtils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const cookieStore = await cookies();

  const userToken = cookieStore.get("user");

  const userDetails = verifyToken(userToken?.value);

  return userDetails;
};

export const removeCookie = async () => {
  (await cookies()).set("user", " ", {
    maxAge: 0,
    path: "/admin",
  });

  (await cookies()).set("user", " ", {
    maxAge: 0,
    path: "/api",
  });

  redirect("/login");
};
