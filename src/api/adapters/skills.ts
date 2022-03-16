import { IAdapter } from "api/adapters/base";
import { APIHandler } from "api/handlers/handler";
import { SkillResource } from "utils/resourceTypes/skills";

export class SkillsAdapter implements IAdapter<SkillResource> {
    path = "/skills";

    apiHandler: APIHandler;

    constructor(apiHandler: APIHandler) {
        this.apiHandler = apiHandler;
    }

    async getResources(): Promise<SkillResource[]> {
        const resources = await this.apiHandler.get<SkillResource>(this.path);

        return resources;
    }
}
