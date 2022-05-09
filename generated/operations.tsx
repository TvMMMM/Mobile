import * as Types from "./schemas";

export type AllEventsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Event_Bool_Exp>;
}>;

export type AllEventsQuery = {
  __typename?: "query_root";
  event: Array<{
    __typename?: "event";
    date?: any | null | undefined;
    describe?: string | null | undefined;
    id: string;
    location?: string | null | undefined;
    reporter?: string | null | undefined;
    title: string;
    attendingTime?: any | null | undefined;
    image?: string | null | undefined;
    createdAt: any;
  }>;
};

export type PostEventMutationVariables = Types.Exact<{
  object: Types.Event_Insert_Input;
}>;

export type PostEventMutation = {
  __typename?: "mutation_root";
  insert_event?:
    | { __typename?: "event_mutation_response"; affected_rows: number }
    | null
    | undefined;
};

export type EventDetailQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type EventDetailQuery = {
  __typename?: "query_root";
  event: Array<{
    __typename?: "event";
    id: string;
    title: string;
    describe?: string | null | undefined;
    location?: string | null | undefined;
    date?: any | null | undefined;
    reporter?: string | null | undefined;
    image?: string | null | undefined;
    createdAt: any;
  }>;
};

export type DeleteEventMutationVariables = Types.Exact<{
  id: Types.Scalars["String"];
}>;

export type DeleteEventMutation = {
  __typename?: "mutation_root";
  delete_event?:
    | {
        __typename?: "event_mutation_response";
        affected_rows: number;
        returning: Array<{ __typename?: "event"; id: string }>;
      }
    | null
    | undefined;
};

export type UpdateEventMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars["String"]>;
  object: Types.Event_Set_Input;
}>;

export type UpdateEventMutation = {
  __typename?: "mutation_root";
  update_event?:
    | {
        __typename?: "event_mutation_response";
        affected_rows: number;
        returning: Array<{ __typename?: "event"; id: string }>;
      }
    | null
    | undefined;
};
