import React, { useContext } from 'react';
import { DynamicField } from './Helpers';
import { SheetContext } from './contexts/SheetContext';

const Rules = () => {
  const sheetData = useContext(SheetContext);

	const printRule = (item,index) => {
		let	ruleText = item[1];
		
		if(ruleText !== undefined) {
			if(ruleText.startsWith('-')) ruleText = "<br/>";

			if(item[0].startsWith('gasp_')) {			
				if(ruleText.startsWith('• ')) ruleText = "<li>"+ruleText.substring(2)+"</li>";
				
				return ruleText !== "-<br/>" ? <DynamicField key={index} className="rulePosition" content={ruleText} /> : <span key={index}></span>;
			}
		}
		
		return <span key={index}></span>;
	}
	
	return (
		<ul>
			{ sheetData.sheets[2].content.map((item,index) => printRule(item,index)) }
		</ul>
	)
}

export default Rules;