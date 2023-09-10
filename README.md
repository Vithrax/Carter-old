This repo will be used for my future Next projects

## Stack

1. Typescript
2. Next.js (App router)
3. Auth.js (Next Auth)
4. Prisma
5. TailwindCSS
6. tRPC
7. shadcn/ui

## Description

Starter project with full typesafety. Initially configured with the help of kimirase CLI.

#### Next-auth

Next-auth is preconfigured, with GitHub, Google and Discord Provider.
Session content is also slighly modified (as an example) to contain also user id and username - a custom field added to next-auth models.

If you want to modify that you need to edit two files:
/src/types/next-auth.d.ts - for type safety
/src/app/api/auth/[...nextauth]/route.ts - for the actual content

#### Shadcn

I also included Shadcn/ui Toast + Button (with slight change to also include isLoading state, it is taken from shadcn site, but in default component it is not supported)

#### tRCP

I added one dummy router for trpc - users, with simple public procedures to fetch all users/user by id
can be found in /src/lib/server/users (\_app.ts combines all routes)

#### T3 env

To strenghten the typesafety i also included T3 env depending on the env variables you will use you also need to modify file: /src/env.mjs. Otherwise app wont launch, even in dev mode
