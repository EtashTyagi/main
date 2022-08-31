import {ReactElement} from "react";
import {FrameworkTags, LanguageTags, ToolsTags} from "./SkillAndProjectTags";
import {Stack} from "@mui/material";
import {AddShoppingCart, Dashboard, MusicNote, Security, SportsEsports, WhatsApp} from "@mui/icons-material";
import * as React from "react";
import {SvgIconProps} from "@mui/material/SvgIcon";
import FcsEcommerceImg from "../resources/fcs_ecommerce.png"
import SendItImg from "../resources/send_it.png"
import KasekiImg from "../resources/kaseki.jpg"
import ColorSwitchImg from "../resources/color_switch.png"
import AuditDashboardImg from "../resources/audit_dashboard.png"
import ReconGhostImg from "../resources/recon_ghost.png"

export enum ProjectStatus {
    Deployed="Deployed",
    Completed="Completed",
    UnderConstruction="under-construction",
    Abandoned="Abandoned"
}
export interface IProject {
    title: string,
    sidebarTitle: string,
    shortDesc: string,
    longDesc: ReactElement,
    sideBarIcon: React.ElementType<SvgIconProps>;
    imageSrc: string[],
    tags: (FrameworkTags | ToolsTags | LanguageTags | string)[],
    slug: string,
    status: ProjectStatus
}
const projectDetails: IProject[] = [
    {
        title: "Electroverse",
        sidebarTitle: "E-commerce Website",
        shortDesc: "Secure E-Commerce Website",
        longDesc: (
            <Stack>
                Website made as a group project for Foundation of Computer Security course in IIITD.
                Has portals for buyer seller and admin.
            </Stack>
        ),
        sideBarIcon: (AddShoppingCart),
        imageSrc: [FcsEcommerceImg],
        tags: [LanguageTags.Python,
            FrameworkTags.Django,
            FrameworkTags.Bootstrap,
            ToolsTags.Docker,
            ToolsTags.MySQL,
            "Nginx"],
        slug: "electroverse",
        status: ProjectStatus.Deployed
    },
    {
        title: "Kaseki",
        sidebarTitle: "Youtube Song Downloader",
        shortDesc: "Youtube Song Downloader And Player",
        longDesc: (
            <Stack>
                Youtube song download
            </Stack>
        ),
        sideBarIcon: (MusicNote),
        imageSrc: [KasekiImg],
        tags: [LanguageTags.Java,
            FrameworkTags.Android,
            ToolsTags.Intellij],
        slug: "kaseki",
        status: ProjectStatus.Completed
    },
    {
        title: "Color Switch",
        sidebarTitle: "Color Switch Game",
        shortDesc: "JavaFx clone of color switch game",
        longDesc: (
            <Stack>
                AP
            </Stack>
        ),
        sideBarIcon: (SportsEsports),
        imageSrc: [ColorSwitchImg],
        tags: [LanguageTags.Java,
            ToolsTags.Intellij,
            "JavaFX"],
        slug: "color_switch",
        status: ProjectStatus.Completed
    },
    {
        title: "Audit Dashboard",
        sidebarTitle: "Audit Dashboard",
        shortDesc: "Kibana logstash...",
        longDesc: (
            <Stack>
                Internship Project
            </Stack>
        ),
        sideBarIcon: (Dashboard),
        imageSrc: [AuditDashboardImg],
        tags: [LanguageTags.Java,
            LanguageTags.TypeScript,
            FrameworkTags.React,
            FrameworkTags.Spring,
            "ElasticDB", "Logstash", "Kibana"],
        slug: "audit_dashboard",
        status: ProjectStatus.Completed
    },
    {
        title: "Recon Ghost",
        sidebarTitle: "Kernel Level Firewall",
        shortDesc: "Kernel firewall module for defeating port scans",
        longDesc: (
            <Stack>
                Done as a part of network and system security course at IIITD
            </Stack>
        ),
        sideBarIcon: (Security),
        imageSrc: [ReconGhostImg],
        tags: [LanguageTags.C,
            ToolsTags.Linux],
        slug: "recon_ghost",
        status: ProjectStatus.Completed
    },
    {
        title: "Send It!",
        sidebarTitle: "Web Messaging App",
        shortDesc: "whatsapp clone web",
        longDesc: (
            <Stack>
                Indefinitely on hold.
            </Stack>
        ),
        sideBarIcon: (WhatsApp),
        imageSrc: [SendItImg],
        tags: [LanguageTags.Java,
            LanguageTags.JavaScript,
            FrameworkTags.React,
            FrameworkTags.Bootstrap,
            FrameworkTags.Spring,
            ToolsTags.GitHub],
        slug: "send_it",
        status: ProjectStatus.Abandoned
    },
]

export default projectDetails