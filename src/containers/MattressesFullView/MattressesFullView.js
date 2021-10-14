import React, { useState } from 'react';

import Mattress from '../../components/Mattress/Mattress';
import Layout from '../../hoc/Layout/Layout';

import mattresses from '../../mock-data/mattresses';

const MattressesFullView = (props) => {
    const [cartCount, setCartCount] = useState(0);

    const itemAddedHandler = () => {
        const count = cartCount + 1;
        setCartCount(count)
    };

    return (
        <Layout cartCount={cartCount}>
            <Mattress itemAdded={itemAddedHandler} data={mattresses} />
        </Layout>
    );
};

export default MattressesFullView;
