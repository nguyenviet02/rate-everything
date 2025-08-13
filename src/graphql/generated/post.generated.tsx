// @ts-nocheck
/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import * as Types from "./types";

import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
	useQuery,
	useInfiniteQuery,
	UseQueryOptions,
	UseInfiniteQueryOptions,
	InfiniteData,
} from "@tanstack/react-query";

function fetcher<TData, TVariables extends { [key: string]: any }>(
	client: GraphQLClient,
	query: string,
	variables?: TVariables,
	requestHeaders?: RequestInit["headers"]
) {
	return async (): Promise<TData> =>
		client.request({
			document: query,
			variables,
			requestHeaders,
		});
}
export type GetPostsCollectionQueryVariables = Types.Exact<{
	[key: string]: never;
}>;

export type GetPostsCollectionQuery = {
	__typename?: "Query";
	postsCollection?: {
		__typename?: "postsConnection";
		edges: Array<{
			__typename?: "postsEdge";
			node: {
				__typename?: "posts";
				author_id?: any | null;
				id: any;
				title: string;
			};
		}>;
	} | null;
};

export const GetPostsCollectionDocument = /*#__PURE__*/ `
    query getPostsCollection {
  postsCollection {
    edges {
      node {
        author_id
        id
        title
      }
    }
  }
}
    `;

export const useGetPostsCollectionQuery = <
	TData = GetPostsCollectionQuery,
	TError = any,
>(
	client: GraphQLClient,
	variables?: GetPostsCollectionQueryVariables,
	options?: Omit<
		UseQueryOptions<GetPostsCollectionQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseQueryOptions<
			GetPostsCollectionQuery,
			TError,
			TData
		>["queryKey"];
	},
	headers?: RequestInit["headers"]
) => {
	return useQuery<GetPostsCollectionQuery, TError, TData>({
		queryKey:
			variables === undefined
				? ["getPostsCollection"]
				: ["getPostsCollection", variables],
		queryFn: fetcher<GetPostsCollectionQuery, GetPostsCollectionQueryVariables>(
			client,
			GetPostsCollectionDocument,
			variables,
			headers
		),
		...options,
	});
};

useGetPostsCollectionQuery.document = GetPostsCollectionDocument;

useGetPostsCollectionQuery.getKey = (
	variables?: GetPostsCollectionQueryVariables
) =>
	variables === undefined
		? ["getPostsCollection"]
		: ["getPostsCollection", variables];

export const useInfiniteGetPostsCollectionQuery = <
	TData = InfiniteData<GetPostsCollectionQuery>,
	TError = any,
>(
	client: GraphQLClient,
	variables: GetPostsCollectionQueryVariables,
	options: Omit<
		UseInfiniteQueryOptions<GetPostsCollectionQuery, TError, TData>,
		"queryKey"
	> & {
		queryKey?: UseInfiniteQueryOptions<
			GetPostsCollectionQuery,
			TError,
			TData
		>["queryKey"];
	},
	headers?: RequestInit["headers"]
) => {
	return useInfiniteQuery<GetPostsCollectionQuery, TError, TData>(
		(() => {
			const { queryKey: optionsQueryKey, ...restOptions } = options;
			return {
				queryKey:
					(optionsQueryKey ?? variables === undefined)
						? ["getPostsCollection.infinite"]
						: ["getPostsCollection.infinite", variables],
				queryFn: (metaData) =>
					fetcher<GetPostsCollectionQuery, GetPostsCollectionQueryVariables>(
						client,
						GetPostsCollectionDocument,
						{ ...variables, ...(metaData.pageParam ?? {}) },
						headers
					)(),
				...restOptions,
			};
		})()
	);
};

useInfiniteGetPostsCollectionQuery.getKey = (
	variables?: GetPostsCollectionQueryVariables
) =>
	variables === undefined
		? ["getPostsCollection.infinite"]
		: ["getPostsCollection.infinite", variables];

useGetPostsCollectionQuery.fetcher = (
	client: GraphQLClient,
	variables?: GetPostsCollectionQueryVariables,
	headers?: RequestInit["headers"]
) =>
	fetcher<GetPostsCollectionQuery, GetPostsCollectionQueryVariables>(
		client,
		GetPostsCollectionDocument,
		variables,
		headers
	);
