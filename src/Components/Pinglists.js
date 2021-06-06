import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Button, Input } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCaretDown, faCaretUp, faQuestionCircle, faExclamationCircle, faCheck, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { DynamicField, DynamicSheetField } from './Helpers';
import PinglistQuery from './PinglistQuery';
import PopoverHint from './PopoverHint';
import { nanoid } from 'nanoid';
import update from 'immutability-helper';
import { SheetContext } from './contexts/SheetContext';

const Pinglists = () => {
	const { sheets, updateMasterList } = useContext(SheetContext);

  const [pinglistQuery  , setPinglistQuery  ] = useState([]),
				[canGenerate		, setCanGenerate		] = useState(false),
				[genInProgress	, setGenInProgress	] = useState(false),
				[genButtonText	, setGenButtonText	] = useState(''),
        [queriesPrepared, setQueriesPrepared] = useState(0),
        [servedPinglist , setServedPinglist ] = useState('');

	useEffect(() => {
		setGenButtonText(sheets[6].content[servedPinglist === '' ? 21 : 22][0]);
	},[servedPinglist]);

	useEffect(() => {
		const currentStatus = sheets[0].status;

		if(currentStatus === 1) {
			setGenButtonText(sheets[6].content[65][0]);
		} else if(currentStatus === 2) {
			setGenButtonText(sheets[6].content[66][0]);
		}
	},[sheets]);

	const getPinglistQueryFooter = pinglist_query => {
		const d 						= pinglist_query.filters;
		const keyword_order = sheets[6].content[1][0].split(', ');
		let returned_array 	= [];

		for(const keyword_item of keyword_order) {
			if(keyword_item === '%BREED%') 		returned_array.push((d.breed ? d.breed : ''));
			if(keyword_item === '%COVERAGE%') returned_array.push((d.coverage ? d.coverage.toLowerCase().slice(0,-1) : ''));
			if(keyword_item === '%RESELL%') 	returned_array.push((d.sellerType === '1' ? 'resell' : ''));
			if(keyword_item === '%OTHERS%') 	returned_array.push((d.keywords.join(', ')));
		}
		return returned_array;
	}

	const inArray = (arr, val, deep=false) => deep ? arr.flat(Infinity).includes(val) : arr.includes(val);

	const isUserMatchingQuery = (gasp_user, pinglist_filter_data) => {
		const userName						 = gasp_user[0].trim(),
					userBreedList				 = gasp_user[1].split(', '),
					userCoverageList		 = gasp_user[2].split(', '),
					userKeywordList			 = gasp_user[3].split(', '),
					userKeywordBanList	 = (gasp_user.length > 4) ? gasp_user[4].split(', ') : [],
					wantedKeywords			 = pinglist_filter_data.keywords.filter(e => !userKeywordBanList.includes(e)),
					matchedKeywords			 = Array.from(wantedKeywords).filter(e => userKeywordList.includes(e));

		// User doesn't want any pings? ok just yeet them off now.
		if(inArray(sheets[1].content,userName,true)) return false;

		// v1.001 starrlight's report: if any unwanted keyword got caught, filter out the user.
		if(wantedKeywords.length !== pinglist_filter_data.keywords.length) return false;

		// If wantedKeywords.length === 0, it means no keywords from filter request are wanted by user.
		if(wantedKeywords.length === 0) return false;

		if(pinglist_filter_data.sellerType === "1") {
			// If the user doesn't want to be pinged for resells, filter them out now.
			if(userKeywordBanList.includes('resell')) return false;
		}

		// If the necessary breed option is absent in this user's preference, filter them out.
		if(!userBreedList.includes(pinglist_filter_data.breed)) return false;

		// Same for type.
		if(!userCoverageList.includes(pinglist_filter_data.coverage)) return false;

		// No preference on keywords + userUnwantedKeywords = user wants any keyword except the unwanted ones.
		// Else the user wants *matching* keywords strictly
		if(!userKeywordList.includes('no preference')) {
			if(matchedKeywords.length === 0) return false;
		}

		return true;
	}

	const assemblePinglist = async () => {
		try {
			await updateMasterList();
			if(sheets[0].status === 3) {
				setGenButtonText(sheets[6].content[67][0]);
				let assembledPinglist = [];
				const userFormatting = sheets[6].content[5][0];

				for(const pinglist_query of pinglistQuery.filter(e => e.eligible)) {
					let query_pinglist = [];

					for(const gasp_user of sheets[0].content.filter(e => isUserMatchingQuery(e,pinglist_query.filters)).map(e => e[0].trim())) {
						query_pinglist.push(userFormatting.replace('%USER%',gasp_user));
					}

					assembledPinglist = [...assembledPinglist, ...query_pinglist].filter((e,i,a) => a.indexOf(e) === i);
				}
				return assembledPinglist.join(' ');
			}
		} catch(error) {
			throw new Error(error);
		}

		return '';
	};

  const servePinglist = async () => {
		setGenInProgress(true);

		const pingedUsers 			= await assemblePinglist();
		let eligibleCount 			= pinglistQuery.filter(e => e.eligible).length;
		let postLayout 					= sheets[6].content[0][0];
		const keywordsDelimiter = sheets[6].content[3][0];
		const keywordsSeparator = sheets[6].content[4][0];
		let pinglistString 			= '';
		let preparedKeywords 		= '';

		for(const pinglist_query of pinglistQuery.filter(e => e.eligible)) {
			let filterFooter = getPinglistQueryFooter(pinglist_query);

			preparedKeywords += filterFooter.filter(x => x!=='').join(keywordsDelimiter)+keywordsSeparator;
		}
	
		if(eligibleCount === 0) {
			pinglistString = sheets[6].content[7][0];
		} else {
			preparedKeywords = preparedKeywords.substring(0,preparedKeywords.length-keywordsSeparator.length);
	
			if(eligibleCount === 1) postLayout = sheets[6].content[49][0];
	
			pinglistString = postLayout.replace("%KEYWORDS%",preparedKeywords);
			pinglistString = pinglistString.replace("%PINGLIST%",pingedUsers);
		}
		setServedPinglist(pinglistString);
		setGenInProgress(false);
  };

  useEffect(() => {
		setServedPinglist('');
    setCanGenerate(pinglistQuery.some(e => e.eligible));
  },[pinglistQuery]);

  const newQuery = () => {
		const update_list = {$push: [{ id: nanoid(), expanded: true, eligible: false, filters: {} }]};
		if(pinglistQuery.some(e => e.expanded)) update_list[pinglistQuery.findIndex(e => e.expanded)] = { expanded: { $set: false }};

    setPinglistQuery(update(pinglistQuery, update_list));
    setQueriesPrepared(prevState => prevState+1);
  }

  const updateQuery = (id, expanded, eligible, filters) => {
		const update_list = { [pinglistQuery.findIndex(e => e.id === id)]: { expanded: { $set: expanded }, eligible: { $set: eligible }, filters: { $set: filters } } };

		if(pinglistQuery[pinglistQuery.findIndex(e => e.id === id)].expanded !== expanded) {
			// Expansion status changed.
			if(expanded) {
				// Now expanded. Seek and collapse the current expanded thing if any exists.
				if(pinglistQuery.some(e => e.expanded)) update_list[pinglistQuery.findIndex(e => e.expanded)] = { expanded: { $set: false }};
			}
		}

		setPinglistQuery(update(pinglistQuery, update_list));
	}

	const deleteQuery = id => setPinglistQuery(update(pinglistQuery, { $splice: [[pinglistQuery.findIndex(e => e.id === id), 1]] }));

  return (
    <div>
      <h1><DynamicSheetField fieldId={31} /></h1>

      {pinglistQuery.map((item,index) => (
        <Fragment key={item.id}>
          <PinglistQuery
						onUpdate={newData => updateQuery(item.id,newData.expanded,newData.eligible,newData.filters)}
						onRemoval={() => deleteQuery(item.id)}
						id={item.id}
						index={index}
						expanded={item.expanded}
					/>
        </Fragment>
      ))}

      <DynamicSheetField fieldId={queriesPrepared === 0 ? 13 : pinglistQuery.length === 0 ? 14 : 15} />

      <br/>
      <Button className="NewPinglistButton" onClick={newQuery}>
        <DynamicSheetField fieldId={queriesPrepared === 0 || pinglistQuery.length === 0 ? 16 : 17} />
      </Button>

      <br/><br/>

      <div id="GenPinglistPopover">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div> &nbsp;
      <PopoverHint
        targetElementId={'GenPinglistPopover'}
        header={<DynamicSheetField fieldId={9} />}
        content={<DynamicSheetField fieldId={10} />}
      />

      <CopyToClipboard text={servedPinglist}>
        <Button className={servedPinglist === '' ? 'GenerateButton' : 'CopyButton'}
                disabled={!canGenerate || genInProgress}
                onClick={servedPinglist === '' ? servePinglist : ()=>{}}
        >
          <DynamicField content={genButtonText} />
        </Button>
      </CopyToClipboard>

      <Input
        className="ReadyPinglistServeContainer"
        type="textarea"
        readOnly 
        value={servedPinglist}
      />
    </div>
  );
};

export default Pinglists;
