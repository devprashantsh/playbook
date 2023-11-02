import { account } from "@/lib/appwrite";
import { INewUser } from "@/types";
import { ID } from "appwrite";

export const signUpApi = async (user: INewUser) => {
  try {
    const res = await account.create(
      ID.unique(),
      user.email,
      user.name,
      user.password
    );

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
