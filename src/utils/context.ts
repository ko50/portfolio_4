import React from "react"
import { APIResource } from "utils/resourceTypes/base"

export type SiteState = {
    loading: boolean,
    data: APIResource[],
}

export const { Provider, Consumer } = React.createContext<SiteState>({
    loading: false,
    data: [],
});
