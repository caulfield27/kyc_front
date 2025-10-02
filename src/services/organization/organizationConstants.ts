export const ORG_DASHBOARD = 'organizations/dashboard';
export const UPLOAD_LOGO = 'organizations/logo';
export const ORG_UPDATE = 'organizations/';
export const DOMAINS = 'organizations/domains';
export const VERIFY_DOMAIN = (id: number) =>
  `organizations/domains/${id}/verify`;
export const DELETE_DOMAIN = (id: number) => `organizations/domains/${id}`;

export const ORG_KEYS = {
  org_dashboard: 'org_dashboard',
  domains: 'domains',
};
