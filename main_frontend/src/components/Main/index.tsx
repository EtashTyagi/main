import React from 'react';
import StyledMainBox from "./style";
import { Routes, Route } from "react-router-dom";
import routeToComponent from "./routeToComponent";
import {isExpandable} from "../../constants/routes";

const Main = () => {

    return (
        <StyledMainBox component={"main"}>
            <Routes>
                {
                    Object.keys(routeToComponent).map(
                        (e) => {
                            return (
                            <Route path={e + (isExpandable[e] ? "/*" : "")}
                                   element={routeToComponent[e]} key={e}/>)
                        }
                    )
                }
            </Routes>
        </StyledMainBox>
    );
};
export default Main;