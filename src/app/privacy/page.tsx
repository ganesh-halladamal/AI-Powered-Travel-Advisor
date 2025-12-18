import { Shield, Eye, Lock, Users, Database, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: December 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Our Commitment to Your Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              At TravelAI, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              AI-powered travel planning service.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-blue-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Information You Provide</h4>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Travel preferences and destination queries</li>
                <li>Budget information and trip duration</li>
                <li>Contact information when you reach out to us</li>
                <li>Feedback and reviews you submit</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Automatically Collected Information</h4>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Device information and browser type</li>
                <li>IP address and general location</li>
                <li>Usage patterns and interaction data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-purple-600" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Provide personalized travel recommendations and itineraries</li>
              <li>Improve our AI algorithms and service quality</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send important updates about our service (with your consent)</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Ensure security and prevent fraudulent activities</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-600" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our service (e.g., hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-600" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting infrastructure</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-600" />
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">You have the following rights regarding your personal information:</p>
            
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Cookies:</strong> Control cookie preferences through your browser settings</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              We use cookies and similar technologies to enhance your experience:
            </p>
            
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-slate-900">Essential Cookies</h5>
                <p className="text-sm text-slate-600">Required for basic site functionality and security</p>
              </div>
              <div>
                <h5 className="font-medium text-slate-900">Analytics Cookies</h5>
                <p className="text-sm text-slate-600">Help us understand how you use our service to improve it</p>
              </div>
              <div>
                <h5 className="font-medium text-slate-900">Preference Cookies</h5>
                <p className="text-sm text-slate-600">Remember your settings and preferences</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We retain your personal information only as long as necessary to provide our services and fulfill the purposes 
              outlined in this policy. We will delete or anonymize your information when it is no longer needed, unless we 
              are required to retain it for legal or regulatory purposes.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us to have it removed.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy 
              Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> privacy@travelai.com</p>
              <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}