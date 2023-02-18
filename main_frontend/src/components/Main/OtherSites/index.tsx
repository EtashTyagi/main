import React from 'react';
import {Stack, Toolbar} from "@mui/material";

const DevOps = () => {
    return (
        <>
            <Toolbar/>
            <Stack>
                Todo: Info about hosting, sites, etc...<br/>
                <ul>
                    <li><a href={"https://shop.etashtyagi.in"} target={"_blank"}  rel="noreferrer">Ecommerce-site</a></li>
                    <li><a href={"https://my.etashtyagi.in"} target={"_blank"}  rel="noreferrer">Other Personal Website</a></li>
                    <li><a href={"https://git.etashtyagi.in"} target={"_blank"}  rel="noreferrer">Private Git</a></li>
                </ul>
            </Stack>
        </>
    );
};

export default DevOps;