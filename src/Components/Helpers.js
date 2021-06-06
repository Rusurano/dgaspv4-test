import React, { Fragment, useContext, useEffect, useState } from 'react';
import { SheetContext } from './contexts/SheetContext';
import regexifyString from 'regexify-string';

// Helper components.
const DynamicField = ({ className, content }) => content ? <span className={className ? className : ''} dangerouslySetInnerHTML={{ __html: content}}></span> : <span>Error Fetching Content.</span>;

/* 
*   DynamicSheetField
*   
*   Supports JSX, HTML, plain text.
*   If need be, the replaced placeholder should be wrapped in %%, e.g. %DATA%
*/
const DynamicSheetField = ({ fieldId, placeholders }) => {
  const { sheets } = useContext(SheetContext);

  const [content, setContent] = useState('');

  useEffect(() => {
    let sheet_string = sheets[6].content[fieldId][0];

    if(placeholders) {
      sheet_string = regexifyString({
        pattern: /\%.*?\%/gim,
        decorator: match => (placeholders.find(e => e[0] == match) || [])[1],
        input: sheet_string
      });
    }

    setContent(sheet_string);
  },[fieldId]);

  return Array.isArray(content) ? content.map((item, index) => typeof item === 'string' || item instanceof String ? <DynamicField content={item} /> : <Fragment key={index}>{item}</Fragment>) : <DynamicField content={content} />;
};

export { DynamicField, DynamicSheetField };