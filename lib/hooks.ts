import useSWR from "swr";
import fetcher from "./fetcher";

// 'me' === me api route
export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// export const useEvents = async () => {
//   const { data, error } = useSWR("/events", fetcher);

//   return {
//     // TODO: fix this any
//     events: data,
//     isLoading: !data && !error,
//     isError: error,
//   };
// };
