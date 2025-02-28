export interface State {
  [key: string]: string | number | boolean | object | null | undefined;
}
export const initialState: State = {}

export interface Action<T = any> {
  type: string;
  payload?: T;
}
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
}