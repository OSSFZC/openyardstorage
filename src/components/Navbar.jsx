import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesList";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const industries = [
 { name: "Medical Equipment and Healthcare", slug: "medical" },
 { name: "Manufacturing", slug: "manufacturing" },
 { name: "Construction & Infrastructure", slug: "construction" },
 { name: "Automotive", slug: "automotive" },
 { name: "Oil & Gas", slug: "oilgas" },
 { name: "FMCG (Fast-Moving Consumer Goods)", slug: "fmcg" },
 { name: "Retail & E-commerce", slug: "retail" },
 { name: "Pharmaceuticals", slug: "pharmaceuticals" },
 { name: "Chemicals", slug: "chemicals" },
 { name: "Metals & Scrap", slug: "metals" },
 { name: "Food & Beverages", slug: "foodbeverages" },
 { name: "Heavy Equipment", slug: "heavyequipment" },
 { name: "Inventory Management", slug: "inventorymanagement" },
 { name: "Offshore Logistics", slug: "offshorelogistics" },
 { name: "Ship Spares", slug: "shipspares" },
 { name: "Warehousing", slug: "warehousing" },
 { name: "Distribution", slug: "distribution" },
 { name: "Project Forwarding", slug: "projectforwarding" }
];

  const projects = [
    { name: "Weatherford Drilling International", slug: "weatherford-drilling-international" },
    { name: "Marine Logistics Sharjah", slug: "marine-logistics-sharjah" },
    { name: "Warehouse Storage Space", slug: "warehouse-storage-space" }
  ];

  const locations = [
  { name: "Shipping Companies in Sharjah", slug: "shipping-companies-in-sharjah" },
  { name: "Hamriyah Port Sharjah", slug: "hamriyah-port-sharjah" },
  { name: "Cargo Service To Dubai", slug: "cargo-service-to-dubai" },
  { name: "Storage Facility In Sharjah", slug: "storage-facility-in-sharjah" },

];

const [locationsOpen, setLocationsOpen] = useState(false);

const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="relative mx-auto flex max-w-[1400px] items-center px-6 py-2 text-white">

        {/* LOGO */}
        <Link to="/" className="flex items-center block ml-4">
          <img
            src="/logos/oss-logo.png"
            alt="OSS Logistics"
            className="h-32 w-auto -mt-4 drop-shadow-sm"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="mx-auto hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90 -mt-8">

          <Link to="/">Home</Link>

          {/* ABOUT */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              About us <span className="text-xs">▾</span>
            </button>

            <div className="absolute left-0 top-full mt-3 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/about/our-story" className="block px-5 py-3 hover:bg-gray-100">Our Story</Link>
              <Link to="/about/founder" className="block px-5 py-3 hover:bg-gray-100">Founders</Link>
              <Link to="/about/vision-mission" className="block px-5 py-3 hover:bg-gray-100">Vision / Mission / Values</Link>
              <Link to="/about/inspiration" className="block px-5 py-3 hover:bg-gray-100">Inspiration</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              Services <span className="text-xs">▾</span>
            </button>

            <div className="absolute left-0 top-full mt-3 w-72 max-h-[420px] overflow-y-auto bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
  {services.slice(0, 12).map((service, i) => (
  <Link
    key={i}
    to={service.path}
    className="block px-5 py-3 hover:bg-gray-100"
  >
    {service.name}
  </Link>
))}

  <Link
    to="/services"
    className="block px-5 py-3 font-semibold text-red-600 border-t hover:bg-gray-100"
  >
    View All Services →
  </Link>

</div>
          </div>

          {/* INDUSTRIES */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              Industries we serve <span className="text-xs">▾</span>
            </button>
 <div className="absolute left-0 top-full mt-3 w-72 max-h-[420px] overflow-y-auto bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
    {industries.map((item, i) => (
                <Link
                  key={i}
                  to={`/industries/${item.slug}`}
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* LOCATIONS */}
<div className="relative group">
  <button className="flex items-center gap-1">
    Locations we serve <span className="text-xs">▾</span>
  </button>

  <div className="absolute left-0 top-full mt-3 w-72 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

    {locations.map((item, i) => (
      <Link
        key={i}
        to={`/locations/${item.slug}`}
        className="block px-5 py-3 hover:bg-gray-100"
      >
        {item.name}
      </Link>
    ))}

  </div>
</div>
          {/* PROJECTS */}
<div className="relative group">
  <button className="flex items-center gap-1">
    Projects <span className="text-xs">▾</span>
  </button>

  <div className="absolute left-0 top-full mt-3 w-72 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

    {projects.map((item, i) => (
      <Link
        key={i}
        to={`/projects/${item.slug}`}
        className="block px-5 py-3 hover:bg-gray-100"
      >
        {item.name}
      </Link>
    ))}

  </div>
</div>
          <Link to="/news">News</Link>
          <Link to="/contact-us">Contact</Link>

        </nav>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden flex flex-col gap-1 ml-auto" onClick={() => setOpen(!open)}>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-white">

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>

            {/* MOBILE ABOUT */}
            <button onClick={() => setAboutOpen(!aboutOpen)} className="flex justify-between">
              About us <span>{aboutOpen ? "▲" : "▼"}</span>
            </button>

            {aboutOpen && (
              <div className="ml-4 flex flex-col gap-3 text-white/80">
                <Link to="/about/our-story" onClick={() => setOpen(false)}>Our Story</Link>
                <Link to="/about/founder" onClick={() => setOpen(false)}>Founders</Link>
                <Link to="/about/vision-mission" onClick={() => setOpen(false)}>Vision / Mission</Link>
                <Link to="/about/inspiration" onClick={() => setOpen(false)}>Inspiration</Link>
              </div>
            )}

            {/* MOBILE SERVICES */}
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex justify-between">
              Services <span>{servicesOpen ? "▲" : "▼"}</span>
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-3 text-white/80">
                <Link to="/services/open-yard-storage" onClick={() => setOpen(false)}>Open Yard Storage</Link>
                <Link to="/services/yard-for-rent-sharjah" onClick={() => setOpen(false)}>Yard for Rent in Sharjah</Link>
                <Link to="/services/air-freight" onClick={() => setOpen(false)}>Air Freight</Link>
                <Link to="/services/sea-freight" onClick={() => setOpen(false)}>Sea Freight</Link>
                <Link to="/services/land-freight" onClick={() => setOpen(false)}>Land Freight</Link>
              </div>
            )}

            {/* MOBILE INDUSTRIES */}
            <button onClick={() => setIndustriesOpen(!industriesOpen)} className="flex justify-between">
              Industries we serve <span>{industriesOpen ? "▲" : "▼"}</span>
            </button>

            {industriesOpen && (
              <div className="ml-4 flex flex-col gap-3 text-white/80">
                {industries.map((item, i) => (
                  <Link
                    key={i}
                    to={`/industries/${item.slug}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <button onClick={() => setLocationsOpen(!locationsOpen)} className="flex justify-between">
  Locations we serve <span>{locationsOpen ? "▲" : "▼"}</span>
</button>

{locationsOpen && (
  <div className="ml-4 flex flex-col gap-3 text-white/80">
    {locations.map((item, i) => (
      <Link
        key={i}
        to={`/locations/${item.slug}`}
        onClick={() => setOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
)}
           <button
  onClick={() => setProjectsOpen(!projectsOpen)}
  className="flex justify-between w-full"
>
  Projects <span>{projectsOpen ? "▲" : "▼"}</span>
</button>

{projectsOpen && (
  <div className="ml-4 flex flex-col gap-3 text-white/80">
    {projects.map((item, i) => (
      <Link
        key={i}
        to={`/projects/${item.slug}`}
        onClick={() => setOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
)}
            <Link to="/news" onClick={() => setOpen(false)}>News</Link>
            <Link to="/contact-us" onClick={() => setOpen(false)}>Contact</Link>

          </nav>
        </div>
      )}
    </header>
  );
}
