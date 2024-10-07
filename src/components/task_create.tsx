"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Task, TaskSchema } from "@/lib/definitions";

export default function TaskCreate() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Task>({
    resolver: zodResolver(TaskSchema),
  });

  const createTask: SubmitHandler<Task> = async (data) => {
    try {
      console.log(data);
      console.log("qualquer coisa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new Task</DialogTitle>
          <DialogDescription>
            Fill in the fields below to create a new task.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(createTask)}
            className={`flex flex-col gap-4`}
          >
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                {...register("username", {
                  required: "Este campo é obrigatório",
                })}
                placeholder="m@example.com"
                type="text"
              />
              {errors?.username && (
                <span className={`text-sm text-red-600 font-medium`}>
                  {errors?.username?.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", { required: "Este campo é obrigatório" })}
                placeholder="m@example.com"
                type="email"
              />
              {errors?.email && (
                <span className={`text-sm text-red-600 font-medium`}>
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task">Task</Label>
              <Input
                {...register("task", { required: "Este campo é obrigatório" })}
                placeholder="005"
                type="text"
              />
              {errors?.task && (
                <span className={`text-sm text-red-600 font-medium`}>
                  {errors?.task?.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task_description">Task Description</Label>
              <Input
                {...register("task_description", {
                  required: "Este campo é obrigatório",
                })}
                placeholder="make this"
                type="text"
              />
              {errors?.task_description && (
                <span className={`text-sm text-red-600 font-medium`}>
                  {errors?.task_description?.message}
                </span>
              )}
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
