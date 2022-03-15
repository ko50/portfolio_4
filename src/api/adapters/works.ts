import { IAdapter } from "api/adapters/base";
import { APIHandler } from "api/handlers/handler";
import { WorkResource } from "api/types/works";

export class WorksAdapter implements IAdapter<WorkResource> {
    path = "/works";

    apiHandler: APIHandler;

    constructor(apiHandler: APIHandler) {
        this.apiHandler = apiHandler;
    }

    async getResources(): Promise<WorkResource[]> {
        const resources = await this.apiHandler.get<WorkResource>(this.path);

        return resources;
    }
}
