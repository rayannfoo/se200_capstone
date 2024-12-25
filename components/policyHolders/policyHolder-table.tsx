"use client";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PolicyHolder } from "@/components/policyHolders/policyHolder";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PolicyHolderTable({
  policies,
  offset,
}: {
  policies: any[];
  offset: number;
}) {
  const router = useRouter();
  const postsPerPage = 5;
  const totalPosts = 100;

  function prevPage() {
    if (offset > 0) {
      router.push(`/Policies/?offset=${offset - postsPerPage}`, {
        scroll: false,
      });
    }
  }

  function nextPage() {
    if (offset + postsPerPage < totalPosts) {
      router.push(`/Policies/?offset=${offset + postsPerPage}`, {
        scroll: false,
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policies</CardTitle>
        <CardDescription>View all your policies.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add Policy Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Insurance Policies</h1>
          <Button asChild>
            <Link href="/Policies/add">Add Policy</Link>
          </Button>
        </div>

        {/* Policies Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NRIC</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name	</TableHead>
              <TableHead>Policies Held</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policy) => (
              <PolicyHolder key={policy.policy_holder_id} policy={policy} />
            ))}
          </TableBody>
        </Table>

        {/* Pagination Section */}
        <div className="mt-4 text-gray-500">
          Showing {offset + 1}–{Math.min(offset + postsPerPage, totalPosts)} of{" "}
          {totalPosts} policies
        </div>

        <div className="flex justify-end mt-4 space-x-4">
          <Button
            formAction={prevPage}
            variant="ghost"
            size="sm"
            type="submit"
            disabled={offset === postsPerPage}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Prev
          </Button>
          <Button
            formAction={nextPage}
            variant="ghost"
            size="sm"
            type="submit"
            disabled={offset + postsPerPage > totalPosts}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
