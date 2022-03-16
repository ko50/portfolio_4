import { APIResource } from "api/types/base";

export interface ContactResource extends APIResource {
    name: string;
    userName: string;
    link: string;
    logoPath: string;
}
