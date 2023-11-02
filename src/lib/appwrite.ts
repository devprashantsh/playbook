import { appWriteConfig } from "@/constants";
import { Client,  Account, Databases, Storage, Avatars } from "appwrite";

export const client = new Client();
client.setProject(appWriteConfig.projectId).setEndpoint(appWriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);