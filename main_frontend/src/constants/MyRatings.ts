import {FrameworkTags, LanguageTags, ToolsTags} from "./SkillAndProjectTags";

export const MyLanguageRatings: {[key: string]: number} = {
    [LanguageTags.Java]: 5,
    [LanguageTags.Cpp]: 4.75,
    [LanguageTags.Python]: 4.5,
    [LanguageTags.C]: 3.75,
    [LanguageTags.JavaScript]: 3.5,
    [LanguageTags.TypeScript]: 3.5,
    [LanguageTags.Matlab]: 2,
    [LanguageTags.R]: 1.5,
}

export const MyFrameworkRatings: {[key: string]: number} = {
    [FrameworkTags.React]: 5,
    [FrameworkTags.Django]: 4.5,
    [FrameworkTags.MUI]: 4,
    [FrameworkTags.Android]: 3.75,
    [FrameworkTags.Bootstrap]: 3.5,
    [FrameworkTags.Spring]: 3.25,
    [FrameworkTags.ReactNative]: 2,
}

export const MyToolRatings: {[key: string]: number} = {
    [ToolsTags.Linux]: 5,
    [ToolsTags.Docker]: 4.75,
    [ToolsTags.MySQL]: 4.5,
    [ToolsTags.Raspberry]: 4,
    [ToolsTags.GitHub]: 3.75,
    [ToolsTags.Intellij]: 3.5,
    [ToolsTags.Cloudflare]: 3.25,
    [ToolsTags.MongoDb]: 3,
    [ToolsTags.Portainer]: 3,
    [ToolsTags.Azure]: 2
}

export const MyCombinedRatings = {...MyLanguageRatings, ...MyToolRatings, ...MyFrameworkRatings}

export const GOLD_THRESHOLD = 4
export const SILVER_THRESHOLD = 3
export const BRONZE_THRESHOLD = 1

export const GOLD_ELEVATION = 6
export const SILVER_ELEVATION = 4
export const BRONZE_ELEVATION = 2