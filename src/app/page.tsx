import { Button } from "@/components/ui/button";
import { CircleAlert, Hand, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GrievanceChart } from "@/components/grievance-chart";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-white">
      <header className="w-full absolute top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/image/govmanipur_logo.png" alt="GovConnect Logo" width={32} height={32} className="h-8 w-8" />
            <div className="text-white">
              <div className="text-xl font-bold">GovConnect</div>
              <div className="text-sm">MANIPUR</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-blue-600/80 px-4 py-2 md:flex">
            <Link
              href="#home"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#grievance-profile"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              Grievance Profile
            </Link>
            <Link
              href="#home"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              Track Grv.
            </Link>
            <Link
              href="#contact-us"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white"
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
            src="/image/background.png"
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
              <Button className="rounded-md border-2 border-white bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black">
                TRACK GRIEVANCE
              </Button>
              <div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:gap-4">
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-white bg-white/10 p-4 transition-colors group-hover:bg-white/20">
                    <Image src="/image/department_normal.png" alt="Department User" width={64} height={64} />
                  </div>
                  <span className="text-center font-semibold text-white">
                    Login as<br/>Department
                  </span>
                </Link>
                <Link
                  href="#"
                  className="group flex flex-col items-center gap-2"
                  prefetch={false}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-white bg-white/10 p-4 transition-colors group-hover:bg-white/20">
                    <Image src="/image/citizen.svg" alt="Citizen" width={64} height={64} />
                  </div>
                  <span className="mt-2 text-center font-semibold text-white">
                    Login as<br/>Citizen
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
                <Image src="/image/departments.svg" alt="Departments" width={40} height={40} />
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
                 <Image src="/image/govmanipur_logo.png" alt="GovConnect Logo" width={24} height={24} className="h-8 w-8" />
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
