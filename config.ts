import type { IGraphQLConfig } from "graphql-config";
import * as dotenv from "dotenv";

dotenv.config({
	debug: true,
	path: ".env",
});

const warningContent = `// @ts-nocheck
/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */
`;

const config: IGraphQLConfig = {
	schema: "src/graphql/schema.graphql",
	documents: ["src/graphql/operations/*.graphql"],
	extensions: {
		codegen: {
			debug: true,
			verbose: true,
			ignoreNoDocuments: true,
			overwrite: true,
			generates: {
				"src/graphql/generated/types.ts": {
					config: {
						onlyOperationTypes: false, // Must be false if not it will ignore query type & response
						useTypeImports: true,
					},
					plugins: [
						{
							add: {
								content: warningContent,
							},
						},
						"typescript",
					],
				},
				"src/graphql/operations": {
					preset: "near-operation-file",
					presetConfig: {
						extension: ".generated.tsx",
						baseTypesPath: "../generated/types.ts",
						folder: "../generated",
					},
					plugins: [
						"typescript-operations",
						"typescript-react-query",
						{
							add: {
								content: warningContent,
							},
						},
					],
					config: {
						addDocBlocks: false,
						dedupeFragments: true,
						pureMagicComment: true,
						disableDescriptions: true,
						fetcher: "graphql-request",
						legacyMode: false,
						exposeFetcher: true,
						exposeDocument: true,
						exposeQueryKeys: true,
						exposeMutationKeys: true,
						addInfiniteQuery: true,
						errorType: "any",
						reactQueryVersion: 5,
					},
				},
				"src/graphql/graphql.tsx": {
					plugins: [
						{
							add: {
								content: warningContent,
							},
						},
						"src/graphql/plugins/graphql-exporter.js",
					],
				},
			},
		},
	},
};

export default config;
