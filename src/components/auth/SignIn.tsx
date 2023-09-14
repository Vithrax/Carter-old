"use client";

import { Card, CardContent } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Separator } from "../ui/Separator";
import { Github } from "lucide-react";
import { Icons } from "../Icons";
import { signOut } from "next-auth/react";

const SignIn = () => {
  return (
    <Card className="mt-8 min-w-[400px]">
      <CardContent className="flex flex-col gap-3 pt-6">
        {/* TODO: email sign in/up */}
        <Input placeholder="Email adress"></Input>
        <Button className="w-full" onClick={() => signOut()}>
          Sign in with email
        </Button>
        <div className="grid grid-cols-[1fr,auto,1fr] items-center">
          <Separator />
          <span className="my-3 px-2 text-muted-foreground">
            or continue with
          </span>
          <Separator />
        </div>
        <div className="flex w-full flex-col gap-3">
          <Button
            onClick={() => {}}
            className="flex gap-1 bg-zinc-950 text-white hover:bg-zinc-800"
          >
            <Github className="h-5 w-5" /> Github
          </Button>
          <Button
            onClick={() => {}}
            className="flex gap-1 border bg-white text-black hover:bg-zinc-50"
          >
            <Icons.google className="h-5 w-5" /> Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignIn;
