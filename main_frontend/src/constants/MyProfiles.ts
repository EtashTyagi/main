import * as React from "react";
import {SvgIconProps} from "@mui/material/SvgIcon";
import GithubIcon from "../resources/GithubIcon";
import {LinkedIn} from "@mui/icons-material";
import HackerrankIcon from "../resources/HackerrankIcon";
import GmailIcon from "../resources/GmailIcon";
import CodeforcesIcon from "../resources/CodeforcesIcon";
import CodechefIcon from "../resources/CodechefIcon";

export interface IProfile {
    name: string,
    username: string,
    url: string,
    icon: React.ElementType<SvgIconProps>;

}

const MyProfiles: IProfile[] = [
    {
        name: "Github",
        username: "EtashTyagi",
        url: "https://github.com/EtashTyagi",
        icon: GithubIcon
    },
    {
        name: "LinkedIn",
        username: "Etash Tyagi",
        url: "https://www.linkedin.com/in/etash-tyagi-19b489214/",
        icon: LinkedIn
    },
    {
      name: "Gmail",
      username: "E T",
      url: "mailto:etash18@gmail.com",
      icon: GmailIcon
    },
    {
        name: "Hackerrank",
        username: "Etash19360",
        url: "https://www.hackerrank.com/Etash19360",
        icon: HackerrankIcon
    },
    {
        name: "Codeforces",
        username: "etash",
        url: "https://codeforces.com/profile/etash",
        icon: CodeforcesIcon
    },
    {
        name: "CodeChef",
        username: "etasht",
        url: "https://www.codechef.com/users/etasht",
        icon: CodechefIcon
    }
]

export default MyProfiles