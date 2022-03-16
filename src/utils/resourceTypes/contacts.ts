import { APIResource } from "utils/resourceTypes/base";

export interface ContactResource extends APIResource {
    name: string;
    userName: string;
    link: string;
    logoPath: string;
}
