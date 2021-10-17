import axios from 'axios';
import { NextPage } from 'next';
import { NextPageContext } from 'next/dist/shared/lib/utils';
import ItemsContainer from '../components/containers/ItemsContainer';
import MainContainer from '../components/containers/MainContanier';
import { IRootItems } from '../interfaces/items.interface';
import Router from 'next/router';
import styles from '../styles/items.module.scss';
import { ParsedUrlQuery } from 'querystring';

const Catalog: NextPage<any> = ({ props }: ICategoryProps): JSX.Element => {
    return (
        <MainContainer title="Catalog">
            <main>
                <ItemsContainer data={props?.items?.data} />
                <div className={styles.buttons}>
                    <button
                        onClick={() =>
                            Router.push(`/?page=${props?.items?.page - 1}`)
                        }
                        disabled={props?.items?.page <= 1}
                    >
                        PREV
                    </button>
                    <button
                        className={styles.firstPageButton}
                        onClick={() => Router.push(`/?page=1`)}
                        disabled={props?.items?.page <= 1}
                    >
                        FIRST PAGE
                    </button>
                    <button
                        onClick={() =>
                            Router.push(`/?page=${props?.items?.page + 1}`)
                        }
                        disabled={props?.items?.page >= props?.items?.pageCount}
                    >
                        NEXT
                    </button>
                </div>
            </main>
        </MainContainer>
    );
};

interface Context extends NextPageContext {
    query: ParsedUrlQuery;
}

Catalog.getInitialProps = async ({ query: { page = '1' } }: Context) => {
    const { data: items } = await axios.get<IRootItems>(
        `${process.env.NEXT_PUBLIC_DOMAIN}/product?page=${page}`
    );

    return {
        props: {
            items,
            page: page,
        },
    };
};

interface ICategoryProps extends Record<string | number | symbol, any> {
    items: IRootItems;
}

export default Catalog;
