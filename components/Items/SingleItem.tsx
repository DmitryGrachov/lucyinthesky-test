import { useState } from 'react';
import { IItemForCart, ISingleItem } from '../../interfaces/item.interface';
import styles from '../../styles/item.module.scss';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart.slice';

const SingleItem = ({
    image,
    name,
    description,
    sizes,
    id,
    priceInCents,
    price,
}: ISingleItem): JSX.Element => {
    const [model, setModel] = useState<IItemForCart>({
        id,
        name,
        image,
        price,
        priceInCents,
        size: 'Small',
        quantity: 0,
    });

    const hadleChangeSize = (el: string) => {
        setModel({ ...model, size: el });
    };

    const dispatch = useDispatch();

    const htmlParser = () => {
        const onePagse: any = ReactHtmlParser(description);
        return ReactHtmlParser(onePagse);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={image} alt="mainImage" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2>{name}</h2>
                        <p>Price: {price}</p>
                        <p>Select size</p>
                        <select
                            onChange={(el) => {
                                hadleChangeSize(el.target.value);
                            }}
                        >
                            {sizes.map<JSX.Element>((el) => {
                                return (
                                    <option key={el} value={el}>
                                        {el}
                                    </option>
                                );
                            })}
                        </select>
                        <br />
                        <div className={styles.buttons}>
                            <button onClick={() => dispatch(addToCart(model))}>
                                ADD TO ORDER
                            </button>
                        </div>
                        <h3>Description</h3>
                        <div className={styles.textFormatter}>
                            {htmlParser()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleItem;
