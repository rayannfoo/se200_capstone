"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Home, Wallet, Users2 } from "lucide-react";
import Image from "next/image";
import logo from "@/components/assets/Logo.png";

export default function AddPolicyPage() {
  const policyTypes = [
    "Travel Insurance",
    "Health Insurance",
    "Home Insurance",
    "Business Insurance",
    "Car Insurance",
    "Personal Accident",
    "Critical Illness",
    "Life Insurance",
  ];

  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);

  // Function to handle checkbox change in dropdown
  const handleCheckboxChange = (policy: string, checked: boolean) => {
    if (checked) {
      // Add the policy if checked
      setSelectedPolicies((prevSelected) => [...prevSelected, policy]);
    } else {
      // Remove the policy if unchecked
      setSelectedPolicies((prevSelected) =>
        prevSelected.filter((item) => item !== policy)
      );
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Policies: ", selectedPolicies);
    // You can process the form submission and selected policies here
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-24 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-8 px-2 sm:py-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/Policies"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Wallet className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Policies</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/customers"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 bg-accent text-black"
                >
                  <Users2 className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Main content area with left margin */}
      <div className="flex-1 bg-gray-200 p-6 ml-24 flex items-center justify-center">
        {/* Add Policy Form */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-xl font-bold mb-4">Add Policy</h1>
          <p className="text-gray-500 mb-6">Add a new policy</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="policy-id" className="block text-sm font-medium text-gray-700">
                ID
              </label>
              <input
                id="policy-id"
                type="text"
                placeholder="20A123"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="policy-name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="policy-name"
                type="text"
                placeholder="Basic Health Coverage"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="policy-price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                id="policy-price"
                type="text"
                placeholder="15"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Dropdown for policy types */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type (Choose Multiple)
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Select Policy Types</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select Policies</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {policyTypes.map((policy, index) => (
                    <DropdownMenuCheckboxItem
                      key={index}
                      checked={selectedPolicies.includes(policy)}
                      onCheckedChange={(checked) => handleCheckboxChange(policy, checked)}
                    >
                      {policy}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
