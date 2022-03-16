import { APIResource } from "utils/resourceTypes/base";
import { IHandler } from "api/handlers/base";
import { APIHandler } from "api/handlers/handler";
import { IAdapter } from "api/adapters/base";
import { AboutMeAdapter } from "api/adapters/aboutMe";
import { SkillsAdapter } from "api/adapters/skills";
import { ContactsAdapter } from "api/adapters/contacts";
import { WorksAdapter } from "api/adapters/works";

export let apiHandler: IHandler;
export let aboutMeAdapter: AboutMeAdapter;
export let skillsAdapter: SkillsAdapter;
export let worksAdapter: WorksAdapter;
export let contactsAdapter: ContactsAdapter;

export const adapters: Map<string, IAdapter<APIResource>> = new Map();

export function setupAPI(): void {
    apiHandler = new APIHandler("https://api.ko50.dev", "/api/v1");

    aboutMeAdapter = new AboutMeAdapter(apiHandler);
    skillsAdapter = new SkillsAdapter(apiHandler);
    worksAdapter = new WorksAdapter(apiHandler);
    contactsAdapter = new ContactsAdapter(apiHandler);

    adapters.set("/about_me", aboutMeAdapter);
    adapters.set("/skills", skillsAdapter);
    adapters.set("/works", worksAdapter);
    adapters.set("/contacts", contactsAdapter);
}

export function setUpMockAPI(): void {
    apiHandler = new APIHandler("http://localhost:8000", "/api/v1");

    aboutMeAdapter = new AboutMeAdapter(apiHandler);
    skillsAdapter = new SkillsAdapter(apiHandler);
    worksAdapter = new WorksAdapter(apiHandler);
    contactsAdapter = new ContactsAdapter(apiHandler);

    adapters.set("/about_me", aboutMeAdapter);
    adapters.set("/skills", skillsAdapter);
    adapters.set("/works", worksAdapter);
    adapters.set("/contacts", contactsAdapter);
}
