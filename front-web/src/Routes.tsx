import React from "react";
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavBar";
import Orders from "./Orders";
//https://reactrouter.com/ para baixar as dependencias para rotas
function Routes(){
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
 