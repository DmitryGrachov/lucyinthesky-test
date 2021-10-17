import { Dispatch, SetStateAction } from 'react';

export interface ISuccessModal {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    orderId: number;
}
