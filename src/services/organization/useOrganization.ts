// import { useMutation, useQuery } from "@tanstack/react-query"
// import { ORG_DASHBOARD, ORG_KEYS } from "./organizationConstants"
// import { getDomains, getOrganization, uploadLogo } from "./organizationApi"
// import { toast } from "sonner";


// export const useOrganization = () => {
//     const organizationQuery = useQuery({
//         queryKey: [ORG_KEYS.org_dashboard],
//         queryFn: getOrganization
//     });

//     const domainsQuery = useQuery({
//         queryKey: [ORG_KEYS.domains],
//         queryFn: getDomains
//     });

//     const uploadLogoMutation = useMutation({
//         mutationFn: uploadLogo,
        
//     })


// }