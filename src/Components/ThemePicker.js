import React, { useState, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { DynamicSheetField } from './Helpers';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ThemePicker = () => {
  const [theme  , setTheme  ] = useContext(ThemeContext),
        [isOpen , setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>
        <DynamicSheetField fieldId={53} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header><DynamicSheetField fieldId={54} /></DropdownItem>
        <DropdownItem onClick={() => setTheme(1)}><DynamicSheetField fieldId={55} /></DropdownItem>
        <DropdownItem onClick={() => setTheme(3)}><DynamicSheetField fieldId={56} /></DropdownItem>
        <DropdownItem onClick={() => setTheme(4)}><DynamicSheetField fieldId={57} /></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};

export default ThemePicker;