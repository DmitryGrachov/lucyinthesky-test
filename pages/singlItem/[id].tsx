import axios from 'axios';
import { GetServerSideProps, GetStaticPaths } from 'next';
import MainContainer from '../../components/containers/MainContanier';
import SingleItem from '../../components/Items/SingleItem';
import { PUBLIC_DOMAIN } from '../../helper/constants';
import { ISingleRequestItem } from '../../interfaces/item.interface';
import { IRootItems } from '../../interfaces/items.interface';

export const DetailItem = ({ item }: IItemProps): JSX.Element => {
    return (
        <MainContainer title="Single intem">
            <main>
                <SingleItem
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    sizes={item.sizes}
                    id={item.id}
                    priceInCents={item.priceInCents}
                    price={item.price}
                />
            </main>
        </MainContainer>
    );
};

export const getStaticProps: GetServerSideProps<IItemProps> = async (
    context: any
) => {
    const { data: item } = await axios.get<ISingleRequestItem>(
        `${PUBLIC_DOMAIN}/product/${context.params.id}`
    );

    return {
        props: {
            item,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: items } = await axios.get<IRootItems>(
        `${PUBLIC_DOMAIN} + '/product?page=1'`
    );

    const paths = items.data.map((el: any) => {
        return { params: { id: el?.id.toString() } };
    });

    return {
        paths,
        fallback: true,
    };
};

interface IItemProps extends Record<string, any> {
    item: ISingleRequestItem;
}

export default DetailItem;
