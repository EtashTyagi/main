import React, {ReactElement} from "react";
import {useScrollTrigger} from "@mui/material";

export interface IScrollElevatorProps extends React.PropsWithChildren<any>{
    scrollThreshold?: number,
    beforeElevation?: number,
    afterElevation?: number,
}

const ScrollElevator = (props: IScrollElevatorProps) => {
    const { children, scrollThreshold } = props;
    const scrollTriggers = useScrollTrigger({
        disableHysteresis: true,
        threshold: scrollThreshold ? scrollThreshold : 0
    });
    const beforeElevation = props.beforeElevation ? props.beforeElevation : 0
    const afterElevation = props.afterElevation ? props.afterElevation : 4
    return children ? React.cloneElement(children as ReactElement, {
        elevation: scrollTriggers ? afterElevation : beforeElevation
    }) : <></>;
}

export default ScrollElevator;