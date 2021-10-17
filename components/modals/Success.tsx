import { ISuccessModal } from '../../interfaces/modals.interface';
import styles from '../../styles/success-modal.module.scss';

const Success = ({
    showModal,
    setShowModal,
    orderId,
}: ISuccessModal): JSX.Element => (
    <>
        {showModal && (
            <div className={styles.mainWrapper}>
                <div className={styles.modalWrapper}>
                    <h2>Order number</h2>
                    <p>{orderId}</p>
                    <span
                        className={styles.closebtn}
                        onClick={() => setShowModal(false)}
                    >
                        &times;
                    </span>
                </div>
            </div>
        )}
    </>
);

export default Success;
