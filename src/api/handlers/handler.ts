import axios, { AxiosResponse } from "axios";

import { IHandler } from "api/handlers/base";

export class APIHandler implements IHandler {
    API_ORIGIN: string = "https://api.ko50.dev"
    API_PREFIX: string = "/api"

    async get<T>(path: string): Promise<T[]> {
        const url = this.API_ORIGIN + this.API_PREFIX + path
        const response: AxiosResponse<T[]> = await axios.get<T[]>(url);

        if (response.status != 200) return [];

        return response.data;
    }
}
