import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block_loading"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="133" cy="133" r="133" />
            <rect x="0" y="300" rx="0" ry="0" width="280" height="23" />
            <rect x="0" y="336" rx="6" ry="6" width="280" height="68" />
            <rect x="0" y="427" rx="0" ry="0" width="115" height="27" />
            <rect x="145" y="421" rx="9" ry="9" width="129" height="33" />
        </ContentLoader>
    )
}

export default PizzaLoadingBlock;