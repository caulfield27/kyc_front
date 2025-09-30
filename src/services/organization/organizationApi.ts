import { sendRequest } from '@/api/apiConfig';
import type { IOrganizationData, IOrganizationDomain } from './organizationTypes';
import {
  DELETE_DOMAIN,
  DOMAINS,
  ORG_DASHBOARD,
  UPLOAD_LOGO,
  VERIFY_DOMAIN,
} from './organizationConstants';

export async function getOrganization(): Promise<IOrganizationData> {
  try {
    const response = await sendRequest.get(ORG_DASHBOARD);
    return response.data?.organization ?? {};
  } catch (e) {
    throw e;
  }
}

export async function uploadLogo(data: { file: string }) {
  try {
    const response = await sendRequest.post(UPLOAD_LOGO, data);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function getDomains(): Promise<IOrganizationDomain[]> {
  try {
    const response = await sendRequest.get(DOMAINS);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function addDomain(data: { domain: string }) {
  try {
    const response = await sendRequest.post(DOMAINS, data);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function verifyDomen(id: number) {
  try {
    const response = await sendRequest.post(VERIFY_DOMAIN(id));
    return response.data;
  } catch (e) {
    throw e;
  }
}

export async function deleteDomen(id: number) {
  try {
    const response = await sendRequest.post(DELETE_DOMAIN(id));
    return response.data;
  } catch (e) {
    throw e;
  }
}
