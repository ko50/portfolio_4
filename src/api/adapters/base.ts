import { APIHandler } from "api/handlers/handler";

export abstract class IAdapter<T> {
    abstract path: string;
    abstract apiHandler: APIHandler;

    abstract getResources(): Promise<T[]>;
}
