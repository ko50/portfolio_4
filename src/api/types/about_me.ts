import { APIResource } from "api/types/base";

export interface AboutMeResource extends APIResource {
    title: string;
    content: string;
}
