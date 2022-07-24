export interface IState {
    todoItems: ITodoItem[]
};
export interface IAction {
    type: string,
    payload: any
};
export interface ITodoItem {
    id: string,
    title: string
}
export interface IReducer {
    todo: () => IState
}
export interface ITodoListItemProps {
    id: string,
    title: string
}