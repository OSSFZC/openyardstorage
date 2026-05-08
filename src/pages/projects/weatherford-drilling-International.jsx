import InnerHero from "../../components/InnerHero";
import useMeta from "../../hooks/useMeta";

export default function WeatherfordDrillingInternational() {
   useMeta(
        "Weatherford Rig Logistics Project Handling UAE | OSS",
        "Explore OSS handling of Weatherford rig project with crane operations, storage, inventory management, and customs clearance across UAE logistics."
      );
  return (
<>
    <InnerHero
           
            backgroundImage="/images/industries/medical-bg.jpg"
          title="Weatherford Drilling International - Project " /> 
    
    
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Project Title */}
        <h2 className="text-[#e30613] font-semibold text-xl mb-8">
          1. Weatherford Drilling International - Project
        </h2>

        {/* First Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-black mb-3">
            Operation handled Land Rig –
          </h3>

          <ol className="list-decimal pl-6 space-y-2 text-gray-600">
            <li>
              Offloaded handled with heavy cranes 25, 50, 75, 100 Tons & Riggers
            </li>
            <li>
              Inventory maintained by OSS for all Entry & Exit stocks
            </li>
            <li>
              Customs clearance process completed 
            </li>
          </ol>
        </div>

        {/* Second Section */}
        <div className="mb-10">
          <h3 className="font-semibold text-black mb-3">
            Operation handled Land Rig –
          </h3>

          <ol
            className="list-decimal pl-6 space-y-2 text-gray-600"
            start={6}
          >
            <li>
              Safe & secure stored Rig equipment for a long-time basis.
            </li>
          </ol>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="/images/projects/weatherford1.png"
            alt="Weatherford Project"
            className="rounded-lg shadow-md w-full h-80 object-cover"
          />
          <img
            src="/images/projects/weatherford2.png"
            alt="Weatherford Project"
            className="rounded-lg shadow-md w-full h-80 object-cover"
          />
          <img
            src="/images/projects//weatherford3.png"
            alt="Weatherford Project"
            className="rounded-lg shadow-md w-full h-80 object-cover"
          />
          <img
            src="/images/projects/weatherford4.png"
            alt="Weatherford Project"
            className="rounded-lg shadow-md w-full h-80 object-cover"
          />
        </div>

      </div>
    </section>
    </>
  );
}