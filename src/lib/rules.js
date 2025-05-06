import { z } from "zod";

export const RegisterFormSchema= z.object({
    email: z.string().email({message: "Invalid email address"}).trim(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).trim(),
    confirmPassword: z.string().min(6, {message: "Password must be at least 6 characters long"}).trim(),
}).superRefine((val, ctx)=>{
    if(val.password !== val.confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Passwords do not match", 
            path: ["confirmPassword"],
        });
    }
});

export const LoginFormSchema = z.object({
    email: z.string().email({message: "Invalid email address"}).trim(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).trim(),
});