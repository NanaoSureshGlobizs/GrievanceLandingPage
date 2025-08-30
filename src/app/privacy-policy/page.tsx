import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
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
              <CardTitle className="text-4xl font-bold">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-gray-700">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how GovConnect Manipur ("we," "us," or "our") collects, uses, and discloses information about you when you use our website and services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect personal information that you provide to us, such as your name, contact information, and details of your grievance. We also collect non-personal information, such as browser type and usage data.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>
                Your information is used to process and redress your grievances, communicate with you, and improve our services. We do not sell your personal information to third parties.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your data.
              </p>

              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through the details provided on our main page.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
