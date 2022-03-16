import React from "react"

import { Top } from "pages/top";
import { AboutMe } from "pages/about_me";
import { Skills } from "pages/skills";
import { Works } from "pages/works";
import { Contacts } from "pages/contacts";

export type RouteInfo = {
    name: string,
    path: string,
    page: React.ComponentType,
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
        page: Top,
    },
    about_me: {
        name: "About Me",
        path: "/about_me",
        page: AboutMe,
    },
    skills: {
        name: "Skills",
        path: "/skills",
        page: Skills,
    },
    works: {
        name: "Works",
        path: "/works",
        page: Works,
    },
    contacts: {
        name: "Contacts",
        path: "/contacts",
        page: Contacts,
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
