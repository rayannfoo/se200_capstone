import { TableCell, TableRow } from '@/components/ui/table';

interface PolicyProps {
  policy: {
    policy_holder_id: string;
    policy_holder_email: string;
    policy_holder_first_name: string;
    policy_holder_last_name: string;
    names_of_insurance_policies: string;
  };
}

export function PolicyHolder({ policy }: PolicyProps) {
  return (
    <TableRow>
      <TableCell>{policy.policy_holder_id}</TableCell>
      <TableCell>{policy.policy_holder_email}</TableCell>
      <TableCell>{policy.policy_holder_first_name}</TableCell>
      <TableCell>{policy.policy_holder_last_name}</TableCell>
      <TableCell>{policy.names_of_insurance_policies}</TableCell>
    </TableRow>
  );
}