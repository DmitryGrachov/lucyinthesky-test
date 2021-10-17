import { IItem } from '../../interfaces/items.interface';
import Item from '../Items/Item';
import styles from '../../styles/Items.module.scss';
import Link from 'next/link';

const ItemsContainer = ({ data }: IItem): JSX.Element => (
    <>
        <div className={styles.wrapper}>
            <div className={styles.wrapperElements}>
                {data.map((el: IItem) => (
                    <Link key={el.id} href={`/singlItem/${el?.id}`}>
                        <a>
                            <Item name={el?.name} image={el?.image} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
);

export default ItemsContainer;
