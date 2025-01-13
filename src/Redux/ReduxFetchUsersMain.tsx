import { fetchUsersStart, fetchUsersSuccess, fetchUsersError } from "./ReduxUSersSlice";

 
//  Thunk function for fetching users
export const ReduxThunkFetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersStart()); // Start loading state
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch(fetchUsersSuccess(data)); // Dispatch success with the fetched data
    } catch (error) {
      dispatch(fetchUsersError(error.message)); // Dispatch error action
    }
  };
};
 
export default ReduxThunkFetchUsers;