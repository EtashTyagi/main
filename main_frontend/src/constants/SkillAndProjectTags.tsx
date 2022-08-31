import {ReactElement} from "react";
import JavaIcon from "../resources/JavaIcon";
import CppIcon from "../resources/CppIcon";
import PythonIcon from "../resources/PythonIcon";
import CIcon from "../resources/CIcon";
import JavascriptIcon from "../resources/JavascriptIcon";
import TypescriptIcon from "../resources/TypescriptIcon";
import MatlabIcon from "../resources/MatlabIcon";
import RIcon from "../resources/RIcon";
import ReactIcon from "../resources/ReactIcon";
import DjangoIcon from "../resources/DjangoIcon";
import BootstrapIcon from "../resources/BootstrapIcon";
import AndroidIcon from "../resources/AndroidIcon";
import MaterialUiIcon from "../resources/MaterialUiIcon";
import SpringIcon from "../resources/SpringIcon";
import ReactNativeIcon from "../resources/ReactNativeIcon";
import LinuxIcon from "../resources/LinuxIcon";
import DockerIcon from "../resources/DockerIcon";
import MySqlIcon from "../resources/MySqlIcon";
import RaspberryIcon from "../resources/RaspberryIcon";
import GithubIcon from "../resources/GithubIcon";
import IntellijIcon from "../resources/IntellijIcon";
import CloudflareIcon from "../resources/CloudflareIcon";
import MongoDbIcon from "../resources/MongoDbIcon";
import PortainerIcon from "../resources/PortainerIcon";
import AzureIcon from "../resources/AzureIcon";

export enum LanguageTags {
    Java="Java",
    Cpp="C++",
    Python="Python",
    C="C",
    JavaScript="Java Script",
    TypeScript="Type Script",
    Matlab="Matlab",
    R="R",
}

export enum FrameworkTags {
    React="React",
    Django="Django",
    Bootstrap="Bootstrap",
    Android="Android",
    MUI="Material-ui",
    Spring="Spring",
    ReactNative="React Native",
}

export enum ToolsTags {
    Linux="Linux",
    Docker="Docker",
    MySQL="MySQL",
    Raspberry="Raspberry",
    GitHub="GitHub",
    Intellij="Intellij",
    Cloudflared="Cloudflared",
    MongoDb="MongoDb",
    Portainer="Portainer",
    Azure="Azure",
}

export const TagToIcon: {[key: string]: ReactElement} = {
    [LanguageTags.Java]: <JavaIcon/>,
    [LanguageTags.Cpp]: <CppIcon/>,
    [LanguageTags.Python]: <PythonIcon/>,
    [LanguageTags.C]: <CIcon/>,
    [LanguageTags.JavaScript]: <JavascriptIcon/>,
    [LanguageTags.TypeScript]: <TypescriptIcon/>,
    [LanguageTags.Matlab]: <MatlabIcon/>,
    [LanguageTags.R]: <RIcon/>,
    [FrameworkTags.React]: <ReactIcon/>,
    [FrameworkTags.Django]: <DjangoIcon/>,
    [FrameworkTags.Bootstrap]: <BootstrapIcon/>,
    [FrameworkTags.Android]: <AndroidIcon/>,
    [FrameworkTags.MUI]: <MaterialUiIcon/>,
    [FrameworkTags.Spring]: <SpringIcon/>,
    [FrameworkTags.ReactNative]: <ReactNativeIcon/>,
    [ToolsTags.Linux]: <LinuxIcon/>,
    [ToolsTags.Docker]: <DockerIcon/>,
    [ToolsTags.MySQL]: <MySqlIcon/>,
    [ToolsTags.Raspberry]: <RaspberryIcon/>,
    [ToolsTags.GitHub]: <GithubIcon/>,
    [ToolsTags.Intellij]: <IntellijIcon/>,
    [ToolsTags.Cloudflared]: <CloudflareIcon/>,
    [ToolsTags.MongoDb]: <MongoDbIcon/>,
    [ToolsTags.Portainer]: <PortainerIcon/>,
    [ToolsTags.Azure]: <AzureIcon/>
}
