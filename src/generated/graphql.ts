import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

export type ChangePasswordOutput = {
  __typename?: 'ChangePasswordOutput';
  message: Scalars['String']['output'];
  user_id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Categories for posts and products */
export type Categories = {
  __typename?: 'categories';
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id: Scalars['Int']['output'];
  /** Category name */
  name: Scalars['String']['output'];
  /** Category type: post or product */
  type: Scalars['String']['output'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Category name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Category type: post or product */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Category name */
  name?: Maybe<Scalars['String']['output']>;
  /** Category type: post or product */
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Category name */
  name?: Maybe<Scalars['String']['output']>;
  /** Category type: post or product */
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Category name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Category type: post or product */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Category name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Category type: post or product */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  change_password?: Maybe<ChangePasswordOutput>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootChange_PasswordArgs = {
  current_password?: InputMaybe<Scalars['String']['input']>;
  new_password: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Posts table for content management */
export type Posts = {
  __typename?: 'posts';
  /** Post content */
  body: Scalars['String']['output'];
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id: Scalars['Int']['output'];
  /** Post status: draft or published */
  status?: Maybe<Scalars['String']['output']>;
  /** Post title */
  title: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  /** Reference to users table */
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  /** Post content */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Post status: draft or published */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Post title */
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  /** Post content */
  body?: Maybe<Scalars['String']['output']>;
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Post status: draft or published */
  status?: Maybe<Scalars['String']['output']>;
  /** Post title */
  title?: Maybe<Scalars['String']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  /** Post content */
  body?: Maybe<Scalars['String']['output']>;
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Post status: draft or published */
  status?: Maybe<Scalars['String']['output']>;
  /** Post title */
  title?: Maybe<Scalars['String']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int']['input'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  /** Post content */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Post status: draft or published */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Post title */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  /** Post content */
  body?: InputMaybe<Scalars['String']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Post status: draft or published */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Post title */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Products table for e-commerce */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category?: Maybe<Categories>;
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Product description */
  description?: Maybe<Scalars['String']['output']>;
  /** Primary key */
  id: Scalars['Int']['output'];
  /** Product image URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Product name */
  name: Scalars['String']['output'];
  /** Product price */
  price: Scalars['numeric']['output'];
  /** Unique URL slug */
  slug: Scalars['String']['output'];
  /** Product status: active or inactive */
  status?: Maybe<Scalars['String']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  user: Users;
  /** Reference to users table */
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  stock?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey',
  /** unique or primary key constraint on columns "slug" */
  ProductsSlugKey = 'products_slug_key'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  /** Reference to categories table */
  category_id?: InputMaybe<Scalars['Int']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Product price */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Stock quantity */
  stock?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  /** Reference to categories table */
  category_id?: InputMaybe<Scalars['Int']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Product description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Product image URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Product name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product price */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Unique URL slug */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Product status: active or inactive */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Stock quantity */
  stock?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Product description */
  description?: Maybe<Scalars['String']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Product image URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Product name */
  name?: Maybe<Scalars['String']['output']>;
  /** Product price */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Unique URL slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Product status: active or inactive */
  status?: Maybe<Scalars['String']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Int']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** Creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Product description */
  description?: Maybe<Scalars['String']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Product image URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Product name */
  name?: Maybe<Scalars['String']['output']>;
  /** Product price */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Unique URL slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Product status: active or inactive */
  status?: Maybe<Scalars['String']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Int']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stock?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Stock = 'stock',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  /** Reference to categories table */
  category_id?: InputMaybe<Scalars['Int']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Product description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Product image URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Product name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product price */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Unique URL slug */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Product status: active or inactive */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Stock quantity */
  stock?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  /** Reference to categories table */
  category_id?: InputMaybe<Scalars['Int']['input']>;
  /** Creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Product description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Product image URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Product name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product price */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Unique URL slug */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Product status: active or inactive */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Stock quantity */
  stock?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to users table */
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Product price */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Int']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
  /** column name */
  Stock = 'stock',
  /** column name */
  UserId = 'user_id'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  /** Reference to categories table */
  category_id?: Maybe<Scalars['Float']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Product price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Stock quantity */
  stock?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Users table for admin system */
export type Users = {
  __typename?: 'users';
  /** Account creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id: Scalars['Int']['output'];
  /** Hashed password */
  password: Scalars['String']['output'];
  /** User role: admin or user */
  role?: Maybe<Scalars['String']['output']>;
  /** Unique username for login */
  username: Scalars['String']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  /** Account creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User role: admin or user */
  role?: InputMaybe<Scalars['String']['input']>;
  /** Unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  /** Account creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Hashed password */
  password?: Maybe<Scalars['String']['output']>;
  /** User role: admin or user */
  role?: Maybe<Scalars['String']['output']>;
  /** Unique username for login */
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  /** Account creation timestamp */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
  /** Hashed password */
  password?: Maybe<Scalars['String']['output']>;
  /** User role: admin or user */
  role?: Maybe<Scalars['String']['output']>;
  /** Unique username for login */
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  /** Primary key */
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  /** Account creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User role: admin or user */
  role?: InputMaybe<Scalars['String']['input']>;
  /** Unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  /** Account creation timestamp */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Primary key */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Hashed password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User role: admin or user */
  role?: InputMaybe<Scalars['String']['input']>;
  /** Unique username for login */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  /** Primary key */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
};

export type AdminStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminStatsQuery = { __typename?: 'query_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null }, products_aggregate: { __typename?: 'products_aggregate', aggregate?: { __typename?: 'products_aggregate_fields', count: number } | null }, posts_aggregate: { __typename?: 'posts_aggregate', aggregate?: { __typename?: 'posts_aggregate_fields', count: number } | null }, categories_aggregate: { __typename?: 'categories_aggregate', aggregate?: { __typename?: 'categories_aggregate_fields', count: number } | null } };

export type AdminUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, username: string, role?: string | null, created_at?: any | null }> };

export type AdminCreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
}>;


export type AdminCreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: number, username: string, role?: string | null } | null };

export type AdminUpdateUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminUpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: number, username: string, role?: string | null } | null };

export type AdminDeleteUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminDeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename?: 'users', id: number } | null };

export type AdminProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, image_url?: string | null, status?: string | null, created_at?: any | null, user: { __typename?: 'users', username: string }, category?: { __typename?: 'categories', name: string } | null }> };

export type AdminCreateProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['numeric']['input'];
  stock: Scalars['Int']['input'];
  image_url: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
}>;


export type AdminCreateProductMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, image_url?: string | null, status?: string | null } | null };

export type AdminUpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminUpdateProductMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, image_url?: string | null, status?: string | null } | null };

export type AdminDeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminDeleteProductMutation = { __typename?: 'mutation_root', delete_products_by_pk?: { __typename?: 'products', id: number } | null };

export type AdminPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminPostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string, status?: string | null, created_at?: any | null, user: { __typename?: 'users', username: string } }> };

export type AdminCreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
  user_id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
}>;


export type AdminCreatePostMutation = { __typename?: 'mutation_root', insert_posts_one?: { __typename?: 'posts', id: number, title: string, body: string, status?: string | null } | null };

export type AdminUpdatePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminUpdatePostMutation = { __typename?: 'mutation_root', update_posts_by_pk?: { __typename?: 'posts', id: number, title: string, body: string, status?: string | null } | null };

export type AdminDeletePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminDeletePostMutation = { __typename?: 'mutation_root', delete_posts_by_pk?: { __typename?: 'posts', id: number } | null };

export type AdminCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null }> };

export type AdminCreateCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
}>;


export type AdminCreateCategoryMutation = { __typename?: 'mutation_root', insert_categories_one?: { __typename?: 'categories', id: number, name: string, type: string } | null };

export type AdminUpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminUpdateCategoryMutation = { __typename?: 'mutation_root', update_categories_by_pk?: { __typename?: 'categories', id: number, name: string, type: string } | null };

export type AdminDeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminDeleteCategoryMutation = { __typename?: 'mutation_root', delete_categories_by_pk?: { __typename?: 'categories', id: number } | null };

export type AdminChangePasswordMutationVariables = Exact<{
  user_id: Scalars['Int']['input'];
  current_password?: InputMaybe<Scalars['String']['input']>;
  new_password: Scalars['String']['input'];
}>;


export type AdminChangePasswordMutation = { __typename?: 'mutation_root', change_password?: { __typename?: 'ChangePasswordOutput', message: string, user_id: number, username: string } | null };

export type AdminGetUserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminGetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: number, username: string, password: string } | null };


export const AdminStatsDocument = gql`
    query AdminStats {
  users_aggregate {
    aggregate {
      count
    }
  }
  products_aggregate {
    aggregate {
      count
    }
  }
  posts_aggregate {
    aggregate {
      count
    }
  }
  categories_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useAdminStatsQuery__
 *
 * To run a query within a React component, call `useAdminStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminStatsQuery(baseOptions?: Apollo.QueryHookOptions<AdminStatsQuery, AdminStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminStatsQuery, AdminStatsQueryVariables>(AdminStatsDocument, options);
      }
export function useAdminStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminStatsQuery, AdminStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminStatsQuery, AdminStatsQueryVariables>(AdminStatsDocument, options);
        }
export function useAdminStatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminStatsQuery, AdminStatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminStatsQuery, AdminStatsQueryVariables>(AdminStatsDocument, options);
        }
export type AdminStatsQueryHookResult = ReturnType<typeof useAdminStatsQuery>;
export type AdminStatsLazyQueryHookResult = ReturnType<typeof useAdminStatsLazyQuery>;
export type AdminStatsSuspenseQueryHookResult = ReturnType<typeof useAdminStatsSuspenseQuery>;
export type AdminStatsQueryResult = Apollo.QueryResult<AdminStatsQuery, AdminStatsQueryVariables>;
export const AdminUsersDocument = gql`
    query AdminUsers {
  users {
    id
    username
    role
    created_at
  }
}
    `;

/**
 * __useAdminUsersQuery__
 *
 * To run a query within a React component, call `useAdminUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminUsersQuery(baseOptions?: Apollo.QueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, options);
      }
export function useAdminUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, options);
        }
export function useAdminUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, options);
        }
export type AdminUsersQueryHookResult = ReturnType<typeof useAdminUsersQuery>;
export type AdminUsersLazyQueryHookResult = ReturnType<typeof useAdminUsersLazyQuery>;
export type AdminUsersSuspenseQueryHookResult = ReturnType<typeof useAdminUsersSuspenseQuery>;
export type AdminUsersQueryResult = Apollo.QueryResult<AdminUsersQuery, AdminUsersQueryVariables>;
export const AdminCreateUserDocument = gql`
    mutation AdminCreateUser($username: String!, $password: String!, $role: String!) {
  insert_users_one(
    object: {username: $username, password: $password, role: $role}
  ) {
    id
    username
    role
  }
}
    `;
export type AdminCreateUserMutationFn = Apollo.MutationFunction<AdminCreateUserMutation, AdminCreateUserMutationVariables>;

/**
 * __useAdminCreateUserMutation__
 *
 * To run a mutation, you first call `useAdminCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateUserMutation, { data, loading, error }] = useAdminCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useAdminCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<AdminCreateUserMutation, AdminCreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminCreateUserMutation, AdminCreateUserMutationVariables>(AdminCreateUserDocument, options);
      }
export type AdminCreateUserMutationHookResult = ReturnType<typeof useAdminCreateUserMutation>;
export type AdminCreateUserMutationResult = Apollo.MutationResult<AdminCreateUserMutation>;
export type AdminCreateUserMutationOptions = Apollo.BaseMutationOptions<AdminCreateUserMutation, AdminCreateUserMutationVariables>;
export const AdminUpdateUserDocument = gql`
    mutation AdminUpdateUser($id: Int!, $username: String, $role: String) {
  update_users_by_pk(
    pk_columns: {id: $id}
    _set: {username: $username, role: $role}
  ) {
    id
    username
    role
  }
}
    `;
export type AdminUpdateUserMutationFn = Apollo.MutationFunction<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>;

/**
 * __useAdminUpdateUserMutation__
 *
 * To run a mutation, you first call `useAdminUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateUserMutation, { data, loading, error }] = useAdminUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useAdminUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>(AdminUpdateUserDocument, options);
      }
export type AdminUpdateUserMutationHookResult = ReturnType<typeof useAdminUpdateUserMutation>;
export type AdminUpdateUserMutationResult = Apollo.MutationResult<AdminUpdateUserMutation>;
export type AdminUpdateUserMutationOptions = Apollo.BaseMutationOptions<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>;
export const AdminDeleteUserDocument = gql`
    mutation AdminDeleteUser($id: Int!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
    `;
export type AdminDeleteUserMutationFn = Apollo.MutationFunction<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>;

/**
 * __useAdminDeleteUserMutation__
 *
 * To run a mutation, you first call `useAdminDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteUserMutation, { data, loading, error }] = useAdminDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>(AdminDeleteUserDocument, options);
      }
export type AdminDeleteUserMutationHookResult = ReturnType<typeof useAdminDeleteUserMutation>;
export type AdminDeleteUserMutationResult = Apollo.MutationResult<AdminDeleteUserMutation>;
export type AdminDeleteUserMutationOptions = Apollo.BaseMutationOptions<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>;
export const AdminProductsDocument = gql`
    query AdminProducts {
  products {
    id
    name
    slug
    description
    price
    stock
    image_url
    status
    created_at
    user {
      username
    }
    category {
      name
    }
  }
}
    `;

/**
 * __useAdminProductsQuery__
 *
 * To run a query within a React component, call `useAdminProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminProductsQuery(baseOptions?: Apollo.QueryHookOptions<AdminProductsQuery, AdminProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminProductsQuery, AdminProductsQueryVariables>(AdminProductsDocument, options);
      }
export function useAdminProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminProductsQuery, AdminProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminProductsQuery, AdminProductsQueryVariables>(AdminProductsDocument, options);
        }
export function useAdminProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminProductsQuery, AdminProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminProductsQuery, AdminProductsQueryVariables>(AdminProductsDocument, options);
        }
export type AdminProductsQueryHookResult = ReturnType<typeof useAdminProductsQuery>;
export type AdminProductsLazyQueryHookResult = ReturnType<typeof useAdminProductsLazyQuery>;
export type AdminProductsSuspenseQueryHookResult = ReturnType<typeof useAdminProductsSuspenseQuery>;
export type AdminProductsQueryResult = Apollo.QueryResult<AdminProductsQuery, AdminProductsQueryVariables>;
export const AdminCreateProductDocument = gql`
    mutation AdminCreateProduct($name: String!, $slug: String!, $description: String!, $price: numeric!, $stock: Int!, $image_url: String!, $category_id: Int!, $user_id: Int!, $status: String!) {
  insert_products_one(
    object: {name: $name, slug: $slug, description: $description, price: $price, stock: $stock, image_url: $image_url, category_id: $category_id, user_id: $user_id, status: $status}
  ) {
    id
    name
    slug
    description
    price
    stock
    image_url
    status
  }
}
    `;
export type AdminCreateProductMutationFn = Apollo.MutationFunction<AdminCreateProductMutation, AdminCreateProductMutationVariables>;

/**
 * __useAdminCreateProductMutation__
 *
 * To run a mutation, you first call `useAdminCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateProductMutation, { data, loading, error }] = useAdminCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      stock: // value for 'stock'
 *      image_url: // value for 'image_url'
 *      category_id: // value for 'category_id'
 *      user_id: // value for 'user_id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<AdminCreateProductMutation, AdminCreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminCreateProductMutation, AdminCreateProductMutationVariables>(AdminCreateProductDocument, options);
      }
export type AdminCreateProductMutationHookResult = ReturnType<typeof useAdminCreateProductMutation>;
export type AdminCreateProductMutationResult = Apollo.MutationResult<AdminCreateProductMutation>;
export type AdminCreateProductMutationOptions = Apollo.BaseMutationOptions<AdminCreateProductMutation, AdminCreateProductMutationVariables>;
export const AdminUpdateProductDocument = gql`
    mutation AdminUpdateProduct($id: Int!, $name: String, $slug: String, $description: String, $price: numeric, $stock: Int, $image_url: String, $category_id: Int, $status: String) {
  update_products_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, slug: $slug, description: $description, price: $price, stock: $stock, image_url: $image_url, category_id: $category_id, status: $status}
  ) {
    id
    name
    slug
    description
    price
    stock
    image_url
    status
  }
}
    `;
export type AdminUpdateProductMutationFn = Apollo.MutationFunction<AdminUpdateProductMutation, AdminUpdateProductMutationVariables>;

/**
 * __useAdminUpdateProductMutation__
 *
 * To run a mutation, you first call `useAdminUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateProductMutation, { data, loading, error }] = useAdminUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      stock: // value for 'stock'
 *      image_url: // value for 'image_url'
 *      category_id: // value for 'category_id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<AdminUpdateProductMutation, AdminUpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminUpdateProductMutation, AdminUpdateProductMutationVariables>(AdminUpdateProductDocument, options);
      }
export type AdminUpdateProductMutationHookResult = ReturnType<typeof useAdminUpdateProductMutation>;
export type AdminUpdateProductMutationResult = Apollo.MutationResult<AdminUpdateProductMutation>;
export type AdminUpdateProductMutationOptions = Apollo.BaseMutationOptions<AdminUpdateProductMutation, AdminUpdateProductMutationVariables>;
export const AdminDeleteProductDocument = gql`
    mutation AdminDeleteProduct($id: Int!) {
  delete_products_by_pk(id: $id) {
    id
  }
}
    `;
export type AdminDeleteProductMutationFn = Apollo.MutationFunction<AdminDeleteProductMutation, AdminDeleteProductMutationVariables>;

/**
 * __useAdminDeleteProductMutation__
 *
 * To run a mutation, you first call `useAdminDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteProductMutation, { data, loading, error }] = useAdminDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<AdminDeleteProductMutation, AdminDeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminDeleteProductMutation, AdminDeleteProductMutationVariables>(AdminDeleteProductDocument, options);
      }
export type AdminDeleteProductMutationHookResult = ReturnType<typeof useAdminDeleteProductMutation>;
export type AdminDeleteProductMutationResult = Apollo.MutationResult<AdminDeleteProductMutation>;
export type AdminDeleteProductMutationOptions = Apollo.BaseMutationOptions<AdminDeleteProductMutation, AdminDeleteProductMutationVariables>;
export const AdminPostsDocument = gql`
    query AdminPosts {
  posts {
    id
    title
    body
    status
    created_at
    user {
      username
    }
  }
}
    `;

/**
 * __useAdminPostsQuery__
 *
 * To run a query within a React component, call `useAdminPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminPostsQuery(baseOptions?: Apollo.QueryHookOptions<AdminPostsQuery, AdminPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPostsQuery, AdminPostsQueryVariables>(AdminPostsDocument, options);
      }
export function useAdminPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPostsQuery, AdminPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPostsQuery, AdminPostsQueryVariables>(AdminPostsDocument, options);
        }
export function useAdminPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminPostsQuery, AdminPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminPostsQuery, AdminPostsQueryVariables>(AdminPostsDocument, options);
        }
export type AdminPostsQueryHookResult = ReturnType<typeof useAdminPostsQuery>;
export type AdminPostsLazyQueryHookResult = ReturnType<typeof useAdminPostsLazyQuery>;
export type AdminPostsSuspenseQueryHookResult = ReturnType<typeof useAdminPostsSuspenseQuery>;
export type AdminPostsQueryResult = Apollo.QueryResult<AdminPostsQuery, AdminPostsQueryVariables>;
export const AdminCreatePostDocument = gql`
    mutation AdminCreatePost($title: String!, $body: String!, $user_id: Int!, $status: String!) {
  insert_posts_one(
    object: {title: $title, body: $body, user_id: $user_id, status: $status}
  ) {
    id
    title
    body
    status
  }
}
    `;
export type AdminCreatePostMutationFn = Apollo.MutationFunction<AdminCreatePostMutation, AdminCreatePostMutationVariables>;

/**
 * __useAdminCreatePostMutation__
 *
 * To run a mutation, you first call `useAdminCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreatePostMutation, { data, loading, error }] = useAdminCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      user_id: // value for 'user_id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<AdminCreatePostMutation, AdminCreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminCreatePostMutation, AdminCreatePostMutationVariables>(AdminCreatePostDocument, options);
      }
export type AdminCreatePostMutationHookResult = ReturnType<typeof useAdminCreatePostMutation>;
export type AdminCreatePostMutationResult = Apollo.MutationResult<AdminCreatePostMutation>;
export type AdminCreatePostMutationOptions = Apollo.BaseMutationOptions<AdminCreatePostMutation, AdminCreatePostMutationVariables>;
export const AdminUpdatePostDocument = gql`
    mutation AdminUpdatePost($id: Int!, $title: String, $body: String, $status: String) {
  update_posts_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, body: $body, status: $status}
  ) {
    id
    title
    body
    status
  }
}
    `;
export type AdminUpdatePostMutationFn = Apollo.MutationFunction<AdminUpdatePostMutation, AdminUpdatePostMutationVariables>;

/**
 * __useAdminUpdatePostMutation__
 *
 * To run a mutation, you first call `useAdminUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdatePostMutation, { data, loading, error }] = useAdminUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<AdminUpdatePostMutation, AdminUpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminUpdatePostMutation, AdminUpdatePostMutationVariables>(AdminUpdatePostDocument, options);
      }
export type AdminUpdatePostMutationHookResult = ReturnType<typeof useAdminUpdatePostMutation>;
export type AdminUpdatePostMutationResult = Apollo.MutationResult<AdminUpdatePostMutation>;
export type AdminUpdatePostMutationOptions = Apollo.BaseMutationOptions<AdminUpdatePostMutation, AdminUpdatePostMutationVariables>;
export const AdminDeletePostDocument = gql`
    mutation AdminDeletePost($id: Int!) {
  delete_posts_by_pk(id: $id) {
    id
  }
}
    `;
export type AdminDeletePostMutationFn = Apollo.MutationFunction<AdminDeletePostMutation, AdminDeletePostMutationVariables>;

/**
 * __useAdminDeletePostMutation__
 *
 * To run a mutation, you first call `useAdminDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeletePostMutation, { data, loading, error }] = useAdminDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<AdminDeletePostMutation, AdminDeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminDeletePostMutation, AdminDeletePostMutationVariables>(AdminDeletePostDocument, options);
      }
export type AdminDeletePostMutationHookResult = ReturnType<typeof useAdminDeletePostMutation>;
export type AdminDeletePostMutationResult = Apollo.MutationResult<AdminDeletePostMutation>;
export type AdminDeletePostMutationOptions = Apollo.BaseMutationOptions<AdminDeletePostMutation, AdminDeletePostMutationVariables>;
export const AdminCategoriesDocument = gql`
    query AdminCategories {
  categories {
    id
    name
    type
    created_at
  }
}
    `;

/**
 * __useAdminCategoriesQuery__
 *
 * To run a query within a React component, call `useAdminCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AdminCategoriesQuery, AdminCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminCategoriesQuery, AdminCategoriesQueryVariables>(AdminCategoriesDocument, options);
      }
export function useAdminCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminCategoriesQuery, AdminCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminCategoriesQuery, AdminCategoriesQueryVariables>(AdminCategoriesDocument, options);
        }
export function useAdminCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminCategoriesQuery, AdminCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminCategoriesQuery, AdminCategoriesQueryVariables>(AdminCategoriesDocument, options);
        }
export type AdminCategoriesQueryHookResult = ReturnType<typeof useAdminCategoriesQuery>;
export type AdminCategoriesLazyQueryHookResult = ReturnType<typeof useAdminCategoriesLazyQuery>;
export type AdminCategoriesSuspenseQueryHookResult = ReturnType<typeof useAdminCategoriesSuspenseQuery>;
export type AdminCategoriesQueryResult = Apollo.QueryResult<AdminCategoriesQuery, AdminCategoriesQueryVariables>;
export const AdminCreateCategoryDocument = gql`
    mutation AdminCreateCategory($name: String!, $type: String!) {
  insert_categories_one(object: {name: $name, type: $type}) {
    id
    name
    type
  }
}
    `;
export type AdminCreateCategoryMutationFn = Apollo.MutationFunction<AdminCreateCategoryMutation, AdminCreateCategoryMutationVariables>;

/**
 * __useAdminCreateCategoryMutation__
 *
 * To run a mutation, you first call `useAdminCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateCategoryMutation, { data, loading, error }] = useAdminCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAdminCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AdminCreateCategoryMutation, AdminCreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminCreateCategoryMutation, AdminCreateCategoryMutationVariables>(AdminCreateCategoryDocument, options);
      }
export type AdminCreateCategoryMutationHookResult = ReturnType<typeof useAdminCreateCategoryMutation>;
export type AdminCreateCategoryMutationResult = Apollo.MutationResult<AdminCreateCategoryMutation>;
export type AdminCreateCategoryMutationOptions = Apollo.BaseMutationOptions<AdminCreateCategoryMutation, AdminCreateCategoryMutationVariables>;
export const AdminUpdateCategoryDocument = gql`
    mutation AdminUpdateCategory($id: Int!, $name: String, $type: String) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {name: $name, type: $type}) {
    id
    name
    type
  }
}
    `;
export type AdminUpdateCategoryMutationFn = Apollo.MutationFunction<AdminUpdateCategoryMutation, AdminUpdateCategoryMutationVariables>;

/**
 * __useAdminUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useAdminUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateCategoryMutation, { data, loading, error }] = useAdminUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAdminUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AdminUpdateCategoryMutation, AdminUpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminUpdateCategoryMutation, AdminUpdateCategoryMutationVariables>(AdminUpdateCategoryDocument, options);
      }
export type AdminUpdateCategoryMutationHookResult = ReturnType<typeof useAdminUpdateCategoryMutation>;
export type AdminUpdateCategoryMutationResult = Apollo.MutationResult<AdminUpdateCategoryMutation>;
export type AdminUpdateCategoryMutationOptions = Apollo.BaseMutationOptions<AdminUpdateCategoryMutation, AdminUpdateCategoryMutationVariables>;
export const AdminDeleteCategoryDocument = gql`
    mutation AdminDeleteCategory($id: Int!) {
  delete_categories_by_pk(id: $id) {
    id
  }
}
    `;
export type AdminDeleteCategoryMutationFn = Apollo.MutationFunction<AdminDeleteCategoryMutation, AdminDeleteCategoryMutationVariables>;

/**
 * __useAdminDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useAdminDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteCategoryMutation, { data, loading, error }] = useAdminDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AdminDeleteCategoryMutation, AdminDeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminDeleteCategoryMutation, AdminDeleteCategoryMutationVariables>(AdminDeleteCategoryDocument, options);
      }
export type AdminDeleteCategoryMutationHookResult = ReturnType<typeof useAdminDeleteCategoryMutation>;
export type AdminDeleteCategoryMutationResult = Apollo.MutationResult<AdminDeleteCategoryMutation>;
export type AdminDeleteCategoryMutationOptions = Apollo.BaseMutationOptions<AdminDeleteCategoryMutation, AdminDeleteCategoryMutationVariables>;
export const AdminChangePasswordDocument = gql`
    mutation AdminChangePassword($user_id: Int!, $current_password: String, $new_password: String!) {
  change_password(
    user_id: $user_id
    current_password: $current_password
    new_password: $new_password
  ) {
    message
    user_id
    username
  }
}
    `;
export type AdminChangePasswordMutationFn = Apollo.MutationFunction<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>;

/**
 * __useAdminChangePasswordMutation__
 *
 * To run a mutation, you first call `useAdminChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminChangePasswordMutation, { data, loading, error }] = useAdminChangePasswordMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      current_password: // value for 'current_password'
 *      new_password: // value for 'new_password'
 *   },
 * });
 */
export function useAdminChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>(AdminChangePasswordDocument, options);
      }
export type AdminChangePasswordMutationHookResult = ReturnType<typeof useAdminChangePasswordMutation>;
export type AdminChangePasswordMutationResult = Apollo.MutationResult<AdminChangePasswordMutation>;
export type AdminChangePasswordMutationOptions = Apollo.BaseMutationOptions<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>;
export const AdminGetUserDocument = gql`
    query AdminGetUser($id: Int!) {
  users_by_pk(id: $id) {
    id
    username
    password
  }
}
    `;

/**
 * __useAdminGetUserQuery__
 *
 * To run a query within a React component, call `useAdminGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminGetUserQuery(baseOptions: Apollo.QueryHookOptions<AdminGetUserQuery, AdminGetUserQueryVariables> & ({ variables: AdminGetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminGetUserQuery, AdminGetUserQueryVariables>(AdminGetUserDocument, options);
      }
export function useAdminGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminGetUserQuery, AdminGetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminGetUserQuery, AdminGetUserQueryVariables>(AdminGetUserDocument, options);
        }
export function useAdminGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AdminGetUserQuery, AdminGetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminGetUserQuery, AdminGetUserQueryVariables>(AdminGetUserDocument, options);
        }
export type AdminGetUserQueryHookResult = ReturnType<typeof useAdminGetUserQuery>;
export type AdminGetUserLazyQueryHookResult = ReturnType<typeof useAdminGetUserLazyQuery>;
export type AdminGetUserSuspenseQueryHookResult = ReturnType<typeof useAdminGetUserSuspenseQuery>;
export type AdminGetUserQueryResult = Apollo.QueryResult<AdminGetUserQuery, AdminGetUserQueryVariables>;