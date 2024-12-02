export function requestStatusReducer(state = {}, action) {
  let { type } = action;
  switch (type) {
    case "REQUEST_BEGIN": {
      let { message } = action;
      return { message };
    }
    case "REQUEST_FINISHED": {
      return {};
    }
    case "REQUEST_FAILED": {
      return { error: action.message };
    }
    default:
      return state;
  }
}
