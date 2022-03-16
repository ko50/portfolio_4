import { APIHandler } from "api/handlers/handler";
import { APIResource } from "api/types/base";

export abstract class IAdapter<T extends APIResource> {
    abstract path: string;
    abstract apiHandler: APIHandler;

    abstract getResources(): Promise<T[]>;
}
