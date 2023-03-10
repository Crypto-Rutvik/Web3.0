
import {Footer, Loader, Navbar, Services, /*Transactions,*/ Welcome} from "./components";

const App = () => (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">   
        <Navbar/>
        <Welcome/>
        </div>
      <Services/>
      
      <Footer/>
    </div>
)

export default App
