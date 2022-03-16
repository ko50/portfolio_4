import { APIHandler } from "api/handlers/handler";
import { AboutMeAdapter } from "api/adapters/about_me";
import { SkillsAdapter } from "api/adapters/skills";
import { ContactsAdapter } from "api/adapters/contacts";
import { WorksAdapter } from "api/adapters/works";

const _apiHandler: APIHandler = new APIHandler();

export const aboutMeAdapter: AboutMeAdapter = new AboutMeAdapter(_apiHandler);
export const skillsAdapter: SkillsAdapter = new SkillsAdapter(_apiHandler);
export const worksAdapter: WorksAdapter = new WorksAdapter(_apiHandler);
export const contactsAdapter: ContactsAdapter = new ContactsAdapter(_apiHandler);
