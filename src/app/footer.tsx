import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contact-us" className="w-full bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                 <Image src="/image/govmanipur_logo.png" alt="GovConnect Logo" width={50} height={50} className="h-16 w-16" />
                <div className="text-white">
                  <div className="text-xl font-bold">GovConnect</div>
                  <div className="text-sm">MANIPUR</div>
                </div>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-white/70">
                This platform is an official initiative of the Government of Manipur, dedicated to
                fostering transparency, accountability, and active citizen participation. Through
                digital governance, we aim to provide accessible information, streamline
                services, and strengthen the bond between the government and the people
                of Manipur
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Important Links</h3>
              <ul className="space-y-2">
                
                <li>
                  <Link
                    href={process.env.NEXT_PUBLIC_OFFICIAL_LOGIN_URL || "https://grievancestaging.globizsapp.com/app/#/official-login"}
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    Official Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://manipur.gov.in/"
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    Manipur Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ditmanipur.gov.in/"
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    DIT Manipur
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <p className="text-sm text-white/70">Raj Bhavan , Kangla, Imphal, Manipur 795001</p>
              <p className="text-sm text-white/70">98561-98561</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <div className="flex gap-4">
              <p>2025 - All Right reserved</p>
              <Link href="/privacy-policy" className="hover:text-white" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white" prefetch={false}>
                Terms of Service
              </Link>
            </div>
            {/* <div className="mt-4 md:mt-0">
              <p>Powered By Globizs Web Solution Pvt. Ltd.</p>
            </div> */}
          </div>
        </div>
      </footer>
    )
}
    