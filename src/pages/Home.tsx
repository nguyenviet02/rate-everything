import type { FunctionComponent } from "../common/types";
import { useGetPostsCollectionQuery } from "@graphql/generated/post.generated";
import { graphqlClient } from "@graphqlClient";

export const Home = (): FunctionComponent => {
	const { data } = useGetPostsCollectionQuery(graphqlClient);
	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">
				{data?.postsCollection?.edges.map((post) => (
					<div key={post.node.id}>
						<p>{post.node.title}</p>
					</div>
				))}
			</p>
		</div>
	);
};
