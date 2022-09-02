import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import {TextContextProvider} from "./context/textContext";
import {ImageContextProvider} from "./context/imgContext";
import {HolidayContextProvider} from "./context/holidayContext";



const wrapper = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh'
}
const App = () => {
	return (
		<div style={wrapper}>
			
				{/*<HolidayContextProvider>*/}
					<ImageContextProvider>
						{/*<TextContextProvider>*/}
							<Header/>
							<Card/>
							<Footer/>
						{/*</TextContextProvider>*/}
					</ImageContextProvider>
				{/*</HolidayContextProvider>*/}
			
		
		</div>
	);
}

export default App;
