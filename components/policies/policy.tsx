import { TableCell, TableRow } from '@/components/ui/table';

interface PolicyProps {
  policy: {
    insurance_policy_id: string;
    insurance_policy_name: string;
    base_price_sgd: string;
    type_of_policy: string;
  };
}

export function Policy({ policy }: PolicyProps) {
  return (
    <TableRow>
      <TableCell>{policy.insurance_policy_id}</TableCell>
      <TableCell>{policy.insurance_policy_name}</TableCell>
      <TableCell>{policy.base_price_sgd}</TableCell>
      <TableCell>{policy.type_of_policy}</TableCell>
    </TableRow>
  );
}