import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Components/Header';
import Rules from './Components/Rules';
import './Styles/App.scss';
import { SheetContext } from './Components/contexts/SheetContext';
import { ThemeContext } from './Components/contexts/ThemeContext';
import { DynamicSheetField } from './Components/Helpers';
import Loader from './Components/Loader';
import ThemePicker from './Components/ThemePicker';
import ScrollToTop from './Components/ScrollToTop';
import Pinglists from './Components/Pinglists';

const App = () => {
	const [isLoading	, setIsLoading	] = useState(true),
				[loadPercent, setLoadPercent] = useState(0),
				[theme			, setTheme			] = useContext(ThemeContext);

	const sheetData = useContext(SheetContext);

	useEffect(() => {
		if(isLoading) {
			const totalSheets		= sheetData.sheets.length,
						loadedSheets  = sheetData.sheets.map(e => e.status).filter(e => e === 3).length;

			setLoadPercent(Math.trunc(100*loadedSheets/totalSheets));
			
			if(loadedSheets === totalSheets) setIsLoading(false);
		}
	}, Object.values(sheetData.sheets));

	useEffect(() => {
		const defocusButtons = e => {
			if(document.activeElement.toString() === '[object HTMLButtonElement]') document.activeElement.blur();
		};

		sheetData.updateSheets();

		document.addEventListener('click', defocusButtons, true);

		return () => {
			document.removeEventListener('click', defocusButtons);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return isLoading ? (
		<Loader percentage={loadPercent} />
	) : (
		<div className={`App theme${theme}`}>
			<Container fluid className="HeaderRow">
				<Row>
					<Col className="HeaderContent">
						<Header />
						<ThemePicker />
					</Col>
				</Row>
			</Container>

			<Container fluid className="ContentRow">
				<Row xs={"1"} sm={"1"} md={"2"} lg={"2"} xl={"2"}>
					<Col>
						<div className="RulesCol">
							<Rules />
						</div>
					</Col>
					<Col>
						<div className="PinglistCol">
							<Pinglists />
						</div>
					</Col>
				</Row>
			</Container>

			<Container fluid className="FooterRow">
				<Row>
					<Col>
						<DynamicSheetField fieldId={32} /> Coding by <b>Duosora</b>.
					</Col>
				</Row>

				<Row>
					<Col>
						<DynamicSheetField fieldId={33} />
					</Col>
				</Row>
			</Container>

			<ScrollToTop />
		</div>
	)
}

export default App;
