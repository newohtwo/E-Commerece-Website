import react from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => {
          return <CollectionPreview key={id} {...collectionsProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
