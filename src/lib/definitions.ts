import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(3, "Username must be at 3 characters long"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters long "),
});

export type User = z.infer<typeof UserSchema>;

export const TaskSchema = z.object({
  username: z.string(),
  task: z.number(),
  status: z.string(),
  email: z.string().email("Invalid email"),
  task_description: z.string()
});

export type Task = z.infer<typeof TaskSchema>;
