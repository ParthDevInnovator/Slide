"use server";

import { client } from "@/lib/prisma";

export const updateIntegration = async (
  token: String,
  expire: Date,
  id: String
) => {
  return await client.integrations.update({
    where: { id: id as string },
    data: {
      token: token as string,
      expiresAt: expire,
    },
  });
};
export const createUser = async(
  clerkId: String,
  firstname: string,
  lastname: String,
  email: String
) => {
  return await client.user.create({
    data: {
      clerkId: clerkId as string,
      firstname: firstname as string,
      lastname: lastname as string,
      email: email as string,
      subscription:{
        create:{},
      }
    },
    select:{
        firstname:true,
        lastname:true,
    },
  });
};
