import react from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/*routes to the shop page component*/}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/*routes to the shop/hats || shop/mens..ect page component*/}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
