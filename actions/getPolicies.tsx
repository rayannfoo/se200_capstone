"use server";

import { db } from "@/db";

interface Policy {
  base_price_sgd: string;
}

export async function getPolicies(): Promise<Policy[] | { error: string }> {
  try {
    const policies_data = await db.insurance_policies.findMany();
    const policies: Policy[] = policies_data.map((policy) => ({
      ...policy,
      base_price_sgd: (policy.base_price_sgd ?? 0).toString(),
    }));
    return policies; 
  } catch (error) {
    return { error: "Error fetching policies" };
  }
}