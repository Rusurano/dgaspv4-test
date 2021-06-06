import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Form, Input, Button, InputGroup, InputGroupAddon, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { DynamicSheetField } from './Helpers';
import { SheetContext } from './contexts/SheetContext';

const PinglistKeyword = ({ keyword, onToggle }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    onToggle(keyword,selected);
  },[selected]);

  const toggle = () => setSelected(prevState => !prevState);

  return (
    <Fragment>
      <Button outline className="keywordButton"	color="info" onClick={toggle} active={selected}>
				{keyword}
			</Button>
    </Fragment>
  )
}

const PinglistFilters = ({ id, breed, coverage, sellerType, keywords, setBreed, setCoverage, setSellerType, setKeywords }) => {
  const { sheets } = useContext(SheetContext);

  const [resellPopoverOpen, setResellPopoverOpen] = useState(false);

  const resellPopoverToggle = () => setResellPopoverOpen(prevState => !prevState);

  return (
    <Form>
      <Container>
        <Row className="PinglistSelectors">
          <Col xs="12" sm="12" md="12" lg="12" xl={{ size: 4, offset: 0 }}>
            <Input
              type="select"
              name="selectedBreed"
              value={breed}
              defaultValue={0}
              onChange={e => setBreed(e.target.value)}
            >
              <option disabled value="0">
                {sheets[6].content[24][0]}
              </option>
              {
                sheets[4].content.map((item,index) => (
                  <option key={index} value={item[0]}>{item[0]}</option>
                ))
              }
            </Input>
          </Col>

          <Col xs="12" sm="12" md="12" lg="12" xl={{ size: 4, offset: 0 }}>
            <Input
              type="select"
              name="selectedCoverage"
              value={coverage}
              defaultValue={0}
              onChange={e => setCoverage(e.target.value)}
            >
              <option value="0" disabled>
                {sheets[6].content[25][0]}
              </option>
              <option value="Accents">Accent (up to 30%)</option>
              <option value="Skincents">Skincent (31% to 99%)</option>
              <option value="Skins">Skin (100%)</option>
            </Input>
          </Col>

          <Col xs="12" sm="12" md="12" lg="12" xl={{ size: 4, offset: 0 }}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button className="form-control PopoverResell" type="button" color="light" id={`PopoverResell${id}`}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>

                <UncontrolledPopover
                  trigger="hover"
                  placement="bottom"
                  isOpen={resellPopoverOpen}
                  target={`PopoverResell${id}`}
                  toggle={resellPopoverToggle}
                >
                  <PopoverHeader><DynamicSheetField fieldId={11} /></PopoverHeader>
                  <PopoverBody><DynamicSheetField fieldId={12} /></PopoverBody>
                </UncontrolledPopover>
              </InputGroupAddon>
              <Input
                type="select"
                name="selectedResell"
                value={sellerType}
                defaultValue={-1}
                onChange={e => setSellerType(e.target.value)}
              >
                <option value="-1" disabled>
                  {sheets[6].content[26][0]}
                </option>
                <option value="0">{sheets[6].content[52][0]}</option>
                <option value="1">{sheets[6].content[51][0]}</option>
                <option value="help1" style={{ fontStyle: 'italic' }} disabled>{sheets[6].content[50][0]}</option>
              </Input>
            </InputGroup>
          </Col>
        </Row>

        <h4>Keywords</h4>

        <Row>
          <Col>
            <Container className="keywordContainer">
              <Row xs="1" sm="1" md="1" lg="1" xl="2">
                {
                  sheets[3].content.map((item,index) => (
                    <Col key={index}>
                      <PinglistKeyword keyword={item} onToggle={(keyword, selected) => setKeywords(selected ? keywords.concat(keyword) : keywords.filter(e => `${e}` !== `${keyword}`))} />
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Form>
  )
};

export default PinglistFilters;