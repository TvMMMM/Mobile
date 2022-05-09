export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: "event";
  attendingTime?: Maybe<Scalars["timestamptz"]>;
  createdAt: Scalars["timestamptz"];
  date?: Maybe<Scalars["timestamptz"]>;
  describe?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  reporter?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: "event_aggregate";
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: "event_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: Maybe<Array<Event_Bool_Exp>>;
  _not?: Maybe<Event_Bool_Exp>;
  _or?: Maybe<Array<Event_Bool_Exp>>;
  attendingTime?: Maybe<Timestamptz_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  describe?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  reporter?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
  /** unique or primary key constraint */
  EventPkey = "event_pkey",
}

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
  attendingTime?: Maybe<Scalars["timestamptz"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  date?: Maybe<Scalars["timestamptz"]>;
  describe?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  reporter?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: "event_max_fields";
  attendingTime?: Maybe<Scalars["timestamptz"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  date?: Maybe<Scalars["timestamptz"]>;
  describe?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  reporter?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: "event_min_fields";
  attendingTime?: Maybe<Scalars["timestamptz"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  date?: Maybe<Scalars["timestamptz"]>;
  describe?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  reporter?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
  __typename?: "event_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** on_conflict condition type for table "event" */
export type Event_On_Conflict = {
  constraint: Event_Constraint;
  update_columns?: Array<Event_Update_Column>;
  where?: Maybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  attendingTime?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  describe?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  reporter?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
  id: Scalars["String"];
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  AttendingTime = "attendingTime",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Date = "date",
  /** column name */
  Describe = "describe",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Location = "location",
  /** column name */
  Reporter = "reporter",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
  attendingTime?: Maybe<Scalars["timestamptz"]>;
  createdAt?: Maybe<Scalars["timestamptz"]>;
  date?: Maybe<Scalars["timestamptz"]>;
  describe?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  reporter?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
  /** column name */
  AttendingTime = "attendingTime",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Date = "date",
  /** column name */
  Describe = "describe",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Location = "location",
  /** column name */
  Reporter = "reporter",
  /** column name */
  Title = "title",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** insert data into the table: "event" */
  insert_event?: Maybe<Event_Mutation_Response>;
  /** insert a single row into the table: "event" */
  insert_event_one?: Maybe<Event>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
};

/** mutation root */
export type Mutation_RootDelete_EventArgs = {
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_EventArgs = {
  objects: Array<Event_Insert_Input>;
  on_conflict?: Maybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
  object: Event_Insert_Input;
  on_conflict?: Maybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
  _set?: Maybe<Event_Set_Input>;
  where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
  _set?: Maybe<Event_Set_Input>;
  pk_columns: Event_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
};

export type Query_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Query_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Query_RootEvent_By_PkArgs = {
  id: Scalars["String"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
};

export type Subscription_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars["String"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};
