import React from "react"
import { APIResource } from "utils/resourceTypes/base"

type _SiteState = {
    loading: boolean,
    data: APIResource[],
}

export const { Provider, Consumer } = React.createContext<_SiteState>({
    loading: false,
    data: [],
});
