// @ts-ignore
import Resume from "../downloads/Resume_Etash.pdf"
// @ts-ignore
import Class10 from "../downloads/class_10.pdf"
// @ts-ignore
import Class12 from "../downloads/class_12.pdf"
import * as React from "react";
import {SvgIconProps} from "@mui/material/SvgIcon";
import {PictureAsPdf} from "@mui/icons-material";

export interface IDownload {
    name: string;
    icon: React.ElementType<SvgIconProps>;
    path: string;
}

const MyDownloads: IDownload[] = [
    {
        name: "Resume",
        icon: PictureAsPdf,
        path: Resume
    },
    {
        name: "Class 10 transcript",
        icon: PictureAsPdf,
        path: Class10
    },
    {
        name: "Class 12 transcript",
        icon: PictureAsPdf,
        path: Class12
    }
]



export default MyDownloads