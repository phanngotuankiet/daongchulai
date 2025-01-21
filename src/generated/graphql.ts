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
  float8: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** Bảng lưu trữ thông tin về kích thước, giá cả và tình trạng tồn kho của từng loại đá ong */
export type Laterite_Sizes = {
  __typename?: 'laterite_sizes';
  /** Màu sắc của đá */
  color?: Maybe<Scalars['String']['output']>;
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['output'];
  /** An object relationship */
  laterite_type?: Maybe<Laterite_Types>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Int']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price: Scalars['numeric']['output'];
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size: Scalars['String']['output'];
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: Maybe<Scalars['String']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['float8']['output']>;
};

/** aggregated selection of "laterite_sizes" */
export type Laterite_Sizes_Aggregate = {
  __typename?: 'laterite_sizes_aggregate';
  aggregate?: Maybe<Laterite_Sizes_Aggregate_Fields>;
  nodes: Array<Laterite_Sizes>;
};

export type Laterite_Sizes_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp_Var_Samp>;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Avg = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Corr = {
  arguments: Laterite_Sizes_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Max = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Min = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Sum = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Laterite_Sizes_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "laterite_sizes" */
export type Laterite_Sizes_Aggregate_Fields = {
  __typename?: 'laterite_sizes_aggregate_fields';
  avg?: Maybe<Laterite_Sizes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Laterite_Sizes_Max_Fields>;
  min?: Maybe<Laterite_Sizes_Min_Fields>;
  stddev?: Maybe<Laterite_Sizes_Stddev_Fields>;
  stddev_pop?: Maybe<Laterite_Sizes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laterite_Sizes_Stddev_Samp_Fields>;
  sum?: Maybe<Laterite_Sizes_Sum_Fields>;
  var_pop?: Maybe<Laterite_Sizes_Var_Pop_Fields>;
  var_samp?: Maybe<Laterite_Sizes_Var_Samp_Fields>;
  variance?: Maybe<Laterite_Sizes_Variance_Fields>;
};


/** aggregate fields of "laterite_sizes" */
export type Laterite_Sizes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "laterite_sizes" */
export type Laterite_Sizes_Aggregate_Order_By = {
  avg?: InputMaybe<Laterite_Sizes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laterite_Sizes_Max_Order_By>;
  min?: InputMaybe<Laterite_Sizes_Min_Order_By>;
  stddev?: InputMaybe<Laterite_Sizes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laterite_Sizes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laterite_Sizes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laterite_Sizes_Sum_Order_By>;
  var_pop?: InputMaybe<Laterite_Sizes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laterite_Sizes_Var_Samp_Order_By>;
  variance?: InputMaybe<Laterite_Sizes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laterite_sizes" */
export type Laterite_Sizes_Arr_Rel_Insert_Input = {
  data: Array<Laterite_Sizes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laterite_Sizes_On_Conflict>;
};

/** aggregate avg on columns */
export type Laterite_Sizes_Avg_Fields = {
  __typename?: 'laterite_sizes_avg_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Avg_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laterite_sizes". All fields are combined with a logical 'AND'. */
export type Laterite_Sizes_Bool_Exp = {
  _and?: InputMaybe<Array<Laterite_Sizes_Bool_Exp>>;
  _not?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  _or?: InputMaybe<Array<Laterite_Sizes_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  laterite_type?: InputMaybe<Laterite_Types_Bool_Exp>;
  laterite_type_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  size?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  stock_quantity?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  weight?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "laterite_sizes" */
export enum Laterite_Sizes_Constraint {
  /** unique or primary key constraint on columns "id" */
  LateriteSizesPkey = 'laterite_sizes_pkey'
}

/** input type for incrementing numeric columns in table "laterite_sizes" */
export type Laterite_Sizes_Inc_Input = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Scalars['Int']['input']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "laterite_sizes" */
export type Laterite_Sizes_Insert_Input = {
  /** Màu sắc của đá */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  laterite_type?: InputMaybe<Laterite_Types_Obj_Rel_Insert_Input>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Scalars['Int']['input']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: InputMaybe<Scalars['String']['input']>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Laterite_Sizes_Max_Fields = {
  __typename?: 'laterite_sizes_max_fields';
  /** Màu sắc của đá */
  color?: Maybe<Scalars['String']['output']>;
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Int']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: Maybe<Scalars['String']['output']>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: Maybe<Scalars['String']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['float8']['output']>;
};

/** order by max() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Max_Order_By = {
  /** Màu sắc của đá */
  color?: InputMaybe<Order_By>;
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Order_By>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: InputMaybe<Order_By>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laterite_Sizes_Min_Fields = {
  __typename?: 'laterite_sizes_min_fields';
  /** Màu sắc của đá */
  color?: Maybe<Scalars['String']['output']>;
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Int']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: Maybe<Scalars['String']['output']>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: Maybe<Scalars['String']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['float8']['output']>;
};

/** order by min() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Min_Order_By = {
  /** Màu sắc của đá */
  color?: InputMaybe<Order_By>;
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Order_By>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: InputMaybe<Order_By>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laterite_sizes" */
export type Laterite_Sizes_Mutation_Response = {
  __typename?: 'laterite_sizes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Laterite_Sizes>;
};

/** on_conflict condition type for table "laterite_sizes" */
export type Laterite_Sizes_On_Conflict = {
  constraint: Laterite_Sizes_Constraint;
  update_columns?: Array<Laterite_Sizes_Update_Column>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};

/** Ordering options when selecting data from "laterite_sizes". */
export type Laterite_Sizes_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laterite_type?: InputMaybe<Laterite_Types_Order_By>;
  laterite_type_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laterite_sizes */
export type Laterite_Sizes_Pk_Columns_Input = {
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['input'];
};

/** select columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LateriteTypeId = 'laterite_type_id',
  /** column name */
  Price = 'price',
  /** column name */
  Size = 'size',
  /** column name */
  Status = 'status',
  /** column name */
  StockQuantity = 'stock_quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_avg_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_corr_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_max_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_min_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_sum_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** select "laterite_sizes_aggregate_bool_exp_var_samp_arguments_columns" columns of table "laterite_sizes" */
export enum Laterite_Sizes_Select_Column_Laterite_Sizes_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "laterite_sizes" */
export type Laterite_Sizes_Set_Input = {
  /** Màu sắc của đá */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Scalars['Int']['input']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: InputMaybe<Scalars['String']['input']>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Laterite_Sizes_Stddev_Fields = {
  __typename?: 'laterite_sizes_stddev_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Stddev_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laterite_Sizes_Stddev_Pop_Fields = {
  __typename?: 'laterite_sizes_stddev_pop_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Stddev_Pop_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laterite_Sizes_Stddev_Samp_Fields = {
  __typename?: 'laterite_sizes_stddev_samp_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Stddev_Samp_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "laterite_sizes" */
export type Laterite_Sizes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laterite_Sizes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laterite_Sizes_Stream_Cursor_Value_Input = {
  /** Màu sắc của đá */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Scalars['Int']['input']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Scalars['numeric']['input']>;
  /** Kích thước của đá theo định dạng DxRxC (VD: 20x20x40 cm) */
  size?: InputMaybe<Scalars['String']['input']>;
  /** Trạng thái tồn kho: available (còn hàng), out_of_stock (hết hàng), discontinued (ngừng kinh doanh) */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Laterite_Sizes_Sum_Fields = {
  __typename?: 'laterite_sizes_sum_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Int']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['numeric']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Sum_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "laterite_sizes" */
export enum Laterite_Sizes_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LateriteTypeId = 'laterite_type_id',
  /** column name */
  Price = 'price',
  /** column name */
  Size = 'size',
  /** column name */
  Status = 'status',
  /** column name */
  StockQuantity = 'stock_quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

export type Laterite_Sizes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laterite_Sizes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laterite_Sizes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Laterite_Sizes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laterite_Sizes_Var_Pop_Fields = {
  __typename?: 'laterite_sizes_var_pop_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Var_Pop_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laterite_Sizes_Var_Samp_Fields = {
  __typename?: 'laterite_sizes_var_samp_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Var_Samp_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laterite_Sizes_Variance_Fields = {
  __typename?: 'laterite_sizes_variance_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: Maybe<Scalars['Float']['output']>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: Maybe<Scalars['Float']['output']>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: Maybe<Scalars['Float']['output']>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "laterite_sizes" */
export type Laterite_Sizes_Variance_Order_By = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Order_By>;
  /** ID tham chiếu đến bảng laterite_types, xác định loại đá */
  laterite_type_id?: InputMaybe<Order_By>;
  /** Giá bán của đá (đơn vị: VNĐ) */
  price?: InputMaybe<Order_By>;
  /** Số lượng đá còn trong kho */
  stock_quantity?: InputMaybe<Order_By>;
  /** Trọng lượng của đá (đơn vị: kg) */
  weight?: InputMaybe<Order_By>;
};

/** Bảng lưu trữ thông tin các loại đá ong, bao gồm đặc tính và nguồn gốc của từng loại */
export type Laterite_Types = {
  __typename?: 'laterite_types';
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: Maybe<Scalars['String']['output']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['float8']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['output'];
  /** An array relationship */
  laterite_sizes: Array<Laterite_Sizes>;
  /** An aggregate relationship */
  laterite_sizes_aggregate: Laterite_Sizes_Aggregate;
  no_pitches_name?: Maybe<Scalars['String']['output']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: Maybe<Scalars['String']['output']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type: Scalars['String']['output'];
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** Bảng lưu trữ thông tin các loại đá ong, bao gồm đặc tính và nguồn gốc của từng loại */
export type Laterite_TypesLaterite_SizesArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


/** Bảng lưu trữ thông tin các loại đá ong, bao gồm đặc tính và nguồn gốc của từng loại */
export type Laterite_TypesLaterite_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};

/** aggregated selection of "laterite_types" */
export type Laterite_Types_Aggregate = {
  __typename?: 'laterite_types_aggregate';
  aggregate?: Maybe<Laterite_Types_Aggregate_Fields>;
  nodes: Array<Laterite_Types>;
};

/** aggregate fields of "laterite_types" */
export type Laterite_Types_Aggregate_Fields = {
  __typename?: 'laterite_types_aggregate_fields';
  avg?: Maybe<Laterite_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Laterite_Types_Max_Fields>;
  min?: Maybe<Laterite_Types_Min_Fields>;
  stddev?: Maybe<Laterite_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Laterite_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laterite_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Laterite_Types_Sum_Fields>;
  var_pop?: Maybe<Laterite_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Laterite_Types_Var_Samp_Fields>;
  variance?: Maybe<Laterite_Types_Variance_Fields>;
};


/** aggregate fields of "laterite_types" */
export type Laterite_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laterite_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Laterite_Types_Avg_Fields = {
  __typename?: 'laterite_types_avg_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "laterite_types". All fields are combined with a logical 'AND'. */
export type Laterite_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Laterite_Types_Bool_Exp>>;
  _not?: InputMaybe<Laterite_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Laterite_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hardness_level?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  laterite_sizes?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  laterite_sizes_aggregate?: InputMaybe<Laterite_Sizes_Aggregate_Bool_Exp>;
  no_pitches_name?: InputMaybe<String_Comparison_Exp>;
  origin?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "laterite_types" */
export enum Laterite_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  LateriteTypesPkey = 'laterite_types_pkey'
}

/** input type for incrementing numeric columns in table "laterite_types" */
export type Laterite_Types_Inc_Input = {
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: InputMaybe<Scalars['float8']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "laterite_types" */
export type Laterite_Types_Insert_Input = {
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: InputMaybe<Scalars['float8']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  laterite_sizes?: InputMaybe<Laterite_Sizes_Arr_Rel_Insert_Input>;
  no_pitches_name?: InputMaybe<Scalars['String']['input']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: InputMaybe<Scalars['String']['input']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Laterite_Types_Max_Fields = {
  __typename?: 'laterite_types_max_fields';
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: Maybe<Scalars['String']['output']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['float8']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  no_pitches_name?: Maybe<Scalars['String']['output']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: Maybe<Scalars['String']['output']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type?: Maybe<Scalars['String']['output']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Laterite_Types_Min_Fields = {
  __typename?: 'laterite_types_min_fields';
  /** Thời điểm tạo bản ghi */
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: Maybe<Scalars['String']['output']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['float8']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  no_pitches_name?: Maybe<Scalars['String']['output']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: Maybe<Scalars['String']['output']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type?: Maybe<Scalars['String']['output']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "laterite_types" */
export type Laterite_Types_Mutation_Response = {
  __typename?: 'laterite_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Laterite_Types>;
};

/** input type for inserting object relation for remote table "laterite_types" */
export type Laterite_Types_Obj_Rel_Insert_Input = {
  data: Laterite_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Laterite_Types_On_Conflict>;
};

/** on_conflict condition type for table "laterite_types" */
export type Laterite_Types_On_Conflict = {
  constraint: Laterite_Types_Constraint;
  update_columns?: Array<Laterite_Types_Update_Column>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "laterite_types". */
export type Laterite_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hardness_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laterite_sizes_aggregate?: InputMaybe<Laterite_Sizes_Aggregate_Order_By>;
  no_pitches_name?: InputMaybe<Order_By>;
  origin?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laterite_types */
export type Laterite_Types_Pk_Columns_Input = {
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['input'];
};

/** select columns of table "laterite_types" */
export enum Laterite_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  HardnessLevel = 'hardness_level',
  /** column name */
  Id = 'id',
  /** column name */
  NoPitchesName = 'no_pitches_name',
  /** column name */
  Origin = 'origin',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "laterite_types" */
export type Laterite_Types_Set_Input = {
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: InputMaybe<Scalars['float8']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  no_pitches_name?: InputMaybe<Scalars['String']['input']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: InputMaybe<Scalars['String']['input']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Laterite_Types_Stddev_Fields = {
  __typename?: 'laterite_types_stddev_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Laterite_Types_Stddev_Pop_Fields = {
  __typename?: 'laterite_types_stddev_pop_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Laterite_Types_Stddev_Samp_Fields = {
  __typename?: 'laterite_types_stddev_samp_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "laterite_types" */
export type Laterite_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Laterite_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Laterite_Types_Stream_Cursor_Value_Input = {
  /** Thời điểm tạo bản ghi */
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mô tả chi tiết về đặc điểm, công dụng và tính chất của loại đá */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: InputMaybe<Scalars['float8']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  no_pitches_name?: InputMaybe<Scalars['String']['input']>;
  /** Nguồn gốc xuất xứ của đá (VD: Chu Lai, ...) */
  origin?: InputMaybe<Scalars['String']['input']>;
  /** Tên loại đá ong (VD: đá ong xám, đá ong vàng, đá ong vàng viên) */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Thời điểm cập nhật bản ghi gần nhất */
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Laterite_Types_Sum_Fields = {
  __typename?: 'laterite_types_sum_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['float8']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "laterite_types" */
export enum Laterite_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  HardnessLevel = 'hardness_level',
  /** column name */
  Id = 'id',
  /** column name */
  NoPitchesName = 'no_pitches_name',
  /** column name */
  Origin = 'origin',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Laterite_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Laterite_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Laterite_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Laterite_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Laterite_Types_Var_Pop_Fields = {
  __typename?: 'laterite_types_var_pop_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Laterite_Types_Var_Samp_Fields = {
  __typename?: 'laterite_types_var_samp_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Laterite_Types_Variance_Fields = {
  __typename?: 'laterite_types_variance_fields';
  /** Chỉ số độ cứng của đá theo thang đo tiêu chuẩn */
  hardness_level?: Maybe<Scalars['Float']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "laterite_sizes" */
  delete_laterite_sizes?: Maybe<Laterite_Sizes_Mutation_Response>;
  /** delete single row from the table: "laterite_sizes" */
  delete_laterite_sizes_by_pk?: Maybe<Laterite_Sizes>;
  /** delete data from the table: "laterite_types" */
  delete_laterite_types?: Maybe<Laterite_Types_Mutation_Response>;
  /** delete single row from the table: "laterite_types" */
  delete_laterite_types_by_pk?: Maybe<Laterite_Types>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "laterite_sizes" */
  insert_laterite_sizes?: Maybe<Laterite_Sizes_Mutation_Response>;
  /** insert a single row into the table: "laterite_sizes" */
  insert_laterite_sizes_one?: Maybe<Laterite_Sizes>;
  /** insert data into the table: "laterite_types" */
  insert_laterite_types?: Maybe<Laterite_Types_Mutation_Response>;
  /** insert a single row into the table: "laterite_types" */
  insert_laterite_types_one?: Maybe<Laterite_Types>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "laterite_sizes" */
  update_laterite_sizes?: Maybe<Laterite_Sizes_Mutation_Response>;
  /** update single row of the table: "laterite_sizes" */
  update_laterite_sizes_by_pk?: Maybe<Laterite_Sizes>;
  /** update multiples rows of table: "laterite_sizes" */
  update_laterite_sizes_many?: Maybe<Array<Maybe<Laterite_Sizes_Mutation_Response>>>;
  /** update data of the table: "laterite_types" */
  update_laterite_types?: Maybe<Laterite_Types_Mutation_Response>;
  /** update single row of the table: "laterite_types" */
  update_laterite_types_by_pk?: Maybe<Laterite_Types>;
  /** update multiples rows of table: "laterite_types" */
  update_laterite_types_many?: Maybe<Array<Maybe<Laterite_Types_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Laterite_SizesArgs = {
  where: Laterite_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laterite_Sizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Laterite_TypesArgs = {
  where: Laterite_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Laterite_Types_By_PkArgs = {
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
export type Mutation_RootInsert_Laterite_SizesArgs = {
  objects: Array<Laterite_Sizes_Insert_Input>;
  on_conflict?: InputMaybe<Laterite_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laterite_Sizes_OneArgs = {
  object: Laterite_Sizes_Insert_Input;
  on_conflict?: InputMaybe<Laterite_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laterite_TypesArgs = {
  objects: Array<Laterite_Types_Insert_Input>;
  on_conflict?: InputMaybe<Laterite_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Laterite_Types_OneArgs = {
  object: Laterite_Types_Insert_Input;
  on_conflict?: InputMaybe<Laterite_Types_On_Conflict>;
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
export type Mutation_RootUpdate_Laterite_SizesArgs = {
  _inc?: InputMaybe<Laterite_Sizes_Inc_Input>;
  _set?: InputMaybe<Laterite_Sizes_Set_Input>;
  where: Laterite_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laterite_Sizes_By_PkArgs = {
  _inc?: InputMaybe<Laterite_Sizes_Inc_Input>;
  _set?: InputMaybe<Laterite_Sizes_Set_Input>;
  pk_columns: Laterite_Sizes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laterite_Sizes_ManyArgs = {
  updates: Array<Laterite_Sizes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Laterite_TypesArgs = {
  _inc?: InputMaybe<Laterite_Types_Inc_Input>;
  _set?: InputMaybe<Laterite_Types_Set_Input>;
  where: Laterite_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Laterite_Types_By_PkArgs = {
  _inc?: InputMaybe<Laterite_Types_Inc_Input>;
  _set?: InputMaybe<Laterite_Types_Set_Input>;
  pk_columns: Laterite_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Laterite_Types_ManyArgs = {
  updates: Array<Laterite_Types_Updates>;
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

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  laterite_sizes: Array<Laterite_Sizes>;
  /** An aggregate relationship */
  laterite_sizes_aggregate: Laterite_Sizes_Aggregate;
  /** fetch data from the table: "laterite_sizes" using primary key columns */
  laterite_sizes_by_pk?: Maybe<Laterite_Sizes>;
  /** fetch data from the table: "laterite_types" */
  laterite_types: Array<Laterite_Types>;
  /** fetch aggregated fields from the table: "laterite_types" */
  laterite_types_aggregate: Laterite_Types_Aggregate;
  /** fetch data from the table: "laterite_types" using primary key columns */
  laterite_types_by_pk?: Maybe<Laterite_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLaterite_SizesArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


export type Query_RootLaterite_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


export type Query_RootLaterite_Sizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootLaterite_TypesArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Types_Order_By>>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
};


export type Query_RootLaterite_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Types_Order_By>>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
};


export type Query_RootLaterite_Types_By_PkArgs = {
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
  /** An array relationship */
  laterite_sizes: Array<Laterite_Sizes>;
  /** An aggregate relationship */
  laterite_sizes_aggregate: Laterite_Sizes_Aggregate;
  /** fetch data from the table: "laterite_sizes" using primary key columns */
  laterite_sizes_by_pk?: Maybe<Laterite_Sizes>;
  /** fetch data from the table in a streaming manner: "laterite_sizes" */
  laterite_sizes_stream: Array<Laterite_Sizes>;
  /** fetch data from the table: "laterite_types" */
  laterite_types: Array<Laterite_Types>;
  /** fetch aggregated fields from the table: "laterite_types" */
  laterite_types_aggregate: Laterite_Types_Aggregate;
  /** fetch data from the table: "laterite_types" using primary key columns */
  laterite_types_by_pk?: Maybe<Laterite_Types>;
  /** fetch data from the table in a streaming manner: "laterite_types" */
  laterite_types_stream: Array<Laterite_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootLaterite_SizesArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


export type Subscription_RootLaterite_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


export type Subscription_RootLaterite_Sizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLaterite_Sizes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Laterite_Sizes_Stream_Cursor_Input>>;
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
};


export type Subscription_RootLaterite_TypesArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Types_Order_By>>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
};


export type Subscription_RootLaterite_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laterite_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Laterite_Types_Order_By>>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
};


export type Subscription_RootLaterite_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLaterite_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Laterite_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
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

/** Bảng quản lý phân quyền người dùng với 2 role cơ bản: admin và anonymous */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: Maybe<Scalars['String']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['output'];
  /** Trạng thái tài khoản: true - đang hoạt động, false - đã bị khóa */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: Maybe<Scalars['timestamp']['output']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Tên đăng nhập, chỉ dành cho admin */
  username?: Maybe<Scalars['String']['output']>;
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
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_login?: InputMaybe<Timestamp_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Trạng thái tài khoản: true - đang hoạt động, false - đã bị khóa */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Tên đăng nhập, chỉ dành cho admin */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: Maybe<Scalars['String']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: Maybe<Scalars['timestamp']['output']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Tên đăng nhập, chỉ dành cho admin */
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: Maybe<Scalars['String']['output']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: Maybe<Scalars['timestamp']['output']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** Tên đăng nhập, chỉ dành cho admin */
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

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  /** ID tự động tăng, khóa chính của bảng */
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Trạng thái tài khoản: true - đang hoạt động, false - đã bị khóa */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Tên đăng nhập, chỉ dành cho admin */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  /** ID tự động tăng, khóa chính của bảng */
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
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Email đăng nhập, chỉ dành cho admin */
  email?: InputMaybe<Scalars['String']['input']>;
  /** ID tự động tăng, khóa chính của bảng */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Trạng thái tài khoản: true - đang hoạt động, false - đã bị khóa */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Thời điểm đăng nhập gần nhất */
  last_login?: InputMaybe<Scalars['timestamp']['input']>;
  /** Mật khẩu đã được mã hóa, chỉ dành cho admin */
  password_hash?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  /** Tên đăng nhập, chỉ dành cho admin */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  UpdatedAt = 'updated_at',
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
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  /** ID tự động tăng, khóa chính của bảng */
  id?: Maybe<Scalars['Float']['output']>;
};

export type LateriteSizesQueryVariables = Exact<{
  where?: InputMaybe<Laterite_Sizes_Bool_Exp>;
  order_by?: InputMaybe<Array<Laterite_Sizes_Order_By> | Laterite_Sizes_Order_By>;
}>;


export type LateriteSizesQuery = { __typename?: 'query_root', laterite_sizes: Array<{ __typename?: 'laterite_sizes', id: number, size: string, price: any, color?: string | null, stock_quantity?: number | null, status?: string | null, weight?: any | null, laterite_type_id?: number | null }> };

export type LateriteTypesQueryVariables = Exact<{
  order_by?: InputMaybe<Array<Laterite_Types_Order_By> | Laterite_Types_Order_By>;
  where?: InputMaybe<Laterite_Types_Bool_Exp>;
}>;


export type LateriteTypesQuery = { __typename?: 'query_root', laterite_types: Array<{ __typename?: 'laterite_types', type: string, origin?: string | null, updated_at?: any | null, id: number, hardness_level?: any | null, description?: string | null, created_at?: any | null, no_pitches_name?: string | null }> };


export const LateriteSizesDocument = gql`
    query LateriteSizes($where: laterite_sizes_bool_exp = {}, $order_by: [laterite_sizes_order_by!] = {}) {
  laterite_sizes(where: $where, order_by: $order_by) {
    id
    size
    price
    color
    stock_quantity
    status
    weight
    laterite_type_id
  }
}
    `;

/**
 * __useLateriteSizesQuery__
 *
 * To run a query within a React component, call `useLateriteSizesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLateriteSizesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLateriteSizesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useLateriteSizesQuery(baseOptions?: Apollo.QueryHookOptions<LateriteSizesQuery, LateriteSizesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LateriteSizesQuery, LateriteSizesQueryVariables>(LateriteSizesDocument, options);
      }
export function useLateriteSizesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LateriteSizesQuery, LateriteSizesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LateriteSizesQuery, LateriteSizesQueryVariables>(LateriteSizesDocument, options);
        }
export function useLateriteSizesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LateriteSizesQuery, LateriteSizesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LateriteSizesQuery, LateriteSizesQueryVariables>(LateriteSizesDocument, options);
        }
export type LateriteSizesQueryHookResult = ReturnType<typeof useLateriteSizesQuery>;
export type LateriteSizesLazyQueryHookResult = ReturnType<typeof useLateriteSizesLazyQuery>;
export type LateriteSizesSuspenseQueryHookResult = ReturnType<typeof useLateriteSizesSuspenseQuery>;
export type LateriteSizesQueryResult = Apollo.QueryResult<LateriteSizesQuery, LateriteSizesQueryVariables>;
export const LateriteTypesDocument = gql`
    query LateriteTypes($order_by: [laterite_types_order_by!] = {}, $where: laterite_types_bool_exp = {}) {
  laterite_types(order_by: $order_by, where: $where) {
    type
    origin
    updated_at
    id
    hardness_level
    description
    created_at
    no_pitches_name
  }
}
    `;

/**
 * __useLateriteTypesQuery__
 *
 * To run a query within a React component, call `useLateriteTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLateriteTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLateriteTypesQuery({
 *   variables: {
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLateriteTypesQuery(baseOptions?: Apollo.QueryHookOptions<LateriteTypesQuery, LateriteTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LateriteTypesQuery, LateriteTypesQueryVariables>(LateriteTypesDocument, options);
      }
export function useLateriteTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LateriteTypesQuery, LateriteTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LateriteTypesQuery, LateriteTypesQueryVariables>(LateriteTypesDocument, options);
        }
export function useLateriteTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LateriteTypesQuery, LateriteTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LateriteTypesQuery, LateriteTypesQueryVariables>(LateriteTypesDocument, options);
        }
export type LateriteTypesQueryHookResult = ReturnType<typeof useLateriteTypesQuery>;
export type LateriteTypesLazyQueryHookResult = ReturnType<typeof useLateriteTypesLazyQuery>;
export type LateriteTypesSuspenseQueryHookResult = ReturnType<typeof useLateriteTypesSuspenseQuery>;
export type LateriteTypesQueryResult = Apollo.QueryResult<LateriteTypesQuery, LateriteTypesQueryVariables>;