import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from "/Users/danielporras/mcm/src/components/LoginForm.jsx";
import ColorWheel from "/Users/danielporras/mcm/src/components/ColorWheel.jsx";
import RegisterForm from "/Users/danielporras/mcm/src/components/RegisterForm.jsx";


const Routing = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

return <Router >
    <Routes>
    <Route path="/" element={<RegisterForm />}/> {/* 👈 Renders at /app/ */}
    <Route path="/" element={<LoginForm/>}/> {/* 👈 Renders at /app/ */}
    <Route path="/login/" element={<ColorWheel/>}/> {/* 👈 Renders at /app/ */}


    </Routes>
</Router>
}

export default Routing;
