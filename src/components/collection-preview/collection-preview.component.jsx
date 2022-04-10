import react from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title,items}) =>{
    console.log(items)
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase() } </h1>
            <div className="preview">
            {items.filter((item,indx) => indx < 4).map(({id,...itemProps}) =>  <CollectionItem key = {id} {...itemProps} />
                 
                  )}
            </div>
        </div>
    )
}

export default CollectionPreview;