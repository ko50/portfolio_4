import { APIResource } from "utils/resourceTypes/base";


export interface SkillResource extends APIResource {
    name: string;
    description: string;
    iconPath: string;
    tags: string[];
}
