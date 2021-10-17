import { IOneItem } from '../../interfaces/items.interface';

const Item = ({ name, image }: IOneItem) => (
    <>
        <div>
            <img src={image} alt="mainImage" />
            <p>{name}</p>
        </div>
    </>
);

export default Item;
