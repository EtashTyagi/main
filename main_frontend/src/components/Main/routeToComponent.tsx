import {
    ABOUT_ME_ROUTE, SYSTEM_ARCHITECTURE_ROUTE,
    PROJECTS_ROUTE
} from "../../constants/routes";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import DevOps from "./SystemArchitecture";
import {ReactElement} from "react";


interface IRouteToComponentType {
    [key: string]: ReactElement
}
const routeToComponent: IRouteToComponentType = {
    [ABOUT_ME_ROUTE]: <AboutMe/>,
    [PROJECTS_ROUTE]: <Projects/>,
    [SYSTEM_ARCHITECTURE_ROUTE]: <DevOps/>
}

export default routeToComponent