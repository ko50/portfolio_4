import { IAdapter } from "api/adapters/base";
import { APIHandler } from "api/handlers/handler";
import { TmpWorkResource } from "api/tmp_resource_types/works";
import { WorkResource } from "utils/resourceTypes/works";

export class WorksAdapter implements IAdapter<WorkResource> {
    path = "/works";

    apiHandler: APIHandler;

    constructor(apiHandler: APIHandler) {
        this.apiHandler = apiHandler;
    }

    async getResources(): Promise<WorkResource[]> {
        const resources = await this.apiHandler.get<TmpWorkResource>(this.path);
        const converted: WorkResource[] = resources.map<WorkResource>((resource) => {
            const length = resource.tags.length;
            let tags = resource.tags.substring(1, length - 1);

            const conv: WorkResource = {
                name: resource.name,
                description: resource.description,
                screenshot: resource.screenshot.replace("http://127.0.0.1:8001/", "https://api.ko50.dev/"),
                link: resource.link,
                tags: tags.replaceAll("'", "").split(","),
            };

            return conv;
        });

        return converted;
    }
}
