"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, UserSchema } from "@/lib/definitions";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    const promise = await new Promise((res, rej) => {
      setTimeout(() => {
        res("Olá mundo");
      }, 3000);
    });
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] mt-24 px-4">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Signup</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to Signup to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                {...register("username", {
                  required: "Este campo é obrigatório",
                })}
                placeholder="myusername"
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>

              <Input
                type="password"
                {...register("password", {
                  required: "Este campo é obrigatório",
                })}
              />
              {errors?.password && (
                <span className={`text-sm text-red-600 font-medium`}>
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full">
              {isSubmitting == true ? (
                <div
                  className={`w-2 h-2 rounded-full border-2  p-4 border-white transition
             animate-spin border-t-transparent`}
                ></div>
              ) : (
                "Singup"
              )}
            </Button>
            <Button variant="outline" className="w-full">
              Signup with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            already have an account?{" "}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block rounded-sm"></div>
    </div>
  );
}
