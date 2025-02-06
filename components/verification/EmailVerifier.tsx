"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle, XCircle, AlertCircle } from "lucide-react";

// Define the API response type
interface EmailVerificationResult {
  status: "safe" | "invalid" | "disabled" | "disposable" | string;
  overall_score: number;
  is_safe_to_send: boolean;
  is_valid_syntax: boolean;
  is_disposable: boolean;
  is_role_account: boolean;
  has_inbox_full: boolean;
  is_catch_all: boolean;
  is_deliverable: boolean;
  is_free_email: boolean;
  mx_records?: string[];
}

export default function EmailVerifier() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmailVerificationResult | null>(null);
  const [error, setError] = useState("");

  const verifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `https://emailverifier.reoon.com/api/v1/verify?email=${email}&key=YOUR_API_KEY&mode=power`
      );
      const data: EmailVerificationResult = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to verify email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "invalid":
      case "disabled":
      case "disposable":
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
    }
  };

  const renderResult = () => {
    if (!result) return null;

    return (
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-2">
          {getStatusIcon(result.status)}
          <span className="font-medium capitalize">
            Status: {result.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Overall Score</h4>
            <p className="text-lg font-semibold">{result.overall_score}/100</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Safe to Send</h4>
            <p className="text-lg font-semibold">
              {result.is_safe_to_send ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Detailed Results:</h4>
          <ul className="space-y-1 text-sm">
            <li>• Syntax Valid: {result.is_valid_syntax ? "Yes" : "No"}</li>
            <li>• Disposable Email: {result.is_disposable ? "Yes" : "No"}</li>
            <li>• Role Account: {result.is_role_account ? "Yes" : "No"}</li>
            <li>• Inbox Full: {result.has_inbox_full ? "Yes" : "No"}</li>
            <li>• Catch All: {result.is_catch_all ? "Yes" : "No"}</li>
            <li>• Deliverable: {result.is_deliverable ? "Yes" : "No"}</li>
            <li>• Free Email: {result.is_free_email ? "Yes" : "No"}</li>
          </ul>
        </div>

        {result.mx_records && result.mx_records.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">MX Records:</h4>
            <ul className="space-y-1 text-sm">
              {result.mx_records.map((record, index) => (
                <li key={index}>• {record}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Verification Tool</CardTitle>
          <CardDescription>
            Verify email addresses in power mode to ensure deliverability and
            reduce bounce rates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={verifyEmail} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying
                  </>
                ) : (
                  "Verify Email"
                )}
              </Button>
            </div>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {renderResult()}
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Powered by IDB2B Email Verification API
        </CardFooter>
      </Card>
    </div>
  );
}
