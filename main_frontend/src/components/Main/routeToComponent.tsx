import {
    ABOUT_ME_ROUTE,
    PROJECTS_ROUTE
} from "../../constants/routes";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
// import DevOps from "./OtherSites";
import {ReactElement} from "react";


interface IRouteToComponentType {
    [key: string]: ReactElement
}
const routeToComponent: IRouteToComponentType = {
    [ABOUT_ME_ROUTE]: <AboutMe/>,
    [PROJECTS_ROUTE]: <Projects/>,
    // [OTHER_SITES_ROUTE]: <DevOps/>
}

export default routeToComponent