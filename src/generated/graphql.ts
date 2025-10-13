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
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** Category type: post or product */
  type: Scalars['String']['output'];
};


/** Categories for posts and products */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** Categories for posts and products */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
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
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
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
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
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
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
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
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "product_images" */
  delete_product_images?: Maybe<Product_Images_Mutation_Response>;
  /** delete single row from the table: "product_images" */
  delete_product_images_by_pk?: Maybe<Product_Images>;
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
  /** insert data into the table: "product_images" */
  insert_product_images?: Maybe<Product_Images_Mutation_Response>;
  /** insert a single row into the table: "product_images" */
  insert_product_images_one?: Maybe<Product_Images>;
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
  /** update data of the table: "product_images" */
  update_product_images?: Maybe<Product_Images_Mutation_Response>;
  /** update single row of the table: "product_images" */
  update_product_images_by_pk?: Maybe<Product_Images>;
  /** update multiples rows of table: "product_images" */
  update_product_images_many?: Maybe<Array<Maybe<Product_Images_Mutation_Response>>>;
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
export type Mutation_RootDelete_Product_ImagesArgs = {
  where: Product_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Images_By_PkArgs = {
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
export type Mutation_RootInsert_Product_ImagesArgs = {
  objects: Array<Product_Images_Insert_Input>;
  on_conflict?: InputMaybe<Product_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Images_OneArgs = {
  object: Product_Images_Insert_Input;
  on_conflict?: InputMaybe<Product_Images_On_Conflict>;
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
export type Mutation_RootUpdate_Product_ImagesArgs = {
  _inc?: InputMaybe<Product_Images_Inc_Input>;
  _set?: InputMaybe<Product_Images_Set_Input>;
  where: Product_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Images_By_PkArgs = {
  _inc?: InputMaybe<Product_Images_Inc_Input>;
  _set?: InputMaybe<Product_Images_Set_Input>;
  pk_columns: Product_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Images_ManyArgs = {
  updates: Array<Product_Images_Updates>;
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

export type Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>;
};

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  /** Post content */
  body?: InputMaybe<Order_By>;
  /** Creation timestamp */
  created_at?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Post status: draft or published */
  status?: InputMaybe<Order_By>;
  /** Post title */
  title?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  /** Post content */
  body?: InputMaybe<Order_By>;
  /** Creation timestamp */
  created_at?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Post status: draft or published */
  status?: InputMaybe<Order_By>;
  /** Post title */
  title?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  /** Primary key */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to users table */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_images" */
export type Product_Images = {
  __typename?: 'product_images';
  alt_text?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  image_url: Scalars['String']['output'];
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  product: Products;
  product_id: Scalars['Int']['output'];
  sort_order?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "product_images" */
export type Product_Images_Aggregate = {
  __typename?: 'product_images_aggregate';
  aggregate?: Maybe<Product_Images_Aggregate_Fields>;
  nodes: Array<Product_Images>;
};

export type Product_Images_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Product_Images_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Product_Images_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Product_Images_Aggregate_Bool_Exp_Count>;
};

export type Product_Images_Aggregate_Bool_Exp_Bool_And = {
  arguments: Product_Images_Select_Column_Product_Images_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Images_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Images_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Product_Images_Select_Column_Product_Images_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Images_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Images_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Images_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_images" */
export type Product_Images_Aggregate_Fields = {
  __typename?: 'product_images_aggregate_fields';
  avg?: Maybe<Product_Images_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Images_Max_Fields>;
  min?: Maybe<Product_Images_Min_Fields>;
  stddev?: Maybe<Product_Images_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Images_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Images_Sum_Fields>;
  var_pop?: Maybe<Product_Images_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Images_Var_Samp_Fields>;
  variance?: Maybe<Product_Images_Variance_Fields>;
};


/** aggregate fields of "product_images" */
export type Product_Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_images" */
export type Product_Images_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Images_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Images_Max_Order_By>;
  min?: InputMaybe<Product_Images_Min_Order_By>;
  stddev?: InputMaybe<Product_Images_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Images_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Images_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Images_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Images_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Images_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_images" */
export type Product_Images_Arr_Rel_Insert_Input = {
  data: Array<Product_Images_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Images_Avg_Fields = {
  __typename?: 'product_images_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_images" */
export type Product_Images_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_images". All fields are combined with a logical 'AND'. */
export type Product_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Images_Bool_Exp>>;
  _not?: InputMaybe<Product_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Images_Bool_Exp>>;
  alt_text?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_images" */
export enum Product_Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductImagesPkey = 'product_images_pkey'
}

/** input type for incrementing numeric columns in table "product_images" */
export type Product_Images_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_images" */
export type Product_Images_Insert_Input = {
  alt_text?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Product_Images_Max_Fields = {
  __typename?: 'product_images_max_fields';
  alt_text?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  sort_order?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "product_images" */
export type Product_Images_Max_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Images_Min_Fields = {
  __typename?: 'product_images_min_fields';
  alt_text?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  sort_order?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "product_images" */
export type Product_Images_Min_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_images" */
export type Product_Images_Mutation_Response = {
  __typename?: 'product_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Images>;
};

/** on_conflict condition type for table "product_images" */
export type Product_Images_On_Conflict = {
  constraint: Product_Images_Constraint;
  update_columns?: Array<Product_Images_Update_Column>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "product_images". */
export type Product_Images_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_images */
export type Product_Images_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "product_images" */
export enum Product_Images_Select_Column {
  /** column name */
  AltText = 'alt_text',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "product_images_aggregate_bool_exp_bool_and_arguments_columns" columns of table "product_images" */
export enum Product_Images_Select_Column_Product_Images_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPrimary = 'is_primary'
}

/** select "product_images_aggregate_bool_exp_bool_or_arguments_columns" columns of table "product_images" */
export enum Product_Images_Select_Column_Product_Images_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPrimary = 'is_primary'
}

/** input type for updating data in table "product_images" */
export type Product_Images_Set_Input = {
  alt_text?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Product_Images_Stddev_Fields = {
  __typename?: 'product_images_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_images" */
export type Product_Images_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Images_Stddev_Pop_Fields = {
  __typename?: 'product_images_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_images" */
export type Product_Images_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Images_Stddev_Samp_Fields = {
  __typename?: 'product_images_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_images" */
export type Product_Images_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_images" */
export type Product_Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Images_Stream_Cursor_Value_Input = {
  alt_text?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Product_Images_Sum_Fields = {
  __typename?: 'product_images_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  sort_order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_images" */
export type Product_Images_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** update columns of table "product_images" */
export enum Product_Images_Update_Column {
  /** column name */
  AltText = 'alt_text',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Product_Images_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Images_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Images_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Images_Var_Pop_Fields = {
  __typename?: 'product_images_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_images" */
export type Product_Images_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Images_Var_Samp_Fields = {
  __typename?: 'product_images_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_images" */
export type Product_Images_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Images_Variance_Fields = {
  __typename?: 'product_images_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_images" */
export type Product_Images_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
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
  /** Product name */
  name: Scalars['String']['output'];
  /** Product price */
  price: Scalars['numeric']['output'];
  /** An array relationship */
  product_images: Array<Product_Images>;
  /** An aggregate relationship */
  product_images_aggregate: Product_Images_Aggregate;
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


/** Products table for e-commerce */
export type ProductsProduct_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};


/** Products table for e-commerce */
export type ProductsProduct_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
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

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_images?: InputMaybe<Product_Images_Bool_Exp>;
  product_images_aggregate?: InputMaybe<Product_Images_Aggregate_Bool_Exp>;
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
  /** Product name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product price */
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_images?: InputMaybe<Product_Images_Arr_Rel_Insert_Input>;
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

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Creation timestamp */
  created_at?: InputMaybe<Order_By>;
  /** Product description */
  description?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product name */
  name?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Unique URL slug */
  slug?: InputMaybe<Order_By>;
  /** Product status: active or inactive */
  status?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Creation timestamp */
  created_at?: InputMaybe<Order_By>;
  /** Product description */
  description?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product name */
  name?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Unique URL slug */
  slug?: InputMaybe<Order_By>;
  /** Product status: active or inactive */
  status?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
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
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_images_aggregate?: InputMaybe<Product_Images_Aggregate_Order_By>;
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

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
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

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  /** Reference to categories table */
  category_id?: InputMaybe<Order_By>;
  /** Primary key */
  id?: InputMaybe<Order_By>;
  /** Product price */
  price?: InputMaybe<Order_By>;
  /** Stock quantity */
  stock?: InputMaybe<Order_By>;
  /** Reference to users table */
  user_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  product_images: Array<Product_Images>;
  /** An aggregate relationship */
  product_images_aggregate: Product_Images_Aggregate;
  /** fetch data from the table: "product_images" using primary key columns */
  product_images_by_pk?: Maybe<Product_Images>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
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


export type Query_RootProduct_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};


export type Query_RootProduct_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};


export type Query_RootProduct_Images_By_PkArgs = {
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
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** An array relationship */
  product_images: Array<Product_Images>;
  /** An aggregate relationship */
  product_images_aggregate: Product_Images_Aggregate;
  /** fetch data from the table: "product_images" using primary key columns */
  product_images_by_pk?: Maybe<Product_Images>;
  /** fetch data from the table in a streaming manner: "product_images" */
  product_images_stream: Array<Product_Images>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
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


export type Subscription_RootProduct_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};


export type Subscription_RootProduct_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Images_Order_By>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
};


export type Subscription_RootProduct_Images_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProduct_Images_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Images_Bool_Exp>;
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
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
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** User role: admin or user */
  role?: Maybe<Scalars['String']['output']>;
  /** Unique username for login */
  username: Scalars['String']['output'];
};


/** Users table for admin system */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** Users table for admin system */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** Users table for admin system */
export type UsersProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** Users table for admin system */
export type UsersProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
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
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
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
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
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
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
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


export type AdminProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, user: { __typename?: 'users', username: string }, category?: { __typename?: 'categories', name: string } | null, product_images: Array<{ __typename?: 'product_images', id: number, image_url: string, is_primary?: boolean | null }> }> };

export type AdminCreateProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['numeric']['input'];
  stock: Scalars['Int']['input'];
  category_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
}>;


export type AdminCreateProductMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null } | null };

export type AdminUpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminUpdateProductMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null } | null };

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
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
}>;


export type AdminChangePasswordMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: number, username: string } | null };

export type AdminGetUserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdminGetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: number, username: string, password: string } | null };

export type GetProductWithImagesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetProductWithImagesQuery = { __typename?: 'query_root', products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, category?: { __typename?: 'categories', id: number, name: string } | null, user: { __typename?: 'users', id: number, username: string }, product_images: Array<{ __typename?: 'product_images', id: number, alt_text?: string | null, sort_order?: number | null, is_primary?: boolean | null }> } | null };

export type GetProductsWithImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsWithImagesQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, category?: { __typename?: 'categories', id: number, name: string } | null, user: { __typename?: 'users', id: number, username: string }, product_images: Array<{ __typename?: 'product_images', id: number, image_url: string, alt_text?: string | null, sort_order?: number | null, is_primary?: boolean | null }> }> };

export type GetProductWithImagesForEditQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetProductWithImagesForEditQuery = { __typename?: 'query_root', products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, category?: { __typename?: 'categories', id: number, name: string } | null, user: { __typename?: 'users', id: number, username: string }, product_images: Array<{ __typename?: 'product_images', id: number, image_url: string, alt_text?: string | null, sort_order?: number | null, is_primary?: boolean | null }> } | null };

export type InsertProductImageMutationVariables = Exact<{
  object: Product_Images_Insert_Input;
}>;


export type InsertProductImageMutation = { __typename?: 'mutation_root', insert_product_images_one?: { __typename?: 'product_images', id: number, product_id: number, image_url: string, alt_text?: string | null, sort_order?: number | null, is_primary?: boolean | null } | null };

export type UpdateProductImageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  updates: Product_Images_Set_Input;
}>;


export type UpdateProductImageMutation = { __typename?: 'mutation_root', update_product_images_by_pk?: { __typename?: 'product_images', id: number, product_id: number, image_url: string, alt_text?: string | null, sort_order?: number | null, is_primary?: boolean | null } | null };

export type DeleteProductImageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductImageMutation = { __typename?: 'mutation_root', delete_product_images_by_pk?: { __typename?: 'product_images', id: number, product_id: number } | null };

export type DeleteProductImagesMutationVariables = Exact<{
  product_id: Scalars['Int']['input'];
}>;


export type DeleteProductImagesMutation = { __typename?: 'mutation_root', delete_product_images?: { __typename?: 'product_images_mutation_response', affected_rows: number } | null };

export type CategoriesQueryVariables = Exact<{
  where?: InputMaybe<Categories_Bool_Exp>;
}>;


export type CategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null, products: Array<{ __typename?: 'products', id: number, name: string, slug: string, price: any, stock?: number | null, status?: string | null }> }> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CategoryQuery = { __typename?: 'query_root', categories_by_pk?: { __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null, products: Array<{ __typename?: 'products', id: number, name: string, slug: string, price: any, stock?: number | null, status?: string | null }> } | null };

export type CategoriesByTypeQueryVariables = Exact<{
  type: Scalars['String']['input'];
}>;


export type CategoriesByTypeQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null, products: Array<{ __typename?: 'products', id: number, name: string, slug: string, price: any, stock?: number | null, status?: string | null }> }> };

export type CreateCategoryMutationVariables = Exact<{
  object: Categories_Insert_Input;
}>;


export type CreateCategoryMutation = { __typename?: 'mutation_root', insert_categories_one?: { __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null } | null };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  set: Categories_Set_Input;
}>;


export type UpdateCategoryMutation = { __typename?: 'mutation_root', update_categories_by_pk?: { __typename?: 'categories', id: number, name: string, type: string, created_at?: any | null } | null };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'mutation_root', delete_categories_by_pk?: { __typename?: 'categories', id: number } | null };

export type PostsQueryVariables = Exact<{
  where?: InputMaybe<Posts_Bool_Exp>;
}>;


export type PostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null } }> };

export type PostQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PostQuery = { __typename?: 'query_root', posts_by_pk?: { __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null } } | null };

export type PostsByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
}>;


export type PostsByStatusQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null } }> };

export type PostsByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type PostsByUserQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null } }> };

export type CreatePostMutationVariables = Exact<{
  object: Posts_Insert_Input;
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', insert_posts_one?: { __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null } | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  set: Posts_Set_Input;
}>;


export type UpdatePostMutation = { __typename?: 'mutation_root', update_posts_by_pk?: { __typename?: 'posts', id: number, title: string, body: string, user_id: number, status?: string | null, created_at?: any | null } | null };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', delete_posts_by_pk?: { __typename?: 'posts', id: number } | null };

export type ProductsQueryVariables = Exact<{
  where?: InputMaybe<Products_Bool_Exp>;
}>;


export type ProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null }> };

export type ProductQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductQuery = { __typename?: 'query_root', products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null } | null };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null }> };

export type ProductsByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
}>;


export type ProductsByStatusQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null }> };

export type ProductsByCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type ProductsByCategoryQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null }> };

export type ProductsByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type ProductsByUserQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null, user: { __typename?: 'users', id: number, username: string, role?: string | null }, category?: { __typename?: 'categories', id: number, name: string, type: string } | null }> };

export type CreateProductMutationVariables = Exact<{
  object: Products_Insert_Input;
}>;


export type CreateProductMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null } | null };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  set: Products_Set_Input;
}>;


export type UpdateProductMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, category_id?: number | null, user_id: number, status?: string | null, created_at?: any | null } | null };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'mutation_root', delete_products_by_pk?: { __typename?: 'products', id: number } | null };

export type UpdateStockMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  stock: Scalars['Int']['input'];
}>;


export type UpdateStockMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: number, name: string, stock?: number | null } | null };

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
}>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, username: string, role?: string | null, created_at?: any | null, posts: Array<{ __typename?: 'posts', id: number, title: string, status?: string | null }>, products: Array<{ __typename?: 'products', id: number, name: string, status?: string | null }> }> };

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: number, username: string, role?: string | null, created_at?: any | null, posts: Array<{ __typename?: 'posts', id: number, title: string, status?: string | null }>, products: Array<{ __typename?: 'products', id: number, name: string, status?: string | null }> } | null };

export type GetProductsQueryVariables = Exact<{
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, category?: { __typename?: 'categories', id: number, name: string, type: string } | null, product_images: Array<{ __typename?: 'product_images', id: number, image_url: string, alt_text?: string | null, is_primary?: boolean | null }> }> };

export type GetProductsByCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsByCategoryQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: number, name: string, slug: string, description?: string | null, price: any, stock?: number | null, status?: string | null, created_at?: any | null, category?: { __typename?: 'categories', id: number, name: string, type: string } | null, product_images: Array<{ __typename?: 'product_images', id: number, image_url: string, alt_text?: string | null, is_primary?: boolean | null }> }> };

export type GetCategoriesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, type: string }> };


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
    status
    created_at
    user {
      username
    }
    category {
      name
    }
    product_images(order_by: {is_primary: desc, sort_order: asc}, limit: 1) {
      id
      image_url
      is_primary
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
    mutation AdminCreateProduct($name: String!, $slug: String!, $description: String!, $price: numeric!, $stock: Int!, $category_id: Int!, $user_id: Int!, $status: String!) {
  insert_products_one(
    object: {name: $name, slug: $slug, description: $description, price: $price, stock: $stock, category_id: $category_id, user_id: $user_id, status: $status}
  ) {
    id
    name
    slug
    description
    price
    stock
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
    mutation AdminUpdateProduct($id: Int!, $name: String, $slug: String, $description: String, $price: numeric, $stock: Int, $category_id: Int, $status: String) {
  update_products_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, slug: $slug, description: $description, price: $price, stock: $stock, category_id: $category_id, status: $status}
  ) {
    id
    name
    slug
    description
    price
    stock
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
    mutation AdminChangePassword($id: Int!, $password: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {password: $password}) {
    id
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
 *      id: // value for 'id'
 *      password: // value for 'password'
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
export const GetProductWithImagesDocument = gql`
    query GetProductWithImages($id: Int!) {
  products_by_pk(id: $id) {
    id
    name
    slug
    description
    price
    stock
    status
    created_at
    category {
      id
      name
    }
    user {
      id
      username
    }
    product_images(order_by: {sort_order: asc}) {
      id
      alt_text
      sort_order
      is_primary
    }
  }
}
    `;

/**
 * __useGetProductWithImagesQuery__
 *
 * To run a query within a React component, call `useGetProductWithImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductWithImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductWithImagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductWithImagesQuery(baseOptions: Apollo.QueryHookOptions<GetProductWithImagesQuery, GetProductWithImagesQueryVariables> & ({ variables: GetProductWithImagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>(GetProductWithImagesDocument, options);
      }
export function useGetProductWithImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>(GetProductWithImagesDocument, options);
        }
export function useGetProductWithImagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>(GetProductWithImagesDocument, options);
        }
export type GetProductWithImagesQueryHookResult = ReturnType<typeof useGetProductWithImagesQuery>;
export type GetProductWithImagesLazyQueryHookResult = ReturnType<typeof useGetProductWithImagesLazyQuery>;
export type GetProductWithImagesSuspenseQueryHookResult = ReturnType<typeof useGetProductWithImagesSuspenseQuery>;
export type GetProductWithImagesQueryResult = Apollo.QueryResult<GetProductWithImagesQuery, GetProductWithImagesQueryVariables>;
export const GetProductsWithImagesDocument = gql`
    query GetProductsWithImages {
  products(order_by: {created_at: desc}) {
    id
    name
    slug
    description
    price
    stock
    status
    created_at
    category {
      id
      name
    }
    user {
      id
      username
    }
    product_images(order_by: {sort_order: asc}) {
      id
      image_url
      alt_text
      sort_order
      is_primary
    }
  }
}
    `;

/**
 * __useGetProductsWithImagesQuery__
 *
 * To run a query within a React component, call `useGetProductsWithImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsWithImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsWithImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsWithImagesQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>(GetProductsWithImagesDocument, options);
      }
export function useGetProductsWithImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>(GetProductsWithImagesDocument, options);
        }
export function useGetProductsWithImagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>(GetProductsWithImagesDocument, options);
        }
export type GetProductsWithImagesQueryHookResult = ReturnType<typeof useGetProductsWithImagesQuery>;
export type GetProductsWithImagesLazyQueryHookResult = ReturnType<typeof useGetProductsWithImagesLazyQuery>;
export type GetProductsWithImagesSuspenseQueryHookResult = ReturnType<typeof useGetProductsWithImagesSuspenseQuery>;
export type GetProductsWithImagesQueryResult = Apollo.QueryResult<GetProductsWithImagesQuery, GetProductsWithImagesQueryVariables>;
export const GetProductWithImagesForEditDocument = gql`
    query GetProductWithImagesForEdit($id: Int!) {
  products_by_pk(id: $id) {
    id
    name
    slug
    description
    price
    stock
    status
    created_at
    category {
      id
      name
    }
    user {
      id
      username
    }
    product_images(order_by: {sort_order: asc}) {
      id
      image_url
      alt_text
      sort_order
      is_primary
    }
  }
}
    `;

/**
 * __useGetProductWithImagesForEditQuery__
 *
 * To run a query within a React component, call `useGetProductWithImagesForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductWithImagesForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductWithImagesForEditQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductWithImagesForEditQuery(baseOptions: Apollo.QueryHookOptions<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables> & ({ variables: GetProductWithImagesForEditQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>(GetProductWithImagesForEditDocument, options);
      }
export function useGetProductWithImagesForEditLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>(GetProductWithImagesForEditDocument, options);
        }
export function useGetProductWithImagesForEditSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>(GetProductWithImagesForEditDocument, options);
        }
export type GetProductWithImagesForEditQueryHookResult = ReturnType<typeof useGetProductWithImagesForEditQuery>;
export type GetProductWithImagesForEditLazyQueryHookResult = ReturnType<typeof useGetProductWithImagesForEditLazyQuery>;
export type GetProductWithImagesForEditSuspenseQueryHookResult = ReturnType<typeof useGetProductWithImagesForEditSuspenseQuery>;
export type GetProductWithImagesForEditQueryResult = Apollo.QueryResult<GetProductWithImagesForEditQuery, GetProductWithImagesForEditQueryVariables>;
export const InsertProductImageDocument = gql`
    mutation InsertProductImage($object: product_images_insert_input!) {
  insert_product_images_one(object: $object) {
    id
    product_id
    image_url
    alt_text
    sort_order
    is_primary
  }
}
    `;
export type InsertProductImageMutationFn = Apollo.MutationFunction<InsertProductImageMutation, InsertProductImageMutationVariables>;

/**
 * __useInsertProductImageMutation__
 *
 * To run a mutation, you first call `useInsertProductImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductImageMutation, { data, loading, error }] = useInsertProductImageMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertProductImageMutation(baseOptions?: Apollo.MutationHookOptions<InsertProductImageMutation, InsertProductImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertProductImageMutation, InsertProductImageMutationVariables>(InsertProductImageDocument, options);
      }
export type InsertProductImageMutationHookResult = ReturnType<typeof useInsertProductImageMutation>;
export type InsertProductImageMutationResult = Apollo.MutationResult<InsertProductImageMutation>;
export type InsertProductImageMutationOptions = Apollo.BaseMutationOptions<InsertProductImageMutation, InsertProductImageMutationVariables>;
export const UpdateProductImageDocument = gql`
    mutation UpdateProductImage($id: Int!, $updates: product_images_set_input!) {
  update_product_images_by_pk(pk_columns: {id: $id}, _set: $updates) {
    id
    product_id
    image_url
    alt_text
    sort_order
    is_primary
  }
}
    `;
export type UpdateProductImageMutationFn = Apollo.MutationFunction<UpdateProductImageMutation, UpdateProductImageMutationVariables>;

/**
 * __useUpdateProductImageMutation__
 *
 * To run a mutation, you first call `useUpdateProductImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductImageMutation, { data, loading, error }] = useUpdateProductImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateProductImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductImageMutation, UpdateProductImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductImageMutation, UpdateProductImageMutationVariables>(UpdateProductImageDocument, options);
      }
export type UpdateProductImageMutationHookResult = ReturnType<typeof useUpdateProductImageMutation>;
export type UpdateProductImageMutationResult = Apollo.MutationResult<UpdateProductImageMutation>;
export type UpdateProductImageMutationOptions = Apollo.BaseMutationOptions<UpdateProductImageMutation, UpdateProductImageMutationVariables>;
export const DeleteProductImageDocument = gql`
    mutation DeleteProductImage($id: Int!) {
  delete_product_images_by_pk(id: $id) {
    id
    product_id
  }
}
    `;
export type DeleteProductImageMutationFn = Apollo.MutationFunction<DeleteProductImageMutation, DeleteProductImageMutationVariables>;

/**
 * __useDeleteProductImageMutation__
 *
 * To run a mutation, you first call `useDeleteProductImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductImageMutation, { data, loading, error }] = useDeleteProductImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductImageMutation, DeleteProductImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductImageMutation, DeleteProductImageMutationVariables>(DeleteProductImageDocument, options);
      }
export type DeleteProductImageMutationHookResult = ReturnType<typeof useDeleteProductImageMutation>;
export type DeleteProductImageMutationResult = Apollo.MutationResult<DeleteProductImageMutation>;
export type DeleteProductImageMutationOptions = Apollo.BaseMutationOptions<DeleteProductImageMutation, DeleteProductImageMutationVariables>;
export const DeleteProductImagesDocument = gql`
    mutation DeleteProductImages($product_id: Int!) {
  delete_product_images(where: {product_id: {_eq: $product_id}}) {
    affected_rows
  }
}
    `;
export type DeleteProductImagesMutationFn = Apollo.MutationFunction<DeleteProductImagesMutation, DeleteProductImagesMutationVariables>;

/**
 * __useDeleteProductImagesMutation__
 *
 * To run a mutation, you first call `useDeleteProductImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductImagesMutation, { data, loading, error }] = useDeleteProductImagesMutation({
 *   variables: {
 *      product_id: // value for 'product_id'
 *   },
 * });
 */
export function useDeleteProductImagesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductImagesMutation, DeleteProductImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductImagesMutation, DeleteProductImagesMutationVariables>(DeleteProductImagesDocument, options);
      }
export type DeleteProductImagesMutationHookResult = ReturnType<typeof useDeleteProductImagesMutation>;
export type DeleteProductImagesMutationResult = Apollo.MutationResult<DeleteProductImagesMutation>;
export type DeleteProductImagesMutationOptions = Apollo.BaseMutationOptions<DeleteProductImagesMutation, DeleteProductImagesMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($where: categories_bool_exp = {}) {
  categories(where: $where) {
    id
    name
    type
    created_at
    products {
      id
      name
      slug
      price
      stock
      status
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($id: Int!) {
  categories_by_pk(id: $id) {
    id
    name
    type
    created_at
    products {
      id
      name
      slug
      price
      stock
      status
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables> & ({ variables: CategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const CategoriesByTypeDocument = gql`
    query CategoriesByType($type: String!) {
  categories(where: {type: {_eq: $type}}) {
    id
    name
    type
    created_at
    products {
      id
      name
      slug
      price
      stock
      status
    }
  }
}
    `;

/**
 * __useCategoriesByTypeQuery__
 *
 * To run a query within a React component, call `useCategoriesByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCategoriesByTypeQuery(baseOptions: Apollo.QueryHookOptions<CategoriesByTypeQuery, CategoriesByTypeQueryVariables> & ({ variables: CategoriesByTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>(CategoriesByTypeDocument, options);
      }
export function useCategoriesByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>(CategoriesByTypeDocument, options);
        }
export function useCategoriesByTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>(CategoriesByTypeDocument, options);
        }
export type CategoriesByTypeQueryHookResult = ReturnType<typeof useCategoriesByTypeQuery>;
export type CategoriesByTypeLazyQueryHookResult = ReturnType<typeof useCategoriesByTypeLazyQuery>;
export type CategoriesByTypeSuspenseQueryHookResult = ReturnType<typeof useCategoriesByTypeSuspenseQuery>;
export type CategoriesByTypeQueryResult = Apollo.QueryResult<CategoriesByTypeQuery, CategoriesByTypeQueryVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($object: categories_insert_input!) {
  insert_categories_one(object: $object) {
    id
    name
    type
    created_at
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $set: categories_set_input!) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: $set) {
    id
    name
    type
    created_at
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  delete_categories_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const PostsDocument = gql`
    query Posts($where: posts_bool_exp = {}) {
  posts(where: $where) {
    id
    title
    body
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostDocument = gql`
    query Post($id: Int!) {
  posts_by_pk(id: $id) {
    id
    title
    body
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export function usePostSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostSuspenseQueryHookResult = ReturnType<typeof usePostSuspenseQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsByStatusDocument = gql`
    query PostsByStatus($status: String!) {
  posts(where: {status: {_eq: $status}}) {
    id
    title
    body
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
  }
}
    `;

/**
 * __usePostsByStatusQuery__
 *
 * To run a query within a React component, call `usePostsByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function usePostsByStatusQuery(baseOptions: Apollo.QueryHookOptions<PostsByStatusQuery, PostsByStatusQueryVariables> & ({ variables: PostsByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsByStatusQuery, PostsByStatusQueryVariables>(PostsByStatusDocument, options);
      }
export function usePostsByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByStatusQuery, PostsByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsByStatusQuery, PostsByStatusQueryVariables>(PostsByStatusDocument, options);
        }
export function usePostsByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostsByStatusQuery, PostsByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsByStatusQuery, PostsByStatusQueryVariables>(PostsByStatusDocument, options);
        }
export type PostsByStatusQueryHookResult = ReturnType<typeof usePostsByStatusQuery>;
export type PostsByStatusLazyQueryHookResult = ReturnType<typeof usePostsByStatusLazyQuery>;
export type PostsByStatusSuspenseQueryHookResult = ReturnType<typeof usePostsByStatusSuspenseQuery>;
export type PostsByStatusQueryResult = Apollo.QueryResult<PostsByStatusQuery, PostsByStatusQueryVariables>;
export const PostsByUserDocument = gql`
    query PostsByUser($userId: Int!) {
  posts(where: {user_id: {_eq: $userId}}) {
    id
    title
    body
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
  }
}
    `;

/**
 * __usePostsByUserQuery__
 *
 * To run a query within a React component, call `usePostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function usePostsByUserQuery(baseOptions: Apollo.QueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables> & ({ variables: PostsByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
      }
export function usePostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
        }
export function usePostsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
        }
export type PostsByUserQueryHookResult = ReturnType<typeof usePostsByUserQuery>;
export type PostsByUserLazyQueryHookResult = ReturnType<typeof usePostsByUserLazyQuery>;
export type PostsByUserSuspenseQueryHookResult = ReturnType<typeof usePostsByUserSuspenseQuery>;
export type PostsByUserQueryResult = Apollo.QueryResult<PostsByUserQuery, PostsByUserQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($object: posts_insert_input!) {
  insert_posts_one(object: $object) {
    id
    title
    body
    user_id
    status
    created_at
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: Int!, $set: posts_set_input!) {
  update_posts_by_pk(pk_columns: {id: $id}, _set: $set) {
    id
    title
    body
    user_id
    status
    created_at
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  delete_posts_by_pk(id: $id) {
    id
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const ProductsDocument = gql`
    query Products($where: products_bool_exp = {}) {
  products(where: $where) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = gql`
    query Product($id: Int!) {
  products_by_pk(id: $id) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> & ({ variables: ProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export function useProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  products(where: {slug: {_eq: $slug}}) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables> & ({ variables: ProductBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
      }
export function useProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export function useProductBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export type ProductBySlugQueryHookResult = ReturnType<typeof useProductBySlugQuery>;
export type ProductBySlugLazyQueryHookResult = ReturnType<typeof useProductBySlugLazyQuery>;
export type ProductBySlugSuspenseQueryHookResult = ReturnType<typeof useProductBySlugSuspenseQuery>;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductsByStatusDocument = gql`
    query ProductsByStatus($status: String!) {
  products(where: {status: {_eq: $status}}) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductsByStatusQuery__
 *
 * To run a query within a React component, call `useProductsByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useProductsByStatusQuery(baseOptions: Apollo.QueryHookOptions<ProductsByStatusQuery, ProductsByStatusQueryVariables> & ({ variables: ProductsByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByStatusQuery, ProductsByStatusQueryVariables>(ProductsByStatusDocument, options);
      }
export function useProductsByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByStatusQuery, ProductsByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByStatusQuery, ProductsByStatusQueryVariables>(ProductsByStatusDocument, options);
        }
export function useProductsByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsByStatusQuery, ProductsByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsByStatusQuery, ProductsByStatusQueryVariables>(ProductsByStatusDocument, options);
        }
export type ProductsByStatusQueryHookResult = ReturnType<typeof useProductsByStatusQuery>;
export type ProductsByStatusLazyQueryHookResult = ReturnType<typeof useProductsByStatusLazyQuery>;
export type ProductsByStatusSuspenseQueryHookResult = ReturnType<typeof useProductsByStatusSuspenseQuery>;
export type ProductsByStatusQueryResult = Apollo.QueryResult<ProductsByStatusQuery, ProductsByStatusQueryVariables>;
export const ProductsByCategoryDocument = gql`
    query ProductsByCategory($categoryId: Int!) {
  products(where: {category_id: {_eq: $categoryId}}) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductsByCategoryQuery__
 *
 * To run a query within a React component, call `useProductsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useProductsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables> & ({ variables: ProductsByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
      }
export function useProductsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
        }
export function useProductsByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>(ProductsByCategoryDocument, options);
        }
export type ProductsByCategoryQueryHookResult = ReturnType<typeof useProductsByCategoryQuery>;
export type ProductsByCategoryLazyQueryHookResult = ReturnType<typeof useProductsByCategoryLazyQuery>;
export type ProductsByCategorySuspenseQueryHookResult = ReturnType<typeof useProductsByCategorySuspenseQuery>;
export type ProductsByCategoryQueryResult = Apollo.QueryResult<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>;
export const ProductsByUserDocument = gql`
    query ProductsByUser($userId: Int!) {
  products(where: {user_id: {_eq: $userId}}) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
    user {
      id
      username
      role
    }
    category {
      id
      name
      type
    }
  }
}
    `;

/**
 * __useProductsByUserQuery__
 *
 * To run a query within a React component, call `useProductsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useProductsByUserQuery(baseOptions: Apollo.QueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables> & ({ variables: ProductsByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
      }
export function useProductsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
        }
export function useProductsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsByUserQuery, ProductsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsByUserQuery, ProductsByUserQueryVariables>(ProductsByUserDocument, options);
        }
export type ProductsByUserQueryHookResult = ReturnType<typeof useProductsByUserQuery>;
export type ProductsByUserLazyQueryHookResult = ReturnType<typeof useProductsByUserLazyQuery>;
export type ProductsByUserSuspenseQueryHookResult = ReturnType<typeof useProductsByUserSuspenseQuery>;
export type ProductsByUserQueryResult = Apollo.QueryResult<ProductsByUserQuery, ProductsByUserQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($object: products_insert_input!) {
  insert_products_one(object: $object) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $set: products_set_input!) {
  update_products_by_pk(pk_columns: {id: $id}, _set: $set) {
    id
    name
    slug
    description
    price
    stock
    category_id
    user_id
    status
    created_at
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  delete_products_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const UpdateStockDocument = gql`
    mutation UpdateStock($id: Int!, $stock: Int!) {
  update_products_by_pk(pk_columns: {id: $id}, _set: {stock: $stock}) {
    id
    name
    stock
  }
}
    `;
export type UpdateStockMutationFn = Apollo.MutationFunction<UpdateStockMutation, UpdateStockMutationVariables>;

/**
 * __useUpdateStockMutation__
 *
 * To run a mutation, you first call `useUpdateStockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStockMutation, { data, loading, error }] = useUpdateStockMutation({
 *   variables: {
 *      id: // value for 'id'
 *      stock: // value for 'stock'
 *   },
 * });
 */
export function useUpdateStockMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStockMutation, UpdateStockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStockMutation, UpdateStockMutationVariables>(UpdateStockDocument, options);
      }
export type UpdateStockMutationHookResult = ReturnType<typeof useUpdateStockMutation>;
export type UpdateStockMutationResult = Apollo.MutationResult<UpdateStockMutation>;
export type UpdateStockMutationOptions = Apollo.BaseMutationOptions<UpdateStockMutation, UpdateStockMutationVariables>;
export const UsersDocument = gql`
    query Users($where: users_bool_exp = {}) {
  users(where: $where) {
    id
    username
    role
    created_at
    posts {
      id
      title
      status
    }
    products {
      id
      name
      status
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export function useUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  users_by_pk(id: $id) {
    id
    username
    role
    created_at
    posts {
      id
      title
      status
    }
    products {
      id
      name
      status
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($status: String = "active") {
  products(where: {status: {_eq: $status}}, order_by: {created_at: desc}) {
    id
    name
    slug
    description
    price
    stock
    status
    created_at
    category {
      id
      name
      type
    }
    product_images(order_by: {is_primary: desc, sort_order: asc}, limit: 1) {
      id
      image_url
      alt_text
      is_primary
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductsByCategoryDocument = gql`
    query GetProductsByCategory($categoryId: Int!, $status: String = "active") {
  products(
    where: {category_id: {_eq: $categoryId}, status: {_eq: $status}}
    order_by: {created_at: desc}
  ) {
    id
    name
    slug
    description
    price
    stock
    status
    created_at
    category {
      id
      name
      type
    }
    product_images(order_by: {is_primary: desc, sort_order: asc}, limit: 1) {
      id
      image_url
      alt_text
      is_primary
    }
  }
}
    `;

/**
 * __useGetProductsByCategoryQuery__
 *
 * To run a query within a React component, call `useGetProductsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetProductsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables> & ({ variables: GetProductsByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>(GetProductsByCategoryDocument, options);
      }
export function useGetProductsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>(GetProductsByCategoryDocument, options);
        }
export function useGetProductsByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>(GetProductsByCategoryDocument, options);
        }
export type GetProductsByCategoryQueryHookResult = ReturnType<typeof useGetProductsByCategoryQuery>;
export type GetProductsByCategoryLazyQueryHookResult = ReturnType<typeof useGetProductsByCategoryLazyQuery>;
export type GetProductsByCategorySuspenseQueryHookResult = ReturnType<typeof useGetProductsByCategorySuspenseQuery>;
export type GetProductsByCategoryQueryResult = Apollo.QueryResult<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($type: String = "product") {
  categories(where: {type: {_eq: $type}}, order_by: {name: asc}) {
    id
    name
    type
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;