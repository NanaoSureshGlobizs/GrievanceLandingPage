import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GrievanceChart } from "@/components/grievance-chart";

async function getSummaryData() {
  try {
    const res = await fetch('https://grievanceapistaging.globizsapp.com/api/landing/summary', { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    // Parse the response body as JSON
    const data = await res.json();

    // Return the data by directly accessing the object's properties
    // The values are converted to strings to match the original function's output
    return {
      departments: data.departments?.toString() || 'N/A',
      total: data.total?.toString() || 'N/A',
      redressed: data.redressed?.toString() || 'N/A',
      open: data.open?.toString() || 'N/A',
      error: null,
    };
  } catch (error: any) {
    console.error("Error fetching summary data:", error);
    // Return a more descriptive error state
    return {
      departments: "Error",
      total: "Error",
      redressed: "Error",
      open: "Error",
      error: error.message || "An unknown error occurred",
    };
  }
}


export default async function HomePage() {
  const summary = await getSummaryData();

  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-white">
      <header className="absolute w-full top-0 z-50 bg-transparent">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/image/govmanipur_logo.png" alt="GovConnect Logo" width={50} height={50} className="h-16 w-16" />
            <div className="text-white">
              <div className="text-xl font-bold">GovConnect</div>
              <div className="text-sm">MANIPUR</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full bg-[linear-gradient(90deg,_#003688_0%,_#1AA3D8_100%)] px-4 py-2 md:flex">
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
            
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative flex items-center justify-center w-full min-h-screen">
          <Image
            src="/image/background.png"
            alt="Background"
            data-ai-hint="Manipur landscape"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
                Integrated Public <br/> Grievance Redressal System
                </h1>
              </div>
              <Link href="https://grievancestaging.globizsapp.com/app/#/citizen-login-with-case">
                <Button className="rounded-md border-2 border-white bg-transparent px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black">
                  TRACK GRIEVANCE
                </Button>
              </Link>
              <div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:justify-between sm:gap-20">
              <Link
    href="https://grievancestaging.globizsapp.com/app/#/citizen-login"
    className="group flex flex-col items-center gap-2"
    prefetch={false}
  >
    <div className="flex h-24 w-24 items-center justify-center rounded-lg transition-colors">
      <Image src="/image/citizen_login_normal.png" alt="Citizen" width={96} height={96} />
    </div>
    <span className="text-center font-semibold text-white">
      Login as<br/>Citizen
    </span>
  </Link>
              <Link
    href="https://grievancestaging.globizsapp.com/app/#/login"
    className="group flex flex-col items-center gap-2"
    prefetch={false}
  >
    <div className="flex h-24 w-24 items-center justify-center rounded-lg transition-colors">
      <Image src="/image/department_login_normal.png" alt="Department User" width={96} height={96} />
    </div>
    <span className="text-center font-semibold text-white">
      Login as<br/>Department
    </span>
</Link>

</div>
            </div>
          </div>
        </section>
        {summary.error && (
          <div className="bg-red-500 text-white p-4 text-center">
            <p className="font-bold">API Error:</p>
            <p>{summary.error}</p>
          </div>
        )}
        <section className="w-full py-12 md:py-20 relative overflow-hidden" style={{background: 'linear-gradient(94.6deg, #003688 4.28%, #1AA3D8 107.66%)'}}>
  {/* Background image in bottom right corner */}
  <div className="absolute bottom-0 right-0">
    <Image src="/image/card_background.png" alt="Background decoration" width={200} height={200} className="opacity-30" />
  </div>
  
  <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-6 justify-items-center relative z-10">
    
    <div className="flex flex-col items-center gap-4">
      {/* Image without any background or border */}
      <Image src="/image/department_normal.png" alt="Departments" width={96} height={96} />
      
      {/* Number */}
      <div className="text-5xl font-bold text-white">{summary.departments}</div>
      
      {/* Label in white rounded container */}
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">DEPARTMENTS</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4">
      <Image src="/image/log_normal.png" alt="Grievance Lodged" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.total}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">GRIEVANCE LODGED</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4">
      <Image src="/image/redressel_normal.png" alt="Grievance Redressed" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.redressed}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">GRIEVANCE REDRESSED</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4">
      <Image src="/image/open_normal.png" alt="Open Grievance" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.open}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">OPEN GRIEVANCE</span>
      </div>
    </div>

    
  </div>
</section>
        
        <section id="grievance-profile" className="relative w-full py-20 md:py-28">
          <Image
            src="/image/profile_background.png"
            alt="Grievance Profile Background"
            data-ai-hint="abstract geometric pattern"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container relative mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Grievance Profile
            </h2>
            <GrievanceChart />
          </div>
        </section>
        <section id="about-us" className="w-full bg-white py-20 text-gray-800 md:py-28">
  <div className="container mx-auto px-4 md:px-6">
    <div className="mx-auto max-w-6xl rounded-lg bg-gray-50 px-16 py-12 shadow-lg" style={{border: '1px solid #239BA7'}}>
      <h2 className="mb-6 text-4xl font-bold">About Us</h2>
      <h3 className="mb-6 text-2xl font-semibold text-gray-600">
        Empowering Every Citizen, Strengthening Every Voice
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        To build a transparent, accountable, and citizen-centric
        governance system in Manipur that bridges the gap between the
        government and the people. We envision a digital platform where
        every voice matters, every grievance is addressed promptly, and
        every initiative is accessible to all.
      </p>
      <p className="text-lg text-gray-600">
        By leveraging technology, we aim to foster trust, streamline
        public service delivery, and create a responsive
        administration that works hand-in-hand with the citizens for
        the holistic development of Manipur.
      </p>
    </div>
  </div>
</section>
      </main>
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
            {/* <div className="mt-4 md:mt-0">
              <p>Powered By Globizs Web Solution Pvt. Ltd.</p>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

    

    

    

    