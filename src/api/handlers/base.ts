export abstract class IHandler {
    abstract apiOrigin: string;
    abstract apiPrefix: string;

    abstract get<T>(path: string): Promise<T[]>;
}
