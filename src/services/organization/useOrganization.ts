import { useMutation, useQuery } from '@tanstack/react-query';
import { ORG_KEYS } from './organizationConstants';
import {
  addDomain,
  deleteDomen,
  getDomains,
  getOrganization,
  updateOrganization,
  uploadLogo,
  verifyDomen,
} from './organizationApi';
import { toast } from 'sonner';
import { toasterOptions } from '@/constants';

export const useOrganization = () => {
  const organizationQuery = useQuery({
    queryKey: [ORG_KEYS.org_dashboard],
    queryFn: getOrganization,
  });

  const domainsQuery = useQuery({
    queryKey: [ORG_KEYS.domains],
    queryFn: getDomains,
  });

  const uploadLogoMutation = useMutation({
    mutationFn: uploadLogo,
    onSuccess: () => {
      toast.success('Логотип успешно изменен', toasterOptions['success']);
      organizationQuery.refetch();
    },
  });

  const updateOrgMutation = useMutation({
    mutationFn: updateOrganization,
    onSuccess: () => {
      toast.success('Данные успешно сохранены', toasterOptions['success']);
      organizationQuery.refetch();
    },
  });

  const addDomainMutation = useMutation({
    mutationFn: addDomain,
    onSuccess: () => {
      toast.success('Домен успешно добавлен', toasterOptions['success']);
      domainsQuery.refetch();
    },
  });

  const verifyDomainMutation = useMutation({
    mutationFn: verifyDomen,
    onSuccess: () => {
      toast.success('Домен успешно обновлен', toasterOptions['success']);
      domainsQuery.refetch();
    },
  });

  const deleteDomainMutation = useMutation({
    mutationFn: deleteDomen,
    onSuccess: () => {
      toast.success('Домен успешно удалён', toasterOptions['success']);
      domainsQuery.refetch();
    },
  });

  return {
    organizationQuery,
    domainsQuery,
    uploadLogoMutation,
    updateOrgMutation,
    addDomainMutation,
    verifyDomainMutation,
    deleteDomainMutation,
  };
};
