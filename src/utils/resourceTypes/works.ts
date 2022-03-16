import { APIResource } from "utils/resourceTypes/base";


export interface WorkResource extends APIResource {
    name: string;
    description: string;
    imagePath: string;
    link: string;
    tags: string[];
}
