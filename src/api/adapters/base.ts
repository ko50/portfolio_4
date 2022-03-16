import { APIHandler } from "api/handlers/handler";
import { APIResource } from "utils/resourceTypes/base";

export abstract class IAdapter<T extends APIResource> {
    abstract path: string;
    abstract apiHandler: APIHandler;

    abstract getResources(): Promise<T[]>;
}
