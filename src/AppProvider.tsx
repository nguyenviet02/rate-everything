import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import type { FunctionComponent } from "./common/types";
import { queryClient } from "./config";

export function AppProvider({
	children,
}: PropsWithChildren): FunctionComponent {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
