import { IAdapter } from "api/adapters/base";
import { APIHandler } from "api/handlers/handler";
import { AboutMeResource } from "api/types/about_me";

export class AboutMeAdapter implements IAdapter<AboutMeResource> {
    path = "/about_me";

    apiHandler: APIHandler;

    constructor(apiHandler: APIHandler) {
        this.apiHandler = apiHandler;
    }

    async getResources(): Promise<AboutMeResource[]> {
        const resources = await this.apiHandler.get<AboutMeResource>(this.path);

        return resources;
    }
}
