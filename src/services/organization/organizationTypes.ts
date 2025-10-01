export interface IOrganizationData{
    id: number;
    name: string;
    logo_path : string;
    primary_color : string;
    accent_color: string;
    created_at: string;
    updated_at: string;
}

export interface IOrganizationDomain{
    id: number;
    domain: string;
    verified : boolean;
    organization_id: number;
    created_at: string;
}

export interface IUpdateOrgData{
    name: string;
    primary_color: string;
    accent_color: string;
    file: string;
}