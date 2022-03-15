import React from "react"

import { PageWrapper } from "components/common/page_wrapper"

export type RouteInfo = {
    name: string,
    path: string,
    page: React.ComponentType<any>,
}

type _Routes = {
    top: RouteInfo,
    about_me: RouteInfo,
    skills: RouteInfo,
    works: RouteInfo,
    contacts: RouteInfo,
}

export const routes: _Routes = {
    top: {
        name: "Top",
        path: "/",
        page: PageWrapper,
    },
    about_me: {
        name: "About Me",
        path: "/about_me",
        page: PageWrapper,
    },
    skills: {
        name: "Skills",
        path: "/skills",
        page: PageWrapper,
    },
    works: {
        name: "Works",
        path: "/works",
        page: PageWrapper,
    },
    contacts: {
        name: "Contacts",
        path: "/contacts",
        page: PageWrapper,
    },
}

export const routeList: RouteInfo[] = [
    routes.top,
    routes.about_me,
    routes.skills,
    routes.works,
    routes.contacts,
]

export const sectionRouteList: RouteInfo[] = [
    routes.about_me,
    routes.skills,
    routes.works,
    routes.contacts,
]
