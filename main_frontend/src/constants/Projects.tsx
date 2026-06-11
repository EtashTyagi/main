import {FrameworkTags, LanguageTags, ToolsTags} from "./SkillAndProjectTags";
import {
    AddShoppingCart,
    ChildCare,
    Dashboard,
    Lock,
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
import SelfLockImg from "../resources/selflock.jpg"

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
        sideBarIcon: (SportsEsports),
        imageSrc: [ColorSwitchImg],
        tags: [LanguageTags.Java,
            ToolsTags.Intellij,
            "JavaFX"],
        slug: "color_switch",
        status: ProjectStatus.Completed
    },
    {
        title: "SelfLock",
        sidebarTitle: "Android Addiction Control",
        shortDesc: "App & website usage control for Android",
        sideBarIcon: (Lock),
        imageSrc: [SelfLockImg],
        tags: [LanguageTags.Kotlin,
            FrameworkTags.Android,
            FrameworkTags.VibeCoding,
            ToolsTags.KiloCode,
            ToolsTags.GitHub],
        slug: "selflock",
        status: ProjectStatus.Completed,
    },
    {
        title: "Audit Dashboard",
        sidebarTitle: "Audit Dashboard",
        shortDesc: "Kibana logstash...",
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