import AnimatedCursor from "react-animated-cursor"
import Home from "./Components/Screens/Home/Home";
import './App.css';
import Products from "./Context/ContextProducts";
import {useContext} from "react";
import Loeader from "./Components/Loader/Loader";


function App() {

    const {loading} = useContext(Products);


    return (
        <>

            <AnimatedCursor innerSize={15}
                            outerSize={35}
                            color='0, 0, 0'
                            outerAlpha={0.2}
                            innerScale={0.7}
                            outerScale={2}
                            clickables={[
                                'a',
                                'input[type="text"]',
                                'input[type="email"]',
                                'input[type="number"]',
                                'input[type="submit"]',
                                'input[type="image"]',
                                'label[for]',
                                'select',
                                'textarea',
                                'button',
                                '.link'
                            ]}/>
            {
                loading && (<Loeader/>)
            }

            <Home loading={loading} />
        </>
    );
}

export default App;
