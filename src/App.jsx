import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuctionContainer from "./containers/Auctions/AuctionContainer";
import AuctionDetailsContainer from "./containers/AuctionDetailsContainer/AuctionDetailsContainer";
import FormContainer from "./containers/FormContainer/FormContainer";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={AuctionContainer} />
            <Route path="/:id" Component={AuctionDetailsContainer} />
            <Route path="/form" Component={FormContainer} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
