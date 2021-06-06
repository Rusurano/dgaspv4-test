import React, { createContext, useState } from 'react';
import axios from 'axios';

const API_KEY  			 = 'AIzaSyDGLVvBm5uNAMlLEV1q-h9Gpu1misQg6I8',
			RULES_SHEET_ID = '1Kh5Fd40b-dXtLtCPNTuLHd_fwVC8I9Dvl3fO5cWmogA',
			PINGS_SHEET_ID = '1KGAbuq5rwbSWSLmTOeL8ng8qrprK1KfdJu_Rf_loBS8',
			FETCH_POINTS   = {
				masterList	  : [PINGS_SHEET_ID,"Master List","A2:F"],
				doNotPingList : [PINGS_SHEET_ID,"Do not ping","A2:A"],
				rulesData			: [RULES_SHEET_ID,"Gasp Translations","A:B"],
				keywordsData	: [PINGS_SHEET_ID,"Keywords","A2:A"],
				breedsData		:	[PINGS_SHEET_ID,"Breed","A2:A"],
				siteStatus		:	[PINGS_SHEET_ID,"Status","A1:A"],
				dynamicFields : [RULES_SHEET_ID,"App Content","B1:B"]
			};

export const SheetContext = createContext();

export const SheetProvider = ({ children }) => {
  const [masterList   , setMasterList   ] = useState({ status: 0, content: [] }),
        [doNotPingList, setDoNotPingList] = useState({ status: 0, content: [] }),
        [rulesData    , setRulesData    ] = useState({ status: 0, content: [] }),
        [keywordsData , setKeywordsData ] = useState({ status: 0, content: [] }),
        [breedsData   , setBreedsData   ] = useState({ status: 0, content: [] }),
        [siteStatus   , setSiteStatus   ] = useState({ status: 0, content: [] }),
        [dynamicFields, setDynamicFields] = useState({ status: 0, content: [] });

  const updateOne = async (sheetProps, sheetKey) => {
		const retrieve = async (objectName,sheetID,tabName,cellRange) => {
			const requestRange = tabName ? `'${tabName}'!${cellRange}` : cellRange;

			if(objectName === 'masterList')     setMasterList   ({...masterList   , status: 1});
      if(objectName === 'doNotPingList')  setDoNotPingList({...doNotPingList, status: 1});
      if(objectName === 'rulesData')      setRulesData    ({...rulesData    , status: 1});
      if(objectName === 'keywordsData')   setKeywordsData ({...keywordsData , status: 1});
      if(objectName === 'breedsData')     setBreedsData   ({...breedsData   , status: 1});
      if(objectName === 'siteStatus')     setSiteStatus   ({...siteStatus   , status: 1});
      if(objectName === 'dynamicFields')  setDynamicFields({...dynamicFields, status: 1});

			const fetchedData 	= await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${requestRange}`, { params: { key: API_KEY } });

			return fetchedData;
		};

		const process = (queryResult, objectName) => {
			const data   = queryResult.data;
		
			if(queryResult.status !== 200) {
				// Error fetching data.
        if(objectName === 'masterList')     setMasterList   ({...masterList   , status: 2});
        if(objectName === 'doNotPingList')  setDoNotPingList({...doNotPingList, status: 2});
        if(objectName === 'rulesData')      setRulesData    ({...rulesData    , status: 2});
        if(objectName === 'keywordsData')   setKeywordsData ({...keywordsData , status: 2});
        if(objectName === 'breedsData')     setBreedsData   ({...breedsData   , status: 2});
        if(objectName === 'siteStatus')     setSiteStatus   ({...siteStatus   , status: 2});
        if(objectName === 'dynamicFields')  setDynamicFields({...dynamicFields, status: 2});
			} else {
        if(objectName === 'masterList')     setMasterList   ({...masterList   , status: 3, content: data.values});
        if(objectName === 'doNotPingList')  setDoNotPingList({...doNotPingList, status: 3, content: data.values});
        if(objectName === 'rulesData')      setRulesData    ({...rulesData    , status: 3, content: data.values});
        if(objectName === 'keywordsData')   setKeywordsData ({...keywordsData , status: 3, content: data.values});
        if(objectName === 'breedsData')     setBreedsData   ({...breedsData   , status: 3, content: data.values});
        if(objectName === 'siteStatus')     setSiteStatus   ({...siteStatus   , status: 3, content: data.values});
        if(objectName === 'dynamicFields')  setDynamicFields({...dynamicFields, status: 3, content: data.values});
			}
		};

		try {
			const retrievedData = await retrieve(sheetKey, ...sheetProps);
			process(retrievedData,sheetKey);
		} catch(error) {
			throw new Error(error);
		}
	};

  const updateAll = () => {
		for(const sheetKey in FETCH_POINTS) updateOne(FETCH_POINTS[sheetKey],sheetKey);
	};

  return <SheetContext.Provider value={{ updateMasterList: () => updateOne(FETCH_POINTS.masterList,'masterList'), updateSheet: updateOne, updateSheets: updateAll, sheets: [masterList,doNotPingList,rulesData,keywordsData,breedsData,siteStatus,dynamicFields] }}>{ children }</SheetContext.Provider>;
}