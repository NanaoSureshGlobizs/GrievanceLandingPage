import { Button } from "@/components/ui/button";
import { CircleAlert, Hand, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GrievanceChart } from "@/components/grievance-chart";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-white">
      <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
            <div className="text-white">
              <div className="text-xl font-bold">GovConnect</div>
              <div className="text-sm">MANIPUR</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#home"
              className="text-sm font-medium text-white/80 hover:text-white"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className="text-sm font-medium text-white/80 hover:text-white"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#grievance-profile"
              className="text-sm font-medium text-white/80 hover:text-white"
              prefetch={false}
            >
              Grievance Profile
            </Link>
            <Link
              href="#home"
              className="text-sm font-medium text-white/80 hover:text-white"
              prefetch={false}
            >
              Track Grievance
            </Link>
            <Link
              href="#contact-us"
              className="text-sm font-medium text-white/80 hover:text-white"
              prefetch={false}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              prefetch={false}
            >
              Reports
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative w-full py-24 md:py-32 lg:py-40 xl:py-48">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Background"
            data-ai-hint="Manipur landscape"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Integrated Public Grievance Redressal System
                </h1>
              </div>
              <Button className="rounded-lg border-2 border-white bg-white text-black hover:bg-white/90">
                TRACK GRIEVANCE
              </Button>
              <div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:gap-4">
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-white bg-white/10 p-4 transition-colors group-hover:bg-white/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.46 16.2L20.58 15.08C21.4621 14.198 21.9983 13.0135 22 11.77C22.0017 10.5265 21.4655 9.34203 20.58 8.46003C19.698 7.57793 18.5135 7.04173 17.27 7.04003C16.0265 7.03833 14.842 7.57453 13.96 8.46003L12.92 9.50003" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.25 10.25C17.9404 10.25 18.5 9.69036 18.5 9C18.5 8.30964 17.9404 7.75 17.25 7.75C16.5596 7.75 16 8.30964 16 9C16 9.69036 16.5596 10.25 17.25 10.25Z" fill="#3b82f6"/>
                      <path d="M4.54004 16.2L3.42004 15.08C2.53794 14.198 2.00174 13.0135 2.00004 11.77C1.99834 10.5265 2.53454 9.34203 3.42004 8.46003C4.30204 7.57793 5.48654 7.04173 6.73004 7.04003C7.97354 7.03833 9.15804 7.57453 10.04 8.46003L11.08 9.50003" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.75 10.25C7.44036 10.25 8 9.69036 8 9C8 8.30964 7.44036 7.75 6.75 7.75C6.05964 7.75 5.5 8.30964 5.5 9C5.5 9.69036 6.05964 10.25 6.75 10.25Z" fill="#3b82f6"/>
                      <path d="M12.5 16H11.5C9.29086 16 7.5 17.7909 7.5 20V21H16.5V20C16.5 17.7909 14.7091 16 12.5 16Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-center font-semibold text-white">
                    Department<br/>User
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-white bg-white/10 p-4 transition-colors group-hover:bg-white/20">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 6.5C12.5 8.98528 10.4853 11 8 11C5.51472 11 3.5 8.98528 3.5 6.5C3.5 4.01472 5.51472 2 8 2C10.4853 2 12.5 4.01472 12.5 6.5Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.5 10C20.5 11.3807 19.3807 12.5 18 12.5C16.6193 12.5 15.5 11.3807 15.5 10C15.5 8.61929 16.6193 7.5 18 7.5C19.3807 7.5 20.5 8.61929 20.5 10Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 19.5V17.5C15 15.567 16.567 14 18.5 14H19.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13C4.68629 13 2 15.6863 2 19V20.5H14V19C14 15.6863 11.3137 13 8 13Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="mt-2 text-center font-semibold text-white">
                    Citizen
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-blue-700 py-12 md:py-20">
          <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" />
                  <path d="M12 17h.01" />
                  <path d="M17 17h-2.5" />
                  <path d="M17 13h-5" />
                  <path d="M7 13H5" />
                  <path d="M7 9H5" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white">86</div>
              <div className="text-sm font-medium text-white/80">
                DEPARTMENTS
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-600">
                <CircleAlert className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white">45,571</div>
              <div className="text-sm font-medium text-white/80">
                GRIEVANCE LODGED
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-600">
                <Hand className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white">25,869</div>
              <div className="text-sm font-medium text-white/80">
                GRIEVANCE REDRESSED
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-600">
                <HomeIcon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-white">258</div>
              <div className="text-sm font-medium text-white/80">
                OPEN GRIEVANCE
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className="w-full bg-white py-20 text-gray-800 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg bg-gray-50 p-8 shadow-lg">
              <h2 className="mb-4 text-3xl font-bold">About Us</h2>
              <h3 className="mb-4 text-xl font-semibold text-gray-600">
                Empowering Every Citizen, Strengthening Every Voice
              </h3>
              <p className="text-gray-600">
                To build a transparent, accountable, and citizen-centric
                governance system in Manipur that bridges the gap between the
                government and the people. We envision a digital platform where
                every voice matters, every grievance is addressed promptly, and
                every initiative is accessible to all.
              </p>
              <p className="mt-4 text-gray-600">
                By leveraging technology, we aim to foster trust, streamline
                public service delivery, and create a responsive
                administration that works hand-in-hand with the citizens for
                the holistic development of Manipur.
              </p>
            </div>
          </div>
        </section>

        <section id="grievance-profile" className="w-full bg-[#111827] py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Grievance Profile
            </h2>
            <GrievanceChart />
          </div>
        </section>
      </main>
      <footer id="contact-us" className="w-full bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
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
                    href="#"
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    website.www.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    website.www.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/70 hover:text-white"
                    prefetch={false}
                  >
                    website.www.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <p className="text-sm text-white/70">Raj Bhavan, Manipur</p>
              <p className="text-sm text-white/70">98561-98561</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <div className="flex gap-4">
              <p>2025 - All Right reserved</p>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Terms of Service
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p>Powered By Globizs Web Solution Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}