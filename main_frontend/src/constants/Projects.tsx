import * as React from "react";
import {ReactElement} from "react";
import {FrameworkTags, LanguageTags, ToolsTags} from "./SkillAndProjectTags";
import {Stack} from "@mui/material";
import {
    AddShoppingCart,
    ChildCare,
    Dashboard,
    MusicNote,
    Security,
    SportsEsports,
    WhatsApp,
    Window
} from "@mui/icons-material";
import {SvgIconProps} from "@mui/material/SvgIcon";
import FcsEcommerceImg from "../resources/fcs_ecommerce.png"
import SendItImg from "../resources/send_it.png"
import KasekiImg from "../resources/kaseki.jpg"
import ColorSwitchImg from "../resources/color_switch.png"
import VardaanImg1 from "../resources/vardaan_ngo_1.png"
import VardaanImg2 from "../resources/vardaan_ngo_2.png"
import VardaanImg3 from "../resources/vardaan_ngo_3.png"
import VardaanImg4 from "../resources/vardaan_ngo_4.png"
import MainImg from "../resources/main.png"
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
                <ul>
                    <li>Website made as a group project for Foundation of Computer Security course in IIITD.</li>
                    <li>Has portals for buyer seller and admin.</li>
                    <li>Payments using stripe api.</li>
                    <li>Inventory and payment tracking.</li>
                    <li>Seller authorization by admin.</li>
                    <li>Deployed on my local server <a href={"https://shop.etashtyagi.in"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                    <li>Source Code <a href={"https://git.etashtyagi.in/EtashTyagi/fcs_ecommerce"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                </ul>
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
        status: ProjectStatus.Deployed,
    },
    {
        title: "Kaseki",
        sidebarTitle: "Youtube Song Downloader",
        shortDesc: "Youtube Song Downloader And Player",
        longDesc: (
            <Stack>
                <ul>
                    <li>Android app to download songs or podcasts from youtube.</li>
                    <li>Uses official google youtube api.</li>
                    <li>Can play/autoplay, seek, delete songs.</li>
                    <li>Done as a side project in team of 2.</li>
                    <li>Source Code <a href={"https://github.com/EtashTyagi/Kaseki"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                    <li>Please replace with own api key if limit exceeded error on search.</li>
                </ul>
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
                <ul>
                    <li>JavaFx desktop application game similar to color switch.</li>
                    <li>No gaming libraries, collision detection using geometry.</li>
                    <li>Supports custom colors, local leaderboard, login/signup.</li>
                    <li>Done as Advanced Programming project in IIITD in team of 2.</li>
                    <li>Source Code <a href={"https://github.com/EtashTyagi/Color-Switch-Game"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                </ul>
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
                <ul>
                    <li>Internship project at deutsche telekom digital labs.</li>
                    <li>Created a system to record business events and a ui to show them.</li>
                    <li>Supported dynamic filters, datetime filtering sorting event type filtering, etc...</li>
                </ul>
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
        title: "Website for NGO",
        sidebarTitle: "Website for NGO",
        shortDesc: "Vardaan Center For Special Children",
        longDesc: (
            <Stack>
                <ul>
                    <li>React Website for NGO.</li>
                    <li>Material-UI for styling.</li>
                    <li>Deployed on my raspberry-pi <a href={"https://vardaancenterforspecialchildren.in"} target={"_blank"} rel={"noreferrer"}>
                            here
                        </a>.
                    </li>
                </ul>
            </Stack>
        ),
        sideBarIcon: (ChildCare),
        imageSrc: [VardaanImg1, VardaanImg2, VardaanImg3, VardaanImg4],
        tags: [LanguageTags.JavaScript,
            FrameworkTags.React,
            FrameworkTags.MUI,
            ToolsTags.Raspberry],
        slug: "vardaan_ngo",
        status: ProjectStatus.Deployed
    },
    {
        title: "Personal Website",
        sidebarTitle: "Personal Website",
        shortDesc: "Inception?",
        longDesc: (
            <Stack>
                <ul>
                    <li>Main frontend is hosted on cloudflare pages.</li>
                    <li>Backend is hosted on my server, managed through portainer.</li>
                    <li>Server has scheduled downtime from 12am to 8am IST everyday.</li>
                    <li>Source Code <a href={"https://github.com/EtashTyagi/main"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                </ul>
            </Stack>
        ),
        sideBarIcon: (Window),
        imageSrc: [MainImg],
        tags: [LanguageTags.TypeScript,
            LanguageTags.Java,
            FrameworkTags.React,
            FrameworkTags.Spring,
            FrameworkTags.MUI,
            ToolsTags.Cloudflare,
            ToolsTags.Docker
        ],
        slug: "personal_website",
        status: ProjectStatus.Deployed
    },
    {
        title: "Recon Ghost",
        sidebarTitle: "Kernel Level Firewall",
        shortDesc: "Kernel firewall module for defeating port scans",
        longDesc: (
            <Stack>
                <ul>
                    <li>Done as a Network and System Security-2 assignment in IIITD.</li>
                    <li>Kernel level stateful firewall for linux.</li>
                    <li>Can detect, log and stop many types of network port scanning techniques.</li>
                    <li>Source Code <a href={"https://github.com/EtashTyagi/recon_ghost"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                </ul>
            </Stack>
        ),
        sideBarIcon: (Security),
        imageSrc: [ReconGhostImg],
        tags: [LanguageTags.C,
            ToolsTags.Linux],
        slug: "recon_ghost",
        status: ProjectStatus.Completed,
    },
    {
        title: "Send It!",
        sidebarTitle: "Web Messaging App",
        shortDesc: "whatsapp clone web",
        longDesc: (
            <Stack>
                <ul>
                    <li>Peer to peer messaging app.</li>
                    <li>Abandoned.</li>
                    <li>Deployed on github <a href={"https://etashtyagi.github.io/SendIt/"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                    <li>Source Code <a href={"https://github.com/EtashTyagi/SendIt"} target={"_blank"} rel="noreferrer">here</a>.
                    </li>
                </ul>
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
        status: ProjectStatus.Abandoned,
    },
]

export default projectDetails