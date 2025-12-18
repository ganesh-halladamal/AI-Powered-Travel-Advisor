import { FileText, AlertTriangle, Scale, Shield, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: December 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              Welcome to TravelAI! These Terms of Service ("Terms") govern your use of our AI-powered travel planning 
              service. By accessing or using TravelAI, you agree to be bound by these Terms. If you do not agree to 
              these Terms, please do not use our service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-600" />
              Description of Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              TravelAI provides an AI-powered travel planning platform that offers:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Personalized travel recommendations and itineraries</li>
              <li>Budget estimation and planning tools</li>
              <li>Destination guides and travel information</li>
              <li>AI-powered chat assistance for travel queries</li>
              <li>Travel tips and best practices</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">By using TravelAI, you agree to:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Use the service for lawful purposes only</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to harm or disrupt the service</li>
              <li>Not use automated systems to access the service without permission</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Prohibited Uses */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Prohibited Uses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">You may not use TravelAI to:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with other users' experience</li>
              <li>Use the service for commercial purposes without permission</li>
              <li>Reverse engineer or attempt to extract our algorithms</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              TravelAI and its content, features, and functionality are owned by us and are protected by international 
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-slate-900">Our Rights</h5>
                <p className="text-sm text-slate-600">We retain all rights to our AI algorithms, content, and branding</p>
              </div>
              <div>
                <h5 className="font-medium text-slate-900">Your Content</h5>
                <p className="text-sm text-slate-600">You retain rights to content you provide, but grant us license to use it for service improvement</p>
              </div>
              <div>
                <h5 className="font-medium text-slate-900">Third-Party Content</h5>
                <p className="text-sm text-slate-600">Some content may be provided by third parties and is subject to their terms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-600" />
              Disclaimers and Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Service Availability</h4>
              <p className="text-slate-700">
                We strive to maintain service availability but cannot guarantee uninterrupted access. The service is 
                provided "as is" without warranties of any kind.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Travel Information</h4>
              <p className="text-slate-700">
                Our recommendations are for informational purposes only. We are not responsible for the accuracy of 
                third-party information or changes in travel conditions, prices, or availability.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">AI Limitations</h4>
              <p className="text-slate-700">
                Our AI provides suggestions based on available data and algorithms. Results may not always be perfect 
                or suitable for every situation. Use your judgment when making travel decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-indigo-600" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              To the maximum extent permitted by law, TravelAI shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Travel disruptions or cancellations</li>
              <li>Inaccurate information or recommendations</li>
              <li>Third-party service failures</li>
              <li>Any damages arising from use of our service</li>
            </ul>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the 
              service, to understand our practices regarding the collection and use of your information.
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              We may terminate or suspend your access to our service immediately, without prior notice, for any reason, 
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Breach of these Terms</li>
              <li>Violation of applicable laws</li>
              <li>Fraudulent or harmful activity</li>
              <li>Extended periods of inactivity</li>
            </ul>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
              its conflict of law provisions. Any disputes arising from these Terms or your use of the service shall 
              be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
              try to provide at least 30 days notice prior to any new terms taking effect. Your continued use of the 
              service after changes become effective constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> legal@travelai.com</p>
              <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}