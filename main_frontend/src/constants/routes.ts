export const ABOUT_ME_ROUTE = "/"
export const PROJECTS_ROUTE = "/projects"
export const SYSTEM_ARCHITECTURE_ROUTE = "/devops"
export const PROFILES_ROUTE = "/profiles"
export const DOWNLOADS_ROUTE = "/downloads"

export const isExpandable: {[key: string]: boolean} = {
    [ABOUT_ME_ROUTE]: false,
    [PROJECTS_ROUTE]: true,
    [SYSTEM_ARCHITECTURE_ROUTE]: false,
    [PROFILES_ROUTE]: false,
    [DOWNLOADS_ROUTE]: false
}