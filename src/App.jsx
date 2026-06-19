import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/home/page";
import OurStory from "./pages/about/OurStory";
import Founder from "./pages/about/Founder";
import VisionMission from "./pages/about/VisionMission";
import Inspiration from "./pages/about/Inspiration";
import YardForRentInSharjah from "./pages/services/yard-for-rent-sharjah";
import ContactUs from "./pages/contact-us/Contact-us";

import WeatherfordDrillingInternational from "./pages/projects/weatherford-drilling-International";
import Apache from "./pages/projects/apache";
import TrinidadDrilling from "./pages/projects/trinidad-drilling";

import WoodenCrating from "./pages/services/wooden-crating";
import TemperatureControlledWarehouse from "./pages/services/temperature-controlled-warehouse";
import StorageWarehouseForRent from "./pages/services/storage-warehouse-for-rent";
import ShipSpareClearance from "./pages/services/ship-spare-clearance";
import MedicalEquipmentHealthcareStorage from "./pages/services/MedicalEquipmentHealthcareStorage";
import LogisticsTransportSharjah from "./pages/services/LogisticsTransportSharjah";
import InventoryManagementSolutions from "./pages/services/InventoryManagementSolutions";
import InternationalTruckShipping from "./pages/services/InternationalTruckShipping";
import HealthCareStorageSolutions from "./pages/services/HealthCareStorageSolutions";
import FreightShippingService from "./pages/services/FreightShippingService";
import ContainerCrossStuffing from "./pages/services/ContainerCrossStuffing";
import BreakBulkCargoClearance from "./pages/services/BreakBulkCargoClearance";
import ShippingLogisticManagement from "./pages/services/ShippingLogisticManagement";
import SmallStorageWarehouse from "./pages/services/SmallStorageWarehouse";
import HamriyahWarehouse from "./pages/services/HamriyahWarehouse";
import StorageSpaceSharjah from "./pages/services/StorageSpaceSharjah";
import StorageWarehouseDubai from "./pages/services/StorageWarehouseDubai";
import StorageSpaceDubai from "./pages/services/StorageSpaceDubai";
import StorageFacilityAbuDhabi from "./pages/services/StorageFacilityAbuDhabi";
import ChillerStorageWarehouse from "./pages/services/ChillerStorageWarehouse";
import FreightLogisticsTrucking from "./pages/services/FreightLogisticsTrucking";
import ForwardingFreightCompanies from "./pages/services/ForwardingFreightCompanies";
import InternationalShippingForwarder from "./pages/services/InternationalShippingForwarder";
import FreightForwardingCompaniesSharjah from "./pages/services/FreightForwardingCompaniesSharjah";
import CargoServiceDubai from "./pages/services/CargoServiceDubai";
import LogisticTruckCompanySharjah from "./pages/services/LogisticTruckCompanySharjah";
import ContainerFreightLogistics from "./pages/services/ContainerFreightLogistics";
import ContainerLogisticsTransportSharjah from "./pages/services/ContainerLogisticsTransportSharjah";
import FreightLogisticsServices from "./pages/services/FreightLogisticsServices";
import FreightForwardingManagement from "./pages/services/FreightForwardingManagement";
import HamriyahPortSharjah from "./pages/services/HamriyahPortSharjah";
import InternationalShippingAir from "./pages/services/InternationalShippingAir";
import ShippingCompaniesSharjah from "./pages/services/ShippingCompaniesSharjah";
import TransportLogisticSharjah from "./pages/services/TransportLogisticSharjah";
import WarehouseStorageSpace from "./pages/services/WarehouseStorageSpace";
import IndustryPage from "./pages/industries-we-serve/IndustryPage";
import LocationPage from "./pages/locations/LocationPage";
import ServicesPage from "./pages/services";
import BlogDetail from "./pages/BlogDetail";
import News from "./pages/News";
import Terms from "./pages/Terms";


import ThankYou from "./pages/thank-you";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/Founder" element={<Founder />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/inspiration" element={<Inspiration />} />
        <Route path="/services/yard-for-rent-sharjah" element={<YardForRentInSharjah />} />
        
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/projects/weatherford-drilling-international" element={<WeatherfordDrillingInternational />}/>
        <Route path="/projects/apache" element={<Apache />}/>
         <Route path="/projects/trinidad-drilling" element={<TrinidadDrilling />}/>
        <Route path="/services/wooden-crating" element={<WoodenCrating />} />
        <Route path="/services/temperature-controlled-warehouse" element={<TemperatureControlledWarehouse />} />
        <Route path="/services/storage-warehouse-for-rent" element={<StorageWarehouseForRent />} />
        <Route path="/services/ship-spare-clearance" element={<ShipSpareClearance />} />
        <Route
          path="/services/medical-equipment-healthcare-storage"
          element={<MedicalEquipmentHealthcareStorage />}
        />
        <Route
          path="/services/logistics-transport-sharjah"
          element={<LogisticsTransportSharjah />}
        />
        <Route
          path="/services/inventory-management-solutions"
          element={<InventoryManagementSolutions />}
        />
        <Route
          path="/services/international-truck-shipping"
          element={<InternationalTruckShipping />}
        />
        <Route
          path="/services/health-care-storage-solutions"
          element={<HealthCareStorageSolutions />}
        />
         <Route
          path="/services/freight-shipping-service"
          element={<FreightShippingService />}
        />       
        <Route
          path="/services/container-cross-stuffing"
          element={<ContainerCrossStuffing />}
        />
        <Route
          path="/services/break-bulk-cargo-clearance"
          element={<BreakBulkCargoClearance />}
        />

        <Route
          path="/services/shipping-logistic-management"
          element={<ShippingLogisticManagement />}
        />
        <Route
          path="/services/small-storage-warehouse-for-rent"
          element={<SmallStorageWarehouse />}
        />
        <Route
        path="/services/hamriyah-free-zone-warehouse-rent"
        element={<HamriyahWarehouse />}
        />
        <Route
          path="/services/storage-space-sharjah"
          element={<StorageSpaceSharjah />}
        />
        <Route
          path="/services/storage-warehouse-dubai"
          element={<StorageWarehouseDubai />}
        />
        <Route
        path="/services/storage-space-rent-dubai"
        element={<StorageSpaceDubai />}
        />
        <Route
          path="/services/storage-facility-abu-dhabi"
          element={<StorageFacilityAbuDhabi />}
        />
        <Route
          path="/services/chiller-storage-warehouse"
          element={<ChillerStorageWarehouse />}
        />
        <Route
          path="/services/freight-logistics-trucking"
          element={<FreightLogisticsTrucking />}
        />
        <Route
          path="/services/forwarding-freight-companies"
          element={<ForwardingFreightCompanies />}
        />
        <Route
          path="/services/international-shipping-forwarder"
          element={<InternationalShippingForwarder />}
        />
        <Route
          path="/services/freight-forwarding-companies-sharjah"
          element={<FreightForwardingCompaniesSharjah />}
        />
        <Route
          path="/services/cargo-service-dubai"
          element={<CargoServiceDubai />}
        />
        <Route
          path="/service/logistic-truck-company-sharjah"
          element={<LogisticTruckCompanySharjah />}
        />
        <Route
          path="/service/container-freight-logistics"
          element={<ContainerFreightLogistics />}
        />
        <Route
        path="/service/container-logistics-transport-sharjah"
        element={<ContainerLogisticsTransportSharjah />}
        />
        <Route
          path="/service/freight-logistics-services"
          element={<FreightLogisticsServices />}
        />
        <Route
        path="/service/freight-forwarding-management"
        element={<FreightForwardingManagement />}
        />
        <Route
        path="/service/hamriyah-port-sharjah"
        element={<HamriyahPortSharjah />}
        />
        <Route
        path="/service/international-shipping-air"
        element={<InternationalShippingAir />}
        />
       <Route
        path="/service/shipping-companies-sharjah"
        element={<ShippingCompaniesSharjah />}
        />
        <Route
        path="/service/transport-logistic-service-sharjah"
        element={<TransportLogisticSharjah />}
        />
        <Route
        path="/service/warehouse-storage-space-for-rent"
        element={<WarehouseStorageSpace />}
        />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/locations/:slug" element={<LocationPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/terms" element={<Terms />} />
        
    </Routes>
    
      
      <Footer />
    </BrowserRouter>
  );
}
