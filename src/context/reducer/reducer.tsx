export interface State {
  [key: string]: any;
}
export const initialState: State = {}

export interface Action {
  type: string;
  payload?: any;
}
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
}