"use client";

import { Card } from "@/components/ui/card";
import { PhoneOff, Phone } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Transform Your Cold Calling Process</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before Section */}
          <Card className="p-8 bg-red-50 border-red-100">
            <div className="flex items-center gap-4 mb-6">
              <PhoneOff className="w-10 h-10 text-red-500" />
              <h3 className="text-2xl font-bold text-red-900">Before</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500">✕</span>
                <span>Manual searching through multiple sources for company information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✕</span>
                <span>Time wasted on outdated contact details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✕</span>
                <span>Separate systems for research and calling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">✕</span>
                <span>Low success rate due to poor targeting</span>
              </li>
            </ul>
          </Card>

          {/* After Section */}
          <Card className="p-8 bg-green-50 border-green-100">
            <div className="flex items-center gap-4 mb-6">
              <Phone className="w-10 h-10 text-green-500" />
              <h3 className="text-2xl font-bold text-green-900">After</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Instant access to verified Indonesian business directory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Up-to-date contact information for decision-makers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Integrated softphone for one-click dialing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <span>Higher meeting conversion rate with qualified prospects</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}