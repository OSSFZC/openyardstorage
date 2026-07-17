import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {

  const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/ossfzchamriyah/",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/oss-fzc/",
  },
];
  return (
    <footer className="bg-white">

      {/* TOP FOOTER */}
      <div className="mx-auto max-w-[1400px] px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* ABOUT */}
          <div>
            <div className="flex items-center gap-2 mb-6">
             <a href="/">
              <img
                src="/logos/oss.png"
                alt="OSS Logo"
                className="h-16 cursor-pointer"
              />
            </a>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Specialized in Yard Storage, Warehousing, Distribution,
              Break-Bulk, Rig movements, Heavy equipment transportation &
              Customs clearance in Sharjah, Dubai and other parts of emirates.
            </p>

            
            {/* Social Icons */}
           <div className="flex gap-4">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-red-100 text-red-600
                   flex items-center justify-center
                   hover:bg-red-600 hover:text-white transition"
      >
        <Icon size={16} />
      </a>
    );
  })}
</div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
  <li><Link to="/" className="hover:text-red-600">Home</Link></li>
  <li><Link to="about/our-story" className="hover:text-red-600">About</Link></li>
  
  <li><Link to="/services" className="hover:text-red-600">Services</Link></li>
  <li><Link to="/contact-us" className="hover:text-red-600">Contact</Link></li>

  {/* ✅ ADD HERE */}
  <li><Link to="/terms" className="hover:text-red-600">Terms & Conditions</Link></li>
  
</ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
  <li>
    <Link to="/services/freight-shipping-service" className="hover:text-red-600">
      International Shipping Air
    </Link>
  </li>
  <li>
    <Link to="/services/health-care-storage-solutions" className="hover:text-red-600">
      Health Care Storage Solutions
    </Link>
  </li>
  <li>
    <Link to="/services/logistics-transport-sharjah" className="hover:text-red-600">
      Logistics Transport Sharjah
    </Link>
  </li>
  <li>
    <Link to="/services/storage-warehouse-dubai" className="hover:text-red-600">
      Storage Warehouse Dubai
    </Link>
  </li>
  <li>
    <Link to="/services/container-logistics-transport-sharjah" className="hover:text-red-600">
      Container Freight Logistics
    </Link>
  </li>
</ul>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="text-red-600 font-semibold mb-6">Location</h4>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Hamriyah Free Zone, Sharjah<br />
              P.O Box 42163
            </p>

            <p className="text-sm mb-2">
              <span className="text-red-600">Call us:</span><br />
              <span className="text-gray-500"><a
                href="tel:>+971509322335"
                className="text-gray-500 hover:text-red-600"
              >+971 50 9322 335</a></span>
            </p>

            <p className="text-sm">
              <span className="text-red-600">Email us:</span><br />
              <a
                href="mailto:sales@oss-me.com"
                className="text-gray-500 hover:text-red-600"
              >
                sales@oss-me.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-red-600 py-4 text-center">
        <p className="text-white text-sm">
          © 2026 . OSS . All Rights Reserved Designed By <a href="https://syspree.com/">Syspree Digital</a>
        </p>
      </div>

    </footer>
  );
}
