import { APIResource } from "api/types/base";


export interface WorkResource extends APIResource {
    name: string;
    description: string;
    imagePath: string;
    link: string;
    tags: string[];
}
