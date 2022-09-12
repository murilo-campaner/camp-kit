import { useImmerReducer } from "use-immer";

const initialState = {
  authUser: null
};

export default () =>
  useImmerReducer((state, action) => {
    const { type, error = false, payload, meta } = action;

    switch (type) {
      case "login": {
        state.authUser = !error ? payload : state.authUser;
        return;
      }

      case "logout": {
        state.authUser = error ? state.authUser : null;
        return;
      }

      case "recovery": {
        return;
      }

      default: {
        return;
      }
    }
  }, initialState);
