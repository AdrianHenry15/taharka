export interface IProductStore {
    isOpen: boolean;
    isEdit: boolean;
    editId?: string;
    onOpen: () => void;
    onEdit: (id: string) => void;
    onClose: () => void;
}
