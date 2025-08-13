// @ts-nocheck
/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A high precision floating point value represented as a string */
	BigFloat: { input: any; output: any };
	/** An arbitrary size integer represented as a string */
	BigInt: { input: any; output: any };
	/** An opaque string using for tracking a position in results during pagination */
	Cursor: { input: any; output: any };
	/** A date without time information */
	Date: { input: any; output: any };
	/** A date and time */
	Datetime: { input: any; output: any };
	/** A Javascript Object Notation value serialized as a string */
	JSON: { input: any; output: any };
	/** Any type not handled by the type system */
	Opaque: { input: any; output: any };
	/** A time without date information */
	Time: { input: any; output: any };
	/** A universally unique identifier */
	UUID: { input: any; output: any };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
	eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
	gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
	gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
	in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
	lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
	neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
	containedBy?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
	eq?: InputMaybe<Scalars["BigInt"]["input"]>;
	gt?: InputMaybe<Scalars["BigInt"]["input"]>;
	gte?: InputMaybe<Scalars["BigInt"]["input"]>;
	in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["BigInt"]["input"]>;
	lte?: InputMaybe<Scalars["BigInt"]["input"]>;
	neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
	containedBy?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
	eq?: InputMaybe<Scalars["Boolean"]["input"]>;
	is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
	eq?: InputMaybe<Scalars["Date"]["input"]>;
	gt?: InputMaybe<Scalars["Date"]["input"]>;
	gte?: InputMaybe<Scalars["Date"]["input"]>;
	in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Date"]["input"]>;
	lte?: InputMaybe<Scalars["Date"]["input"]>;
	neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Date"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Date"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Date"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Date"]["input"]>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
	eq?: InputMaybe<Scalars["Datetime"]["input"]>;
	gt?: InputMaybe<Scalars["Datetime"]["input"]>;
	gte?: InputMaybe<Scalars["Datetime"]["input"]>;
	in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Datetime"]["input"]>;
	lte?: InputMaybe<Scalars["Datetime"]["input"]>;
	neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

export enum FilterIs {
	NotNull = "NOT_NULL",
	Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
	eq?: InputMaybe<Scalars["Float"]["input"]>;
	gt?: InputMaybe<Scalars["Float"]["input"]>;
	gte?: InputMaybe<Scalars["Float"]["input"]>;
	in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Float"]["input"]>;
	lte?: InputMaybe<Scalars["Float"]["input"]>;
	neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
	eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
	eq?: InputMaybe<Scalars["Int"]["input"]>;
	gt?: InputMaybe<Scalars["Int"]["input"]>;
	gte?: InputMaybe<Scalars["Int"]["input"]>;
	in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Int"]["input"]>;
	lte?: InputMaybe<Scalars["Int"]["input"]>;
	neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
	__typename?: "Mutation";
	/** Deletes zero or more records from the `categories` collection */
	deleteFromcategoriesCollection: CategoriesDeleteResponse;
	/** Deletes zero or more records from the `comment_attachments` collection */
	deleteFromcomment_attachmentsCollection: Comment_AttachmentsDeleteResponse;
	/** Deletes zero or more records from the `comments` collection */
	deleteFromcommentsCollection: CommentsDeleteResponse;
	/** Deletes zero or more records from the `notifications` collection */
	deleteFromnotificationsCollection: NotificationsDeleteResponse;
	/** Deletes zero or more records from the `post_attachments` collection */
	deleteFrompost_attachmentsCollection: Post_AttachmentsDeleteResponse;
	/** Deletes zero or more records from the `posts` collection */
	deleteFrompostsCollection: PostsDeleteResponse;
	/** Deletes zero or more records from the `ratings` collection */
	deleteFromratingsCollection: RatingsDeleteResponse;
	/** Deletes zero or more records from the `reports` collection */
	deleteFromreportsCollection: ReportsDeleteResponse;
	/** Deletes zero or more records from the `users` collection */
	deleteFromusersCollection: UsersDeleteResponse;
	/** Adds one or more `categories` records to the collection */
	insertIntocategoriesCollection?: Maybe<CategoriesInsertResponse>;
	/** Adds one or more `comment_attachments` records to the collection */
	insertIntocomment_attachmentsCollection?: Maybe<Comment_AttachmentsInsertResponse>;
	/** Adds one or more `comments` records to the collection */
	insertIntocommentsCollection?: Maybe<CommentsInsertResponse>;
	/** Adds one or more `notifications` records to the collection */
	insertIntonotificationsCollection?: Maybe<NotificationsInsertResponse>;
	/** Adds one or more `post_attachments` records to the collection */
	insertIntopost_attachmentsCollection?: Maybe<Post_AttachmentsInsertResponse>;
	/** Adds one or more `posts` records to the collection */
	insertIntopostsCollection?: Maybe<PostsInsertResponse>;
	/** Adds one or more `ratings` records to the collection */
	insertIntoratingsCollection?: Maybe<RatingsInsertResponse>;
	/** Adds one or more `reports` records to the collection */
	insertIntoreportsCollection?: Maybe<ReportsInsertResponse>;
	/** Adds one or more `users` records to the collection */
	insertIntousersCollection?: Maybe<UsersInsertResponse>;
	/** Updates zero or more records in the `categories` collection */
	updatecategoriesCollection: CategoriesUpdateResponse;
	/** Updates zero or more records in the `comment_attachments` collection */
	updatecomment_attachmentsCollection: Comment_AttachmentsUpdateResponse;
	/** Updates zero or more records in the `comments` collection */
	updatecommentsCollection: CommentsUpdateResponse;
	/** Updates zero or more records in the `notifications` collection */
	updatenotificationsCollection: NotificationsUpdateResponse;
	/** Updates zero or more records in the `post_attachments` collection */
	updatepost_attachmentsCollection: Post_AttachmentsUpdateResponse;
	/** Updates zero or more records in the `posts` collection */
	updatepostsCollection: PostsUpdateResponse;
	/** Updates zero or more records in the `ratings` collection */
	updateratingsCollection: RatingsUpdateResponse;
	/** Updates zero or more records in the `reports` collection */
	updatereportsCollection: ReportsUpdateResponse;
	/** Updates zero or more records in the `users` collection */
	updateusersCollection: UsersUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcategoriesCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<CategoriesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcomment_AttachmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<Comment_AttachmentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcommentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<CommentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromnotificationsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<NotificationsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrompost_AttachmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<Post_AttachmentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrompostsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<PostsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromratingsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<RatingsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromreportsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<ReportsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<UsersFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocategoriesCollectionArgs = {
	objects: Array<CategoriesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocomment_AttachmentsCollectionArgs = {
	objects: Array<Comment_AttachmentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocommentsCollectionArgs = {
	objects: Array<CommentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntonotificationsCollectionArgs = {
	objects: Array<NotificationsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntopost_AttachmentsCollectionArgs = {
	objects: Array<Post_AttachmentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntopostsCollectionArgs = {
	objects: Array<PostsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoratingsCollectionArgs = {
	objects: Array<RatingsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoreportsCollectionArgs = {
	objects: Array<ReportsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
	objects: Array<UsersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdatecategoriesCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<CategoriesFilter>;
	set: CategoriesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecomment_AttachmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<Comment_AttachmentsFilter>;
	set: Comment_AttachmentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecommentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<CommentsFilter>;
	set: CommentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatenotificationsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<NotificationsFilter>;
	set: NotificationsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatepost_AttachmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<Post_AttachmentsFilter>;
	set: Post_AttachmentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatepostsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<PostsFilter>;
	set: PostsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateratingsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<RatingsFilter>;
	set: RatingsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatereportsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<ReportsFilter>;
	set: ReportsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<UsersFilter>;
	set: UsersUpdateInput;
};

export type Node = {
	/** Retrieves a record by `ID` */
	nodeId: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
	eq?: InputMaybe<Scalars["Opaque"]["input"]>;
	is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
	/** Ascending order, nulls first */
	AscNullsFirst = "AscNullsFirst",
	/** Ascending order, nulls last */
	AscNullsLast = "AscNullsLast",
	/** Descending order, nulls first */
	DescNullsFirst = "DescNullsFirst",
	/** Descending order, nulls last */
	DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
	__typename?: "PageInfo";
	endCursor?: Maybe<Scalars["String"]["output"]>;
	hasNextPage: Scalars["Boolean"]["output"];
	hasPreviousPage: Scalars["Boolean"]["output"];
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
	__typename?: "Query";
	/** A pagable collection of type `categories` */
	categoriesCollection?: Maybe<CategoriesConnection>;
	/** A pagable collection of type `comment_attachments` */
	comment_attachmentsCollection?: Maybe<Comment_AttachmentsConnection>;
	/** A pagable collection of type `comments` */
	commentsCollection?: Maybe<CommentsConnection>;
	is_admin?: Maybe<Scalars["Boolean"]["output"]>;
	is_contributor?: Maybe<Scalars["Boolean"]["output"]>;
	/** Retrieve a record by its `ID` */
	node?: Maybe<Node>;
	/** A pagable collection of type `notifications` */
	notificationsCollection?: Maybe<NotificationsConnection>;
	/** A pagable collection of type `post_attachments` */
	post_attachmentsCollection?: Maybe<Post_AttachmentsConnection>;
	/** A pagable collection of type `posts` */
	postsCollection?: Maybe<PostsConnection>;
	/** A pagable collection of type `ratings` */
	ratingsCollection?: Maybe<RatingsConnection>;
	/** A pagable collection of type `reports` */
	reportsCollection?: Maybe<ReportsConnection>;
	/** A pagable collection of type `users` */
	usersCollection?: Maybe<UsersConnection>;
};

/** The root type for querying data */
export type QueryCategoriesCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CategoriesFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root type for querying data */
export type QueryComment_AttachmentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<Comment_AttachmentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<Comment_AttachmentsOrderBy>>;
};

/** The root type for querying data */
export type QueryCommentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CommentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** The root type for querying data */
export type QueryIs_AdminArgs = {
	user_id: Scalars["UUID"]["input"];
};

/** The root type for querying data */
export type QueryIs_ContributorArgs = {
	user_id: Scalars["UUID"]["input"];
};

/** The root type for querying data */
export type QueryNodeArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryNotificationsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<NotificationsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

/** The root type for querying data */
export type QueryPost_AttachmentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<Post_AttachmentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<Post_AttachmentsOrderBy>>;
};

/** The root type for querying data */
export type QueryPostsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<PostsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

/** The root type for querying data */
export type QueryRatingsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<RatingsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<RatingsOrderBy>>;
};

/** The root type for querying data */
export type QueryReportsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<ReportsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

/** The root type for querying data */
export type QueryUsersCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<UsersFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
	eq?: InputMaybe<Scalars["String"]["input"]>;
	gt?: InputMaybe<Scalars["String"]["input"]>;
	gte?: InputMaybe<Scalars["String"]["input"]>;
	ilike?: InputMaybe<Scalars["String"]["input"]>;
	in?: InputMaybe<Array<Scalars["String"]["input"]>>;
	iregex?: InputMaybe<Scalars["String"]["input"]>;
	is?: InputMaybe<FilterIs>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	lt?: InputMaybe<Scalars["String"]["input"]>;
	lte?: InputMaybe<Scalars["String"]["input"]>;
	neq?: InputMaybe<Scalars["String"]["input"]>;
	regex?: InputMaybe<Scalars["String"]["input"]>;
	startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
	containedBy?: InputMaybe<Array<Scalars["String"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
	eq?: InputMaybe<Scalars["Time"]["input"]>;
	gt?: InputMaybe<Scalars["Time"]["input"]>;
	gte?: InputMaybe<Scalars["Time"]["input"]>;
	in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Time"]["input"]>;
	lte?: InputMaybe<Scalars["Time"]["input"]>;
	neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
	containedBy?: InputMaybe<Array<Scalars["Time"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["Time"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["Time"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["Time"]["input"]>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
	eq?: InputMaybe<Scalars["UUID"]["input"]>;
	in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
	containedBy?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
	contains?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
	eq?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
};

export type Categories = Node & {
	__typename?: "categories";
	created_at: Scalars["Datetime"]["output"];
	created_by?: Maybe<Scalars["UUID"]["output"]>;
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["UUID"]["output"];
	name: Scalars["String"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	postsCollection?: Maybe<PostsConnection>;
	updated_at: Scalars["Datetime"]["output"];
	users?: Maybe<Users>;
};

export type CategoriesPostsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<PostsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

export type CategoriesConnection = {
	__typename?: "categoriesConnection";
	edges: Array<CategoriesEdge>;
	pageInfo: PageInfo;
};

export type CategoriesDeleteResponse = {
	__typename?: "categoriesDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Categories>;
};

export type CategoriesEdge = {
	__typename?: "categoriesEdge";
	cursor: Scalars["String"]["output"];
	node: Categories;
};

export type CategoriesFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<CategoriesFilter>>;
	created_at?: InputMaybe<DatetimeFilter>;
	created_by?: InputMaybe<UuidFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<UuidFilter>;
	name?: InputMaybe<StringFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<CategoriesFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<CategoriesFilter>>;
	updated_at?: InputMaybe<DatetimeFilter>;
};

export type CategoriesInsertInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	created_by?: InputMaybe<Scalars["UUID"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type CategoriesInsertResponse = {
	__typename?: "categoriesInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Categories>;
};

export type CategoriesOrderBy = {
	created_at?: InputMaybe<OrderByDirection>;
	created_by?: InputMaybe<OrderByDirection>;
	description?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	name?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
};

export type CategoriesUpdateInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	created_by?: InputMaybe<Scalars["UUID"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type CategoriesUpdateResponse = {
	__typename?: "categoriesUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Categories>;
};

export type Comment_Attachments = Node & {
	__typename?: "comment_attachments";
	comment_id?: Maybe<Scalars["UUID"]["output"]>;
	comments?: Maybe<Comments>;
	created_at: Scalars["Datetime"]["output"];
	file_name: Scalars["String"]["output"];
	file_size: Scalars["Int"]["output"];
	file_type: Scalars["String"]["output"];
	id: Scalars["UUID"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	storage_path: Scalars["String"]["output"];
};

export type Comment_AttachmentsConnection = {
	__typename?: "comment_attachmentsConnection";
	edges: Array<Comment_AttachmentsEdge>;
	pageInfo: PageInfo;
};

export type Comment_AttachmentsDeleteResponse = {
	__typename?: "comment_attachmentsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comment_Attachments>;
};

export type Comment_AttachmentsEdge = {
	__typename?: "comment_attachmentsEdge";
	cursor: Scalars["String"]["output"];
	node: Comment_Attachments;
};

export type Comment_AttachmentsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<Comment_AttachmentsFilter>>;
	comment_id?: InputMaybe<UuidFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	file_name?: InputMaybe<StringFilter>;
	file_size?: InputMaybe<IntFilter>;
	file_type?: InputMaybe<StringFilter>;
	id?: InputMaybe<UuidFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<Comment_AttachmentsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<Comment_AttachmentsFilter>>;
	storage_path?: InputMaybe<StringFilter>;
};

export type Comment_AttachmentsInsertInput = {
	comment_id?: InputMaybe<Scalars["UUID"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	file_name?: InputMaybe<Scalars["String"]["input"]>;
	file_size?: InputMaybe<Scalars["Int"]["input"]>;
	file_type?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	storage_path?: InputMaybe<Scalars["String"]["input"]>;
};

export type Comment_AttachmentsInsertResponse = {
	__typename?: "comment_attachmentsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comment_Attachments>;
};

export type Comment_AttachmentsOrderBy = {
	comment_id?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	file_name?: InputMaybe<OrderByDirection>;
	file_size?: InputMaybe<OrderByDirection>;
	file_type?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	storage_path?: InputMaybe<OrderByDirection>;
};

export type Comment_AttachmentsUpdateInput = {
	comment_id?: InputMaybe<Scalars["UUID"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	file_name?: InputMaybe<Scalars["String"]["input"]>;
	file_size?: InputMaybe<Scalars["Int"]["input"]>;
	file_type?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	storage_path?: InputMaybe<Scalars["String"]["input"]>;
};

export type Comment_AttachmentsUpdateResponse = {
	__typename?: "comment_attachmentsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comment_Attachments>;
};

export type Comments = Node & {
	__typename?: "comments";
	comment_attachmentsCollection?: Maybe<Comment_AttachmentsConnection>;
	comments?: Maybe<Comments>;
	commentsCollection?: Maybe<CommentsConnection>;
	content: Scalars["String"]["output"];
	created_at: Scalars["Datetime"]["output"];
	id: Scalars["UUID"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	parent_id?: Maybe<Scalars["UUID"]["output"]>;
	post_id?: Maybe<Scalars["UUID"]["output"]>;
	posts?: Maybe<Posts>;
	updated_at: Scalars["Datetime"]["output"];
	user_id?: Maybe<Scalars["UUID"]["output"]>;
	users?: Maybe<Users>;
};

export type CommentsComment_AttachmentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<Comment_AttachmentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<Comment_AttachmentsOrderBy>>;
};

export type CommentsCommentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CommentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type CommentsConnection = {
	__typename?: "commentsConnection";
	edges: Array<CommentsEdge>;
	pageInfo: PageInfo;
};

export type CommentsDeleteResponse = {
	__typename?: "commentsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comments>;
};

export type CommentsEdge = {
	__typename?: "commentsEdge";
	cursor: Scalars["String"]["output"];
	node: Comments;
};

export type CommentsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<CommentsFilter>>;
	content?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	id?: InputMaybe<UuidFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<CommentsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<CommentsFilter>>;
	parent_id?: InputMaybe<UuidFilter>;
	post_id?: InputMaybe<UuidFilter>;
	updated_at?: InputMaybe<DatetimeFilter>;
	user_id?: InputMaybe<UuidFilter>;
};

export type CommentsInsertInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	parent_id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type CommentsInsertResponse = {
	__typename?: "commentsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comments>;
};

export type CommentsOrderBy = {
	content?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	parent_id?: InputMaybe<OrderByDirection>;
	post_id?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
	user_id?: InputMaybe<OrderByDirection>;
};

export type CommentsUpdateInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	parent_id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type CommentsUpdateResponse = {
	__typename?: "commentsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Comments>;
};

export enum Notification_Type {
	Comment = "comment",
	Mention = "mention",
	Rating = "rating",
	Report = "report",
	RoleChange = "role_change",
	System = "system",
}

/** Boolean expression comparing fields on type "notification_type" */
export type Notification_TypeFilter = {
	eq?: InputMaybe<Notification_Type>;
	in?: InputMaybe<Array<Notification_Type>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Notification_Type>;
};

export type Notifications = Node & {
	__typename?: "notifications";
	content: Scalars["String"]["output"];
	created_at: Scalars["Datetime"]["output"];
	id: Scalars["UUID"]["output"];
	is_read: Scalars["Boolean"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	related_id?: Maybe<Scalars["UUID"]["output"]>;
	type: Notification_Type;
	user_id?: Maybe<Scalars["UUID"]["output"]>;
	users?: Maybe<Users>;
};

export type NotificationsConnection = {
	__typename?: "notificationsConnection";
	edges: Array<NotificationsEdge>;
	pageInfo: PageInfo;
};

export type NotificationsDeleteResponse = {
	__typename?: "notificationsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notifications>;
};

export type NotificationsEdge = {
	__typename?: "notificationsEdge";
	cursor: Scalars["String"]["output"];
	node: Notifications;
};

export type NotificationsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<NotificationsFilter>>;
	content?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	id?: InputMaybe<UuidFilter>;
	is_read?: InputMaybe<BooleanFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<NotificationsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<NotificationsFilter>>;
	related_id?: InputMaybe<UuidFilter>;
	type?: InputMaybe<Notification_TypeFilter>;
	user_id?: InputMaybe<UuidFilter>;
};

export type NotificationsInsertInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
	related_id?: InputMaybe<Scalars["UUID"]["input"]>;
	type?: InputMaybe<Notification_Type>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type NotificationsInsertResponse = {
	__typename?: "notificationsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notifications>;
};

export type NotificationsOrderBy = {
	content?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	is_read?: InputMaybe<OrderByDirection>;
	related_id?: InputMaybe<OrderByDirection>;
	type?: InputMaybe<OrderByDirection>;
	user_id?: InputMaybe<OrderByDirection>;
};

export type NotificationsUpdateInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
	related_id?: InputMaybe<Scalars["UUID"]["input"]>;
	type?: InputMaybe<Notification_Type>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type NotificationsUpdateResponse = {
	__typename?: "notificationsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notifications>;
};

export type Post_Attachments = Node & {
	__typename?: "post_attachments";
	created_at: Scalars["Datetime"]["output"];
	file_name: Scalars["String"]["output"];
	file_size: Scalars["Int"]["output"];
	file_type: Scalars["String"]["output"];
	id: Scalars["UUID"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	post_id?: Maybe<Scalars["UUID"]["output"]>;
	posts?: Maybe<Posts>;
	storage_path: Scalars["String"]["output"];
};

export type Post_AttachmentsConnection = {
	__typename?: "post_attachmentsConnection";
	edges: Array<Post_AttachmentsEdge>;
	pageInfo: PageInfo;
};

export type Post_AttachmentsDeleteResponse = {
	__typename?: "post_attachmentsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Post_Attachments>;
};

export type Post_AttachmentsEdge = {
	__typename?: "post_attachmentsEdge";
	cursor: Scalars["String"]["output"];
	node: Post_Attachments;
};

export type Post_AttachmentsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<Post_AttachmentsFilter>>;
	created_at?: InputMaybe<DatetimeFilter>;
	file_name?: InputMaybe<StringFilter>;
	file_size?: InputMaybe<IntFilter>;
	file_type?: InputMaybe<StringFilter>;
	id?: InputMaybe<UuidFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<Post_AttachmentsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<Post_AttachmentsFilter>>;
	post_id?: InputMaybe<UuidFilter>;
	storage_path?: InputMaybe<StringFilter>;
};

export type Post_AttachmentsInsertInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	file_name?: InputMaybe<Scalars["String"]["input"]>;
	file_size?: InputMaybe<Scalars["Int"]["input"]>;
	file_type?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	storage_path?: InputMaybe<Scalars["String"]["input"]>;
};

export type Post_AttachmentsInsertResponse = {
	__typename?: "post_attachmentsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Post_Attachments>;
};

export type Post_AttachmentsOrderBy = {
	created_at?: InputMaybe<OrderByDirection>;
	file_name?: InputMaybe<OrderByDirection>;
	file_size?: InputMaybe<OrderByDirection>;
	file_type?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	post_id?: InputMaybe<OrderByDirection>;
	storage_path?: InputMaybe<OrderByDirection>;
};

export type Post_AttachmentsUpdateInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	file_name?: InputMaybe<Scalars["String"]["input"]>;
	file_size?: InputMaybe<Scalars["Int"]["input"]>;
	file_type?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	storage_path?: InputMaybe<Scalars["String"]["input"]>;
};

export type Post_AttachmentsUpdateResponse = {
	__typename?: "post_attachmentsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Post_Attachments>;
};

export type Posts = Node & {
	__typename?: "posts";
	author_id?: Maybe<Scalars["UUID"]["output"]>;
	categories?: Maybe<Categories>;
	category_id?: Maybe<Scalars["UUID"]["output"]>;
	commentsCollection?: Maybe<CommentsConnection>;
	content: Scalars["String"]["output"];
	created_at: Scalars["Datetime"]["output"];
	id: Scalars["UUID"]["output"];
	is_locked: Scalars["Boolean"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	post_attachmentsCollection?: Maybe<Post_AttachmentsConnection>;
	rating_type: Rating_Type;
	ratingsCollection?: Maybe<RatingsConnection>;
	title: Scalars["String"]["output"];
	updated_at: Scalars["Datetime"]["output"];
	users?: Maybe<Users>;
};

export type PostsCommentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CommentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type PostsPost_AttachmentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<Post_AttachmentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<Post_AttachmentsOrderBy>>;
};

export type PostsRatingsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<RatingsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<RatingsOrderBy>>;
};

export type PostsConnection = {
	__typename?: "postsConnection";
	edges: Array<PostsEdge>;
	pageInfo: PageInfo;
};

export type PostsDeleteResponse = {
	__typename?: "postsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Posts>;
};

export type PostsEdge = {
	__typename?: "postsEdge";
	cursor: Scalars["String"]["output"];
	node: Posts;
};

export type PostsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<PostsFilter>>;
	author_id?: InputMaybe<UuidFilter>;
	category_id?: InputMaybe<UuidFilter>;
	content?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	id?: InputMaybe<UuidFilter>;
	is_locked?: InputMaybe<BooleanFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<PostsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<PostsFilter>>;
	rating_type?: InputMaybe<Rating_TypeFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DatetimeFilter>;
};

export type PostsInsertInput = {
	author_id?: InputMaybe<Scalars["UUID"]["input"]>;
	category_id?: InputMaybe<Scalars["UUID"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_locked?: InputMaybe<Scalars["Boolean"]["input"]>;
	rating_type?: InputMaybe<Rating_Type>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type PostsInsertResponse = {
	__typename?: "postsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Posts>;
};

export type PostsOrderBy = {
	author_id?: InputMaybe<OrderByDirection>;
	category_id?: InputMaybe<OrderByDirection>;
	content?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	is_locked?: InputMaybe<OrderByDirection>;
	rating_type?: InputMaybe<OrderByDirection>;
	title?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
};

export type PostsUpdateInput = {
	author_id?: InputMaybe<Scalars["UUID"]["input"]>;
	category_id?: InputMaybe<Scalars["UUID"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_locked?: InputMaybe<Scalars["Boolean"]["input"]>;
	rating_type?: InputMaybe<Rating_Type>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type PostsUpdateResponse = {
	__typename?: "postsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Posts>;
};

export enum Rating_Type {
	Score = "score",
	Star = "star",
	Vote = "vote",
}

/** Boolean expression comparing fields on type "rating_type" */
export type Rating_TypeFilter = {
	eq?: InputMaybe<Rating_Type>;
	in?: InputMaybe<Array<Rating_Type>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Rating_Type>;
};

export type Ratings = Node & {
	__typename?: "ratings";
	created_at: Scalars["Datetime"]["output"];
	id: Scalars["UUID"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	post_id?: Maybe<Scalars["UUID"]["output"]>;
	posts?: Maybe<Posts>;
	updated_at: Scalars["Datetime"]["output"];
	user_id?: Maybe<Scalars["UUID"]["output"]>;
	users?: Maybe<Users>;
	value: Scalars["Int"]["output"];
};

export type RatingsConnection = {
	__typename?: "ratingsConnection";
	edges: Array<RatingsEdge>;
	pageInfo: PageInfo;
};

export type RatingsDeleteResponse = {
	__typename?: "ratingsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Ratings>;
};

export type RatingsEdge = {
	__typename?: "ratingsEdge";
	cursor: Scalars["String"]["output"];
	node: Ratings;
};

export type RatingsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<RatingsFilter>>;
	created_at?: InputMaybe<DatetimeFilter>;
	id?: InputMaybe<UuidFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<RatingsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<RatingsFilter>>;
	post_id?: InputMaybe<UuidFilter>;
	updated_at?: InputMaybe<DatetimeFilter>;
	user_id?: InputMaybe<UuidFilter>;
	value?: InputMaybe<IntFilter>;
};

export type RatingsInsertInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
	value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingsInsertResponse = {
	__typename?: "ratingsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Ratings>;
};

export type RatingsOrderBy = {
	created_at?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	post_id?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
	user_id?: InputMaybe<OrderByDirection>;
	value?: InputMaybe<OrderByDirection>;
};

export type RatingsUpdateInput = {
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	post_id?: InputMaybe<Scalars["UUID"]["input"]>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	user_id?: InputMaybe<Scalars["UUID"]["input"]>;
	value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RatingsUpdateResponse = {
	__typename?: "ratingsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Ratings>;
};

export enum Report_Reason {
	Harassment = "harassment",
	Illegal = "illegal",
	Inappropriate = "inappropriate",
	Other = "other",
	Spam = "spam",
}

/** Boolean expression comparing fields on type "report_reason" */
export type Report_ReasonFilter = {
	eq?: InputMaybe<Report_Reason>;
	in?: InputMaybe<Array<Report_Reason>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Report_Reason>;
};

export enum Report_Status {
	Pending = "pending",
	Rejected = "rejected",
	Resolved = "resolved",
}

/** Boolean expression comparing fields on type "report_status" */
export type Report_StatusFilter = {
	eq?: InputMaybe<Report_Status>;
	in?: InputMaybe<Array<Report_Status>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Report_Status>;
};

export type Reports = Node & {
	__typename?: "reports";
	content_id: Scalars["UUID"]["output"];
	content_type: Scalars["String"]["output"];
	created_at: Scalars["Datetime"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["UUID"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	reason: Report_Reason;
	reporter_id?: Maybe<Scalars["UUID"]["output"]>;
	resolved_by?: Maybe<Scalars["UUID"]["output"]>;
	status: Report_Status;
	updated_at: Scalars["Datetime"]["output"];
	users?: Maybe<Users>;
};

export type ReportsConnection = {
	__typename?: "reportsConnection";
	edges: Array<ReportsEdge>;
	pageInfo: PageInfo;
};

export type ReportsDeleteResponse = {
	__typename?: "reportsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Reports>;
};

export type ReportsEdge = {
	__typename?: "reportsEdge";
	cursor: Scalars["String"]["output"];
	node: Reports;
};

export type ReportsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<ReportsFilter>>;
	content_id?: InputMaybe<UuidFilter>;
	content_type?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<UuidFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<ReportsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<ReportsFilter>>;
	reason?: InputMaybe<Report_ReasonFilter>;
	reporter_id?: InputMaybe<UuidFilter>;
	resolved_by?: InputMaybe<UuidFilter>;
	status?: InputMaybe<Report_StatusFilter>;
	updated_at?: InputMaybe<DatetimeFilter>;
};

export type ReportsInsertInput = {
	content_id?: InputMaybe<Scalars["UUID"]["input"]>;
	content_type?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	reason?: InputMaybe<Report_Reason>;
	reporter_id?: InputMaybe<Scalars["UUID"]["input"]>;
	resolved_by?: InputMaybe<Scalars["UUID"]["input"]>;
	status?: InputMaybe<Report_Status>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type ReportsInsertResponse = {
	__typename?: "reportsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Reports>;
};

export type ReportsOrderBy = {
	content_id?: InputMaybe<OrderByDirection>;
	content_type?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	description?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	reason?: InputMaybe<OrderByDirection>;
	reporter_id?: InputMaybe<OrderByDirection>;
	resolved_by?: InputMaybe<OrderByDirection>;
	status?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
};

export type ReportsUpdateInput = {
	content_id?: InputMaybe<Scalars["UUID"]["input"]>;
	content_type?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	reason?: InputMaybe<Report_Reason>;
	reporter_id?: InputMaybe<Scalars["UUID"]["input"]>;
	resolved_by?: InputMaybe<Scalars["UUID"]["input"]>;
	status?: InputMaybe<Report_Status>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type ReportsUpdateResponse = {
	__typename?: "reportsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Reports>;
};

export enum User_Role {
	Admin = "admin",
	Contributor = "contributor",
	Member = "member",
}

/** Boolean expression comparing fields on type "user_role" */
export type User_RoleFilter = {
	eq?: InputMaybe<User_Role>;
	in?: InputMaybe<Array<User_Role>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<User_Role>;
};

export type Users = Node & {
	__typename?: "users";
	avatar_url?: Maybe<Scalars["String"]["output"]>;
	categoriesCollection?: Maybe<CategoriesConnection>;
	commentsCollection?: Maybe<CommentsConnection>;
	created_at: Scalars["Datetime"]["output"];
	display_name: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["UUID"]["output"];
	is_active: Scalars["Boolean"]["output"];
	is_verified: Scalars["Boolean"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	notificationsCollection?: Maybe<NotificationsConnection>;
	password: Scalars["String"]["output"];
	postsCollection?: Maybe<PostsConnection>;
	ratingsCollection?: Maybe<RatingsConnection>;
	reportsCollection?: Maybe<ReportsConnection>;
	role: User_Role;
	updated_at: Scalars["Datetime"]["output"];
};

export type UsersCategoriesCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CategoriesFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type UsersCommentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<CommentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type UsersNotificationsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<NotificationsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<NotificationsOrderBy>>;
};

export type UsersPostsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<PostsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<PostsOrderBy>>;
};

export type UsersRatingsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<RatingsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<RatingsOrderBy>>;
};

export type UsersReportsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<ReportsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	offset?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<ReportsOrderBy>>;
};

export type UsersConnection = {
	__typename?: "usersConnection";
	edges: Array<UsersEdge>;
	pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
	__typename?: "usersDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Users>;
};

export type UsersEdge = {
	__typename?: "usersEdge";
	cursor: Scalars["String"]["output"];
	node: Users;
};

export type UsersFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<UsersFilter>>;
	avatar_url?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DatetimeFilter>;
	display_name?: InputMaybe<StringFilter>;
	email?: InputMaybe<StringFilter>;
	id?: InputMaybe<UuidFilter>;
	is_active?: InputMaybe<BooleanFilter>;
	is_verified?: InputMaybe<BooleanFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<UsersFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<UsersFilter>>;
	password?: InputMaybe<StringFilter>;
	role?: InputMaybe<User_RoleFilter>;
	updated_at?: InputMaybe<DatetimeFilter>;
};

export type UsersInsertInput = {
	avatar_url?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	display_name?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
	is_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<User_Role>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type UsersInsertResponse = {
	__typename?: "usersInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Users>;
};

export type UsersOrderBy = {
	avatar_url?: InputMaybe<OrderByDirection>;
	created_at?: InputMaybe<OrderByDirection>;
	display_name?: InputMaybe<OrderByDirection>;
	email?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	is_active?: InputMaybe<OrderByDirection>;
	is_verified?: InputMaybe<OrderByDirection>;
	password?: InputMaybe<OrderByDirection>;
	role?: InputMaybe<OrderByDirection>;
	updated_at?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
	avatar_url?: InputMaybe<Scalars["String"]["input"]>;
	created_at?: InputMaybe<Scalars["Datetime"]["input"]>;
	display_name?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["UUID"]["input"]>;
	is_active?: InputMaybe<Scalars["Boolean"]["input"]>;
	is_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
	password?: InputMaybe<Scalars["String"]["input"]>;
	role?: InputMaybe<User_Role>;
	updated_at?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type UsersUpdateResponse = {
	__typename?: "usersUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Users>;
};
