import { IAdapter } from "api/adapters/base";
import { APIHandler } from "api/handlers/handler";
import { ContactResource } from "utils/resourceTypes/contacts";

export class ContactsAdapter implements IAdapter<ContactResource> {
    path = "/contacts";

    apiHandler: APIHandler;

    constructor(apiHandler: APIHandler) {
        this.apiHandler = apiHandler;
    }

    async getResources(): Promise<ContactResource[]> {
        const resources = await this.apiHandler.get<ContactResource>(this.path);

        return resources;
    }
}
