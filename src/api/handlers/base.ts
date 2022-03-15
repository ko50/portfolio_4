export abstract class IHandler {
    abstract API_ORIGIN: string;
    abstract API_PREFIX: string;

    abstract get<T>(path: string): Promise<T[]>;
}
