
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GrievanceChart } from "@/components/grievance-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/app/footer";
import { Faq } from "@/components/faq";
import { Download, Video } from "lucide-react";

async function getSummaryData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const fetchUrl = apiUrl;
    console.log(`Fetching summary data from: ${fetchUrl}`);
    const res = await fetch(fetchUrl, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const responseData = await res.json();
    const data = responseData.data;

    return {
      departments: data.departments?.toString() || 'N/A',
      total: data.total?.toString() || 'N/A',
      redressed: data.redressed?.toString() || 'N/A',
      open: data.open?.toString() || 'N/A',
      error: null,
    };
  } catch (error: any) {
    console.error("Error fetching summary data:", error);
    const errorMessage = error.message || "An unknown error occurred";
    return {
      departments: errorMessage,
      total: errorMessage,
      redressed: errorMessage,
      open: errorMessage,
      error: errorMessage,
    };
  }
}


export default async function HomePage() {
  const summary = await getSummaryData();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const departmentLoginUrl = appUrl;
  const citizenLoginUrl = `${appUrl}/#/citizen-login`;

  const features = [
    {
      image: "/image/complaint.png",
      title: "Online Complaint \n Registration",
      description: "Lodge Complaints Online Anytime With Instant Confirmation.",
      color: "#8B5FBF",
      hint: "complaint form"
    },
    {
      image: "/image/Whatsapp.png",
      title: "WhatsApp Governance Integration",
      description: "Register And Track Grievances Easily Via WhatsApp.",
      color: "#4ECDC4",
      hint: "whatsapp chat"
    },
    {
      image: "/image/Link.png",
      title: "Eoffice \nLinkage",
      description: "Seamlessly Route Issues To Officials Through E-Office.",
      color: "#44A08D",
      hint: "office connection"
    },
    {
      image: "/image/Accountability.png",
      title: "Transparency And Accountability",
      description: "Track Grievance Status In Real-Time With Auto-Escalation.",
      color: "#2E5266",
      hint: "transparent gears"
    },
    {
      image: "/image/paperless.png",
      title: "Paperless, Data-Driven Approach",
      description: "Reduce Paperwork And Improve Governance With Data.",
      color: "#8B5FBF",
      hint: "digital document"
    },
    {
      image: "/image/department.png",
      title: "Departments\n Covered",
      description: "Direct Complaints To The Right Department Promptly.",
      color: "#4ECDC4",
      hint: "government building"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
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
              href="#features"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              Main Features
            </Link>
            <Link
              href="#user-guide"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              User Guide
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white/80 hover:text-white px-3 py-1"
              prefetch={false}
            >
              FAQ
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
          <div className="absolute inset-0 bg-black/10" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl/none">
                Integrated Public <br/> Grievance Redressal System
                </h1>
              </div>
              
              <div className="flex flex-col items-center gap-10 pt-8 sm:flex-row sm:justify-center sm:gap-24">
              <a
                href={departmentLoginUrl || '#'}
                className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-lg">
                  <Image src="/image/department_login_normal.png" alt="Department User" width={128} height={128} />
                </div>
                <span className="text-center text-lg font-semibold text-white">
                  Login as<br/>Department
                </span>
            </a>
            <a
                href={citizenLoginUrl || '#'}
                className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-lg">
                  <Image src="/image/citizen_login_normal.png" alt="Citizen User" width={128} height={128} />
                </div>
                <span className="text-center text-lg font-semibold text-white">
                  Login as<br/>Citizen
                </span>
            </a>
            </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-20 relative overflow-hidden" style={{background: 'linear-gradient(94.6deg, #003688 4.28%, #1AA3D8 107.66%)'}}>
        {summary.error && (
          <div className="container mx-auto px-4 text-center mb-4">
            <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-md">
              <p>Error fetching data: {summary.error}</p>
            </div>
          </div>
        )}
  <div className="absolute bottom-0 right-0">
    <Image src="/image/card_background.png" alt="Background decoration" width={200} height={200} className="opacity-30" />
  </div>
  
  <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-6 justify-items-center relative z-10">
    
    <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
      <Image src="/image/department_normal.png" alt="Departments" width={96} height={96} />
      
      <div className="text-5xl font-bold text-white">{summary.departments}</div>
      
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">DEPARTMENTS</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
      <Image src="/image/log_normal.png" alt="Grievance Lodged" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.total}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">GRIEVANCE LODGED</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
      <Image src="/image/redressel_normal.png" alt="Grievance Redressed" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.redressed}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">GRIEVANCE REDRESSED</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
      <Image src="/image/open_normal.png" alt="Open Grievance" width={96} height={96} />
      <div className="text-5xl font-bold text-white">{summary.open}</div>
      <div className="bg-white px-6 py-2 rounded-full">
        <span className="font-semibold text-gray-800 text-sm">OPEN GRIEVANCE</span>
      </div>
    </div>

    
  </div>
</section>
        
        {/* <section id="grievance-profile" className="relative w-full py-20 md:py-28">
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
        </section> */}

        <section id="features" className="w-full py-20 md:py-28 bg-white text-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-16 text-center text-4xl font-bold" style={{ color: '#2E5266' }}>
              Main Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {features.map((feature, index) => (
                <div key={index} className="flex max-w-xs flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
                  <Image src={feature.image} alt={feature.title} width={80} height={80} data-ai-hint={feature.hint} />
                  <h3 className="mt-6 mb-3 text-xl font-bold whitespace-pre-line" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="user-guide" className="w-full py-20 md:py-28 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-16 text-center text-4xl font-bold" style={{ color: '#2E5266' }}>
              User Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              <a href="https://drive.google.com/file/d/1owem2tx0Kia6-2FmKsvBKQ0f000tYBg0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex max-w-xs flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Download className="h-16 w-16 text-blue-600" />
                <h3 className="mt-6 mb-3 text-2xl font-bold text-blue-600">
                  User Manual
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Download the detailed user manual in PDF format to learn how to use the portal.
                </p>
              </a>
              <a href="https://drive.google.com/file/d/1r8cTI77s0Ke5AH-upUjOWorgHaVLqQ-8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex max-w-xs flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Video className="h-16 w-16 text-red-600" />
                <h3 className="mt-6 mb-3 text-2xl font-bold text-red-600">
                  Video Tutorial
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch our step-by-step video tutorial to get a visual guide on lodging and tracking grievances.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-20 md:py-28 bg-white text-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-16 text-center text-4xl font-bold" style={{ color: '#2E5266' }}>
              Frequently Asked Questions
            </h2>
            <Faq />
          </div>
        </section>

        <section id="about-us" className="w-full bg-gray-50 py-20 text-gray-800 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-6xl rounded-lg bg-white px-16 py-12 shadow-lg" style={{border: '1px solid #239BA7'}}>
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
      <Footer />
    </div>
  );
}
