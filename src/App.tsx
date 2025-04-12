import React from "react";//
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Service from "./components/Service.tsx";
import "../i18n.ts"; // Importa a configuração do i18next


const App: React.FC= () => {
    

  
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Service/>
            <Contact />
            <Footer />
        </>
    );
};

export default App;
