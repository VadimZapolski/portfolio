import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import BlockSkills from "./BlockSkills/BlockSkills";
import BlockWork from "./MyWork/BlockWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <BlockSkills />
            <BlockWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
