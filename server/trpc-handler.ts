import { appRouter } from "../trpc/server";
import type { Get, UniversalHandler } from "@universal-middleware/core";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const trpcHandler = ((endpoint) => (request, context, runtime) => {
  return fetchRequestHandler({
    endpoint,
    req: request,
    router: appRouter,
    createContext({ req, resHeaders }) {
      return {
        ...context,
        ...runtime,
        req,
        resHeaders,
      };
    },
  });
}) satisfies Get<[endpoint: string], UniversalHandler>;
