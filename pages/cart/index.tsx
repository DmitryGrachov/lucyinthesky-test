import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import MainContainer from '../../components/containers/MainContanier';
import { IItemForCart } from '../../interfaces/item.interface';
import styles from '../../styles/cart.module.scss';
import {
    decrementQuantity,
    incrementQuantity,
    removeAllCart,
    removeFromCart,
} from '../../store/cart.slice';
import axios from 'axios';
import { ISuccessModal } from '../../interfaces/modals.interface';
import Success from '../../components/modals/Success';
import { PUBLIC_DOMAIN } from '../../helper/constants';

const CartPage = (): JSX.Element => {
    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [orderId, setOrderId] = useState<number>(0);

    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator: number, item: IItemForCart) =>
                accumulator + item?.quantity * (item?.priceInCents / 100),
            0
        );
    };

    const sendHandler = () => {
        const filteredModel: [] = cart.map((el: IItemForCart) => {
            return { id: el?.id, size: el?.size };
        });

        const modelForRequest = {
            products: [...filteredModel],
        };

        const request = axios
            .post<IItemForCart>(
                `${PUBLIC_DOMAIN}/checkout/placeOrder`,
                modelForRequest
            )
            .then((response: any) => {
                const data: ISuccessModal = response?.data;

                if (data?.orderId) {
                    dispatch(removeAllCart());
                    setOrderId(data?.orderId);
                    setShowModal(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <MainContainer title="Cart">
            <main>
                <div className={styles.container}>
                    {cart.length === 0 ? (
                        <h1>Your Cart is Empty!</h1>
                    ) : (
                        <>
                            <div className={styles.header}>
                                <div>Image</div>
                                <div>Name</div>
                                <div>Size</div>
                                <div>Price</div>
                                <div>Quantity</div>
                                <div>Delete</div>
                            </div>
                            {cart.map((item: IItemForCart) => (
                                <div key={item?.id} className={styles.body}>
                                    <div className={styles.image}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <p>{item?.name}</p>
                                    <p>{item?.size}</p>
                                    <p>{item?.price}</p>
                                    <p>{item?.quantity}</p>
                                    <div className={styles.buttons}>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    incrementQuantity(item?.id)
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    decrementQuantity(item?.id)
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart(item?.id)
                                                )
                                            }
                                        >
                                            x
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <h2>Grand total: ${getTotalPrice()}</h2>
                            <button
                                className={styles.buyButton}
                                onClick={sendHandler}
                            >
                                BUY
                            </button>
                        </>
                    )}
                </div>
                <Success
                    showModal={showModal}
                    setShowModal={setShowModal}
                    orderId={orderId}
                />
            </main>
        </MainContainer>
    );
};

export default CartPage;
