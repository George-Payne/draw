import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import Map from 'pigeon-maps';

(() => {
    const container = document.createElement('div');
    document.body.append(container);

    render(
        <Map
            width={500}
            height={500}
            defaultCenter={[52.070499, 4.300700]}
            defaultZoom={4}
            provider={(x, y, z) => `/tile/${x}/${y}/${z}`}
        />,
        container
    );
})();
