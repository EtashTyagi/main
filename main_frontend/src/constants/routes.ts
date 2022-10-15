export const ABOUT_ME_ROUTE = "/"
export const PROJECTS_ROUTE = "/projects"
export const OTHER_SITES_ROUTE = "/other_sites"
export const PROFILES_ROUTE = "/profiles"
export const DOWNLOADS_ROUTE = "/downloads"

export const isExpandable: {[key: string]: boolean} = {
    [ABOUT_ME_ROUTE]: false,
    [PROJECTS_ROUTE]: true,
    [OTHER_SITES_ROUTE]: false,
    [PROFILES_ROUTE]: false,
    [DOWNLOADS_ROUTE]: false
}