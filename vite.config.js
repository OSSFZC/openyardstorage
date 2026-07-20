import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Mirrors the 301 redirects in vercel.json (path-only, same-host redirects)
// so they also work against the local Vite dev server (localhost).
// The domain-canonicalization redirects (non-www -> www) in vercel.json are
// intentionally omitted here since there is only one host on localhost.
const localRedirects = [
  { source: '/services/', destination: '/services' },
  { source: '/projects/weatherford-drilling-International', destination: '/projects/weatherford-drilling-international' },
  { source: '/Contact-us', destination: '/contact-us' },
  { source: '/about/Inspiration', destination: '/about/inspiration' },
  { source: '/about/Founder', destination: '/about/founder' },
  { source: '/services/TransportLogisticSharjah', destination: '/services/logistics-transport-sharjah' },
  { source: '/services/StorageWarehouseDubai', destination: '/services/storage-warehouse-dubai' },
  { source: '/services/StorageSpaceSharjah', destination: '/services/storage-space-sharjah' },
  { source: '/services/StorageFacilityAbuDhabi', destination: '/services/storage-facility-abu-dhabi' },
  { source: '/services/SmallStorageWarehouse', destination: '/services/small-storage-warehouse-for-rent' },
  { source: '/services/ShippingLogisticManagement', destination: '/services/shipping-logistic-management' },
  { source: '/services/ShippingCompaniesSharjah', destination: '/service/shipping-companies-sharjah' },
  { source: '/services/MedicalEquipmentHealthcareStorage', destination: '/services/medical-equipment-healthcare-storage' },
  { source: '/services/MarineLogisticsSharjah', destination: '/projects/marine-logistics-sharjah' },
  { source: '/services/LogisticTruckCompanySharjah', destination: '/service/logistic-truck-company-sharjah' },
  { source: '/services/LogisticsTransportSharjah', destination: '/services/logistics-transport-sharjah' },
  { source: '/services/InventoryManagementSolutions', destination: '/services/inventory-management-solutions' },
  { source: '/services/InternationalTruckShipping', destination: '/services/international-truck-shipping' },
  { source: '/services/InternationalShippingForwarder', destination: '/services/international-shipping-forwarder' },
  { source: '/services/InternationalShippingAir', destination: '/service/international-shipping-air' },
  { source: '/services/HealthCareStorageSolutions', destination: '/services/health-care-storage-solutions' },
  { source: '/services/HamriyahPortSharjah', destination: '/service/hamriyah-port-sharjah' },
  { source: '/services/FreightShippingService', destination: '/services/freight-shipping-service' },
  { source: '/services/FreightLogisticsTrucking', destination: '/services/freight-logistics-trucking' },
  { source: '/services/FreightLogisticsServices', destination: '/service/freight-logistics-services' },
  { source: '/services/FreightForwardingCompaniesSharjah', destination: '/services/freight-forwarding-companies-sharjah' },
  { source: '/services/ForwardingFreightCompanies', destination: '/services/forwarding-freight-companies' },
  { source: '/services/ContainerLogisticsTransportSharjah', destination: '/service/container-logistics-transport-sharjah' },
  { source: '/services/ContainerFreightLogistics', destination: '/service/container-freight-logistics' },
  { source: '/services/ContainerCrossStuffing', destination: '/services/container-cross-stuffing' },
  { source: '/services/ChillerStorageWarehouse', destination: '/services/chiller-storage-warehouse' },
  { source: '/services/CargoServiceDubai', destination: '/services/cargo-service-dubai' },
  { source: '/services/BreakBulkCargoClearance', destination: '/services/break-bulk-cargo-clearance' },
  { source: '/about/VisionMission', destination: '/about/vision-mission' },
  { source: '/about/OurStory', destination: '/about/our-story' },
  { source: '/locations/shipping-sharjah', destination: '/locations/shipping-companies-in-sharjah' },
  { source: '/locations/cargo-dubai', destination: '/locations/cargo-service-to-dubai' },
  { source: '/warehousing-distribution', destination: '/industries/warehousing' },
  { source: '/about-us', destination: '/about/our-story' },
  { source: '/contacts', destination: '/contact-us' },
  { source: '/offshore-logistics', destination: '/industries/offshorelogistics' },
  { source: '/ship-spares-clearance', destination: '/industries/shipspares' },
  { source: '/services/WarehouseStorageSpace', destination: '/service/warehouse-storage-space-for-rent' },
  { source: '/services/StorageSpaceDubai', destination: '/services/storage-space-rent-dubai' },
  { source: '/services/HamriyahWarehouse', destination: '/services/hamriyah-free-zone-warehouse-rent' },
  { source: '/services/FreightForwardingManagement', destination: '/service/freight-forwarding-management' },
  { source: '/home/', destination: '/' },
  { source: '/locations/storage-abu-dhabi', destination: '/services/storage-facility-abu-dhabi' },
  { source: '/open-yard-storage-facility', destination: '/' },
]

function permanentRedirects() {
  return {
    name: 'permanent-redirects',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        const match = localRedirects.find((r) => r.source === url.pathname)
        if (match) {
          res.statusCode = 301
          res.setHeader('Location', match.destination + url.search)
          res.end()
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), permanentRedirects()],
  server: {
    proxy: {
      '/sanity': {
        target: 'https://wlhjrl6.api.sanity.io',
        changeOrigin: true,
        secure: true,
        // ❌ REMOVE rewrite completely
      },
    },
  },
})