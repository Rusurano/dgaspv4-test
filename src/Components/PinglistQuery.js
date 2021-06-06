import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col, Button, UncontrolledPopover, PopoverBody, PopoverHeader, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCaretDown, faCaretUp, faQuestionCircle, faExclamationCircle, faCheck, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { DynamicSheetField } from './Helpers';
import PinglistFilters from './PinglistFilters';

const EligiblePopover = ({ targetId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <>
      <span className={'iconEligible'} id={`iconEligible${targetId}`}>
        <FontAwesomeIcon icon={faCheck} />
      </span>

      <UncontrolledPopover trigger="hover" placement="bottom" isOpen={isOpen} target={`iconEligible${targetId}`} toggle={toggle}>
        <PopoverHeader><DynamicSheetField fieldId={41} /></PopoverHeader>
        <PopoverBody><DynamicSheetField fieldId={42} /></PopoverBody>
      </UncontrolledPopover>
    </>
  )
};

const IneligiblePopover = ({ targetId, breed, coverage, sellerType, keywords }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  const assembleErrors = () => {
    let errorlist = [];

    if(!breed) errorlist.push(36);
    if(!coverage) errorlist.push(37);
    if(!sellerType) errorlist.push(38);
    if(keywords.length === 0) errorlist.push(39);

    return errorlist;
  }

  return (
    <>
      <span className={'iconIneligible'} id={`iconIneligible${targetId}`}>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>

      <UncontrolledPopover trigger="hover" placement="bottom" isOpen={isOpen} target={`iconIneligible${targetId}`} toggle={toggle}>
        <PopoverHeader><DynamicSheetField fieldId={34} /></PopoverHeader>
        <PopoverBody>
          <DynamicSheetField fieldId={35} />
          <br/>
          {assembleErrors().map((item,index) => (
            <Fragment key={index}>
              - <DynamicSheetField fieldId={item} /><br/>
            </Fragment>
          ))}
          <br/>
          <DynamicSheetField fieldId={40} />
        </PopoverBody>
      </UncontrolledPopover>
    </>
  )
};

const PinglistQueryVerifier = ({ id, breed, coverage, sellerType, keywords }) => {
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    setEligible(breed && coverage && sellerType && keywords.length > 0);
  },[breed, coverage, sellerType, keywords]);

  return eligible ? <EligiblePopover targetId={id} /> : <IneligiblePopover targetId={id} breed={breed} coverage={coverage} sellerType={sellerType} keywords={keywords} />;
}

const PinglistQueryDeletionModal = ({ details, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevState => !prevState);

  return (
    <Fragment>
      <Button className="pinglistFilterButton1" onClick={toggle}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>

      <Modal isOpen={isOpen} toggle={toggle} className="FilterDeletionModal">
        <ModalHeader toggle={toggle}>
          <DynamicSheetField fieldId={43} />
        </ModalHeader>
        <ModalBody>
          <DynamicSheetField fieldId={44} placeholders={[['%DATA%',details]]} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onConfirm}><DynamicSheetField fieldId={45} /></Button>{' '}
          <Button color="secondary" onClick={toggle}><DynamicSheetField fieldId={46} /></Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

const PinglistQuery = ({ onUpdate, onRemoval, id, index, expanded }) => {
  const [isExpanded , setIsExpanded ] = useState(true),
        [breed      , setBreed      ] = useState(null),
        [coverage   , setCoverage   ] = useState(null),
        [sellerType , setSellerType ] = useState(null), // 0 artist, 1 reseller
        [keywords   , setKeywords   ] = useState([]);

  const toggle = () => setIsExpanded(prevState => !prevState);

  useEffect(() => {
    setIsExpanded(expanded);
  },[expanded]);

  useEffect(() => {
    onUpdate({ expanded: isExpanded, eligible: !!(breed && coverage && sellerType && keywords.length > 0), filters: { breed, coverage, sellerType, keywords: [...keywords] }});
  }, [breed,coverage,sellerType,keywords,isExpanded]);

  const PinglistFooter = isModal => {
    const printed_data = [];

    if(breed) printed_data.push(breed);
    if(coverage) printed_data.push(coverage.toLowerCase().slice(0,-1));
    if(sellerType === "1") printed_data.push('resell');
    printed_data.push(...keywords);
    
    return breed || coverage || sellerType || keywords.length > 0 ? (
      <Fragment>
        <DynamicSheetField fieldId={isModal ? 47 : 19} /> 
        {printed_data.join(', ')}
      </Fragment>
    ) : (
      <Fragment>
        <DynamicSheetField fieldId={isModal ? 48 : 18} />
      </Fragment>
    );
  }

  return (
    <Container fluid className="pinglistFilterContainer">
      <Row className="pinglistFilterHeader align-items-center">
        <Col className="pinglistFilterTitle" xs={9} sm={9} md={9} lg={9} xl={9}>
          <PinglistQueryVerifier id={id} breed={breed} coverage={coverage} sellerType={sellerType} keywords={keywords} />

          &nbsp;&nbsp;

          <span className="pinglistFilterTitleText">
            <DynamicSheetField fieldId={20} />{index+1}
          </span>
        </Col>
        <Col className="pinglistFilterOptions" xs={3} sm={3} md={3} lg={3} xl={3}>
          <PinglistQueryDeletionModal details={PinglistFooter(true)} onConfirm={onRemoval} />
          <Button className="pinglistFilterButton2" onClick={toggle}>
            <FontAwesomeIcon icon={isExpanded ? faCaretUp : faCaretDown} size="2x" />
          </Button>
        </Col>
      </Row>
      <Row className={isExpanded ? 'pinglistFilterContentBox' : 'pinglistFilterContentBox collapsed'}>
        <Col>
          <PinglistFilters
            id={id}
            breed={breed}
            coverage={coverage}
            sellerType={sellerType}
            keywords={keywords}
            setBreed={setBreed}
            setCoverage={setCoverage}
            setSellerType={setSellerType}
            setKeywords={setKeywords}
          />
        </Col>
      </Row>
      <Row className="pinglistFilterFooter">
        <Col>
          {PinglistFooter(false)}
        </Col>
      </Row>
    </Container>
  )
};

export default PinglistQuery;