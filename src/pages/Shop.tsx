import React from 'react';
import ComingSoon from './ComingSoon';

const Shop = React.memo(() => {
  return <ComingSoon />;
});

Shop.displayName = 'Shop';

export default Shop;