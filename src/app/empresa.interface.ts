export interface Empresa {
    id?: number;
    createdAt: Date;
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    clients: Array<number | string>;
    projects: Array<number | string>;
}
