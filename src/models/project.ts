import { Language } from "./language";

export class Project {
    name!: string;
    html_url!: string;
    description!: string;
    languages_url!: string;
    languages!: Language[];
}