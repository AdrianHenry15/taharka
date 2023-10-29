export interface IActiveStore {
    id?: string;
    set: (id: string) => void;
    reset: () => void;
}
