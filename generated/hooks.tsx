import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};

export const AllEventsDocument = gql`
  query allEvents($where: event_bool_exp) {
    event(where: $where) {
      date
      describe
      id
      location
      reporter
      title
      attendingTime
      image
      createdAt
    }
  }
`;

/**
 * __useAllEventsQuery__
 *
 * To run a query within a React component, call `useAllEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAllEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.AllEventsQuery,
    Types.AllEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.AllEventsQuery, Types.AllEventsQueryVariables>(
    AllEventsDocument,
    options
  );
}
export function useAllEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.AllEventsQuery,
    Types.AllEventsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.AllEventsQuery,
    Types.AllEventsQueryVariables
  >(AllEventsDocument, options);
}
export type AllEventsQueryHookResult = ReturnType<typeof useAllEventsQuery>;
export type AllEventsLazyQueryHookResult = ReturnType<
  typeof useAllEventsLazyQuery
>;
export type AllEventsQueryResult = Apollo.QueryResult<
  Types.AllEventsQuery,
  Types.AllEventsQueryVariables
>;
export const PostEventDocument = gql`
  mutation postEvent($object: event_insert_input!) {
    insert_event(objects: [$object]) {
      affected_rows
    }
  }
`;
export type PostEventMutationFn = Apollo.MutationFunction<
  Types.PostEventMutation,
  Types.PostEventMutationVariables
>;

/**
 * __usePostEventMutation__
 *
 * To run a mutation, you first call `usePostEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postEventMutation, { data, loading, error }] = usePostEventMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePostEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.PostEventMutation,
    Types.PostEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.PostEventMutation,
    Types.PostEventMutationVariables
  >(PostEventDocument, options);
}
export type PostEventMutationHookResult = ReturnType<
  typeof usePostEventMutation
>;
export type PostEventMutationResult =
  Apollo.MutationResult<Types.PostEventMutation>;
export type PostEventMutationOptions = Apollo.BaseMutationOptions<
  Types.PostEventMutation,
  Types.PostEventMutationVariables
>;
export const EventDetailDocument = gql`
  query eventDetail($id: String!) {
    event(where: { id: { _eq: $id } }) {
      id
      title
      describe
      location
      date
      reporter
      image
      createdAt
    }
  }
`;

/**
 * __useEventDetailQuery__
 *
 * To run a query within a React component, call `useEventDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.EventDetailQuery,
    Types.EventDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.EventDetailQuery,
    Types.EventDetailQueryVariables
  >(EventDetailDocument, options);
}
export function useEventDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.EventDetailQuery,
    Types.EventDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.EventDetailQuery,
    Types.EventDetailQueryVariables
  >(EventDetailDocument, options);
}
export type EventDetailQueryHookResult = ReturnType<typeof useEventDetailQuery>;
export type EventDetailLazyQueryHookResult = ReturnType<
  typeof useEventDetailLazyQuery
>;
export type EventDetailQueryResult = Apollo.QueryResult<
  Types.EventDetailQuery,
  Types.EventDetailQueryVariables
>;
export const DeleteEventDocument = gql`
  mutation deleteEvent($id: String!) {
    delete_event(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
export type DeleteEventMutationFn = Apollo.MutationFunction<
  Types.DeleteEventMutation,
  Types.DeleteEventMutationVariables
>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteEventMutation,
    Types.DeleteEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DeleteEventMutation,
    Types.DeleteEventMutationVariables
  >(DeleteEventDocument, options);
}
export type DeleteEventMutationHookResult = ReturnType<
  typeof useDeleteEventMutation
>;
export type DeleteEventMutationResult =
  Apollo.MutationResult<Types.DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteEventMutation,
  Types.DeleteEventMutationVariables
>;
export const UpdateEventDocument = gql`
  mutation updateEvent($id: String, $object: event_set_input!) {
    update_event(where: { id: { _eq: $id } }, _set: $object) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
export type UpdateEventMutationFn = Apollo.MutationFunction<
  Types.UpdateEventMutation,
  Types.UpdateEventMutationVariables
>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpdateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateEventMutation,
    Types.UpdateEventMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateEventMutation,
    Types.UpdateEventMutationVariables
  >(UpdateEventDocument, options);
}
export type UpdateEventMutationHookResult = ReturnType<
  typeof useUpdateEventMutation
>;
export type UpdateEventMutationResult =
  Apollo.MutationResult<Types.UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateEventMutation,
  Types.UpdateEventMutationVariables
>;
