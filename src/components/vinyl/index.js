import React from 'react';
import { VinylSvg } from './styled';

const Vinyl = () => (
  <VinylSvg width="160" height="160" viewBox="0 0 500 500" className="all">
    <circle cx="250" cy="250" r="220" className="all outer" />
    <circle cx="250" cy="250" r="68.1" className="all inner" />
    <circle cx="250" cy="250" r="8.5" className="all inner" />
    <path d="M89 250c0-20.8 4-40.8 11.2-59 12-30.5 33-56.4 59.8-74.5C185.7 99.1 216.7 89 250 89" className="all grooves" />
    <path d="M56.5 250.5c0-11.7 1-23.1 3-34.2 10.5-58.8 47.5-108.4 98.3-135.9C185.2 65.5 216.6 57 250 57" className="all grooves" />
    <path d="M126.5 250c0-23.8 6.7-46 18.4-64.8 5.5-8.9 12-17 19.5-24.2C186.6 139.6 216.7 126.5 250 126.5" className="all grooves" />
    <path d="M410.5 250.5c0 20.8-4 40.8-11.2 59C387.3 340 366.3 365.9 339.5 384c-25.7 17.4-56.7 27.5-90 27.5" className="all grooves" />
    <path d="M443 250c0 11.7-1 23.1-3 34.2 -10.5 58.8-47.5 108.4-98.3 136C314.3 435 282.9 443.5 249.5 443.5" className="all grooves" />
    <path d="M373 250.5c0 23.8-6.7 46-18.4 64.8 -5.5 8.9-12 17-19.5 24.2C312.9 360.9 282.8 374 249.5 374" className="all grooves" />
  </VinylSvg>
);

export default Vinyl;
