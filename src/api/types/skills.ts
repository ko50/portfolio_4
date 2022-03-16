import { APIResource } from "api/types/base";


export interface SkillResource extends APIResource {
    name: string;
    description: string;
    iconPath: string;
    tags: string[];
}
