import { APIResource } from "utils/resourceTypes/base";

export interface AboutMeResource extends APIResource {
    title: string;
    content: string;
}
