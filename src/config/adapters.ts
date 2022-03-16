import { routes } from "config/routes";
import { APIResource } from "utils/resourceTypes/base";
import { IAdapter } from "api/adapters/base";
import { aboutMeAdapter, contactsAdapter, skillsAdapter, worksAdapter } from "api/setup";

export const adapters: Map<string, IAdapter<APIResource>> = new Map();
adapters.set(routes.about_me.path, aboutMeAdapter);
adapters.set(routes.skills.path, skillsAdapter);
adapters.set(routes.works.path, worksAdapter);
adapters.set(routes.contacts.path, contactsAdapter);
