"use server";
import { getCollection } from "@/lib/db";
import { RegisterFormSchema } from "@/lib/rules";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";
//import { redirect } from "next/navigation";

export async function register(state, formData){


    //await new Promise((resolve) => setTimeout(resolve, 3000));

    const validation = RegisterFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if (!validation.success) {
      return {
        errors: validation.error.flatten().fieldErrors,
      }
    }

    const { email, password } = validation.data;

    const userCollection = await getCollection('users')

    if (!userCollection) {
        return {
            errors: {
                email: "Database connection failed",
            },
        };
    }

    const existingUser = await userCollection.findOne({
        email,
    });

    if (existingUser) {
        return {
            errors: {
                email: "Email already exists",
            },
        };
    }

    //Hash the password before storing it in the database
    const hashPassword = bcrypt.hashSync(password, 10);


    const result = await userCollection.insertOne({
        email,
        hashPassword,
    });

    
    // Create Session
    await createSession(result.insertedId.toString());

   // redirect("/dashboard");
}