import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src="/image/govmanipur_logo.png" alt="GovConnect Logo" width={50} height={50} className="h-16 w-16" />
            <div className="text-gray-800">
              <div className="text-xl font-bold">GovConnect</div>
              <div className="text-sm">MANIPUR</div>
            </div>
          </Link>
          <nav>
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900" prefetch={false}>
              Back to Home
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-gray-700">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the GovConnect Manipur website and its services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>2. Service Description</h2>
              <p>
                GovConnect Manipur provides a platform for citizens to lodge and track public grievances. The service is provided "as is" and we assume no responsibility for the timeliness, deletion, or failure to store any user communications or personalization settings.
              </p>

              <h2>3. User Conduct</h2>
              <p>
                You agree not to use the service for any unlawful purpose or to submit false or misleading information. You are solely responsible for the content you submit.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                The content on this site, including text, graphics, logos, and images, is the property of the Government of Manipur and is protected by copyright and other intellectual property laws.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall GovConnect Manipur or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.
              </p>

              <h2>6. Changes to the Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the site after such changes constitutes your acceptance of the new terms.
              </p>
              
              <h2>7. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
