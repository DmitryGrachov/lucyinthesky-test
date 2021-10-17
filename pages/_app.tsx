import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
