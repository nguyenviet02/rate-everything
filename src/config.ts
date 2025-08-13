import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

export const queryClient = new QueryClient();
export const graphqlClient = new GraphQLClient(
	import.meta.env["VITE_API_ENDPOINT"] as string,
	{
		headers: {
			apiKey: import.meta.env["VITE_SUPABASE_APIKEY"] as string,
		},
	}
);
