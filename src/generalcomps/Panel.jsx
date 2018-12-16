import React from 'react';
import mwSmall from '../assets/images/mwLogoSmall.png';

const Panel = ({ address }) => {
  return (
    <div className="address-panel">
              <button>SET AS DEFAULT</button>
              {address.favorited ?
                <div className="favorited-logo">
                  <img src={mwSmall} alt="defaultSymbol" />
                </div>
                :
                <div></div>
              }
              <div>
                {address.label}: {address.address + " " + address.address2 + ", " + address.city + ", " + address.state + ", " + address.zip}
              </div>
            </div>
  );
};

export default Panel;