import { Link } from "react-router-dom";
import InnerHero from "../../components/InnerHero";
import useMeta from "../../hooks/useMeta";


const services = [
  // {
  //   title: "Medical Equipment Healthcare Storage",
  //   link: "/services/medical-equipment-healthcare-storage",
  // },
  {
    title: "Logistics Transport Sharjah",
    link: "/services/logistics-transport-sharjah",
  },
  {
    title: "Inventory Management Solutions",
    link: "/services/inventory-management-solutions",
  },
  {
    title: "International Truck Shipping",
    link: "/services/international-truck-shipping",
  },
  // {
  //   title: "Health Care Storage Solutions",
  //   link: "/services/health-care-storage-solutions",
  // },
  {
    title: "Freight Shipping Service",
    link: "/services/freight-shipping-service",
  },
  {
    title: "Container Cross Stuffing",
    link: "/services/container-cross-stuffing",
  },
  {
    title: "Break Bulk Cargo Clearance",
    link: "/services/break-bulk-cargo-clearance",
  },
  {
    title: "Shipping Logistic Management",
    link: "/services/shipping-logistic-management",
  },
  {
    title: "Small Storage Warehouse",
    link: "/services/small-storage-warehouse-for-rent",
  },
  {
    title: "Hamriyah Free Zone Warehouse",
    link: "/services/hamriyah-free-zone-warehouse-rent",
  },
  {
    title: "Storage Space Sharjah",
    link: "/services/storage-space-sharjah",
  },
  {
    title: "Storage Warehouse Dubai",
    link: "/services/storage-warehouse-dubai",
  },
  {
    title: "Storage Space Dubai",
    link: "/services/storage-space-rent-dubai",
  },
  // {
  //   title: "Storage Facility Abu Dhabi",
  //   link: "/services/storage-facility-abu-dhabi",
  // },
  {
    title: "Chiller Storage Warehouse",
    link: "/services/chiller-storage-warehouse",
  },
  {
    title: "Freight Logistics Trucking",
    link: "/services/freight-logistics-trucking",
  },
  {
    title: "Forwarding Freight Companies",
    link: "/services/forwarding-freight-companies",
  },
  {
    title: "International Shipping Forwarder",
    link: "/services/international-shipping-forwarder",
  },
  {
    title: "Freight Forwarding Companies Sharjah",
    link: "/services/freight-forwarding-companies-sharjah",
  },
  {
    title: "Cargo Service Dubai",
    link: "/services/cargo-service-dubai",
  },
  {
    title: "Logistic Truck Company Sharjah",
    link: "/service/logistic-truck-company-sharjah",
  },
  {
    title: "Container Freight Logistics",
    link: "/service/container-freight-logistics",
  },
  {
    title: "Container Logistics Transport Sharjah",
    link: "/service/container-logistics-transport-sharjah",
  },
  {
    title: "Freight Logistics Services",
    link: "/service/freight-logistics-services",
  },
  {
    title: "Freight Forwarding Management",
    link: "/service/freight-forwarding-management",
  },
  {
    title: "Hamriyah Port Sharjah",
    link: "/service/hamriyah-port-sharjah",
  },
  {
    title: "International Shipping Air",
    link: "/service/international-shipping-air",
  },
  {
    title: "Shipping Companies Sharjah",
    link: "/service/shipping-companies-sharjah",
  },
  {
    title: "Transport Logistic Service Sharjah",
    link: "/service/transport-logistic-service-sharjah",
  },
  {
    title: "Warehouse Storage Space",
    link: "/service/warehouse-storage-space-for-rent",
  },
];

export default function ServicesPage() {
    useMeta(
        "Leading International Shipping Air Services | OSS FZC",
        "OSS FZC delivers safe, timely, and cost-effective international air shipping solutions designed for seamless global freight movement."
      );
    
  return (
    <>
     {/* HERO */}
          <InnerHero
            eyebrow="Fast. Reliable. Global."
            title="Our Services"
            subtitle="Experience seamless global transportation—contact us today!"
            buttonText="Contact Us"
            buttonLink="/contact-us"
            backgroundImage="/images/services/Yard-for-Rent-in-Sharjah.jpg"
          />
   <section className="bg-white pt-[100px] pb-24">
      <div className="mx-auto max-w-[1300px] px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          Our Logistics Services
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className="border p-6 rounded-lg hover:shadow-lg transition"
            >
              {service.title}
            </Link>
          ))}

        </div>

      </div>
    </section>
    </>
  );
}