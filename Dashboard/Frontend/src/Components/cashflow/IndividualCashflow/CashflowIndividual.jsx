import CurrentIndividual from "./CurrentIndividual.jsx";
import SixthIndividual from "./SixthIndividual.jsx";
import FifthIndividual from "./FifthIndividual.jsx";
import ForthIndividual from "./ForthIndividual.jsx";
import ThirdIndividual from "./ThirdIndividual.jsx";
import SecondIndividual from "./SecondIndividual.jsx";

export default function CashflowIndividual() {



    return (
        <>
            {/* Main Container */}
        
                 

                     {/* Current Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/1" &&
                           <CurrentIndividual/>



                        }
                 

                     {/* Second Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/2" &&
                           <SecondIndividual/>



                        }
                 

                     {/* third Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/3" &&
                           <ThirdIndividual/>



                        }
                 

                     {/* forth Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/4" &&
                           <ForthIndividual/>



                        }
                 

                     {/* fifth Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/5" &&
                           <FifthIndividual/>



                        }

                 

                     {/* Sixth Month Data */}
                        {
                            location.pathname == "/cashflow/SixMonth/6" &&
                           <SixthIndividual/>



                        }

                      

    
        </>
    )
}