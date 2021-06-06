import React from 'react';
import logo from './../logo.png';
import { DynamicSheetField } from './Helpers';

const Header = () => (
  <div>
    <a rel="noopener noreferrer" target="_blank" href="http://www1.flightrising.com/forums/skin/2480522">
      <img alt="General Accent & Skin Pinglists - Logo" src={logo} />
    </a>

    <br/><br/>

    <p>
      <DynamicSheetField fieldId={8} />
    </p>
  </div>
);

export default Header;
