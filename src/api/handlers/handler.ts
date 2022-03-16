import axios, { AxiosResponse } from "axios";

import { IHandler } from "api/handlers/base";

export class APIHandler implements IHandler {
    apiOrigin: string;
    apiPrefix: string;

    constructor(apiOrigin: string, apiPrefix: string) {
        this.apiOrigin = apiOrigin;
        this.apiPrefix = apiPrefix;
    }

    async get<T>(path: string): Promise<T[]> {
        const url = this.apiOrigin + this.apiPrefix + path

        let response: AxiosResponse<T[]>;
        try {
            response = await axios.get<T[]>(url);
        } catch (_) {
            return [];
        }

        return response.data;
    }
}
