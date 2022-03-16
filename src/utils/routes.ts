import React from "react"

import { Top } from "pages/top";
import { AboutMe } from "pages/aboutMe";
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

export let routes: _Routes;

export let routeList: RouteInfo[];
export let sectionRouteList: RouteInfo[];

export function setupRoutes(): void {
    routes = {
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

    routeList = [
        routes.top,
        routes.about_me,
        routes.skills,
        routes.works,
        routes.contacts,
    ]

    sectionRouteList = [
        routes.about_me,
        routes.skills,
        routes.works,
        routes.contacts,
    ]

}
