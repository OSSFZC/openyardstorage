import { defineConfig, loadEnv } from 'vite'
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

// Local development only: serve POST /api/send with the same api/send.js that
// Vercel runs in production, so the contact forms work with `npm run dev`.
// Settings come from .env.local (EMAIL_USER, EMAIL_PASS, EMAIL_TO, LEADHUB_URL).
function localApi(mode) {
  return {
    name: 'local-api-send',
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), '')
      for (const key of ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO', 'LEADHUB_URL']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }
      server.middlewares.use('/api/send', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const request = new Request('http://localhost/api/send', {
            method: 'POST',
            headers: { 'content-type': 'application/json', referer: req.headers.referer || '' },
            body: Buffer.concat(chunks).toString(),
          })
          const { POST } = await server.ssrLoadModule('/api/send.js')
          const response = await POST(request)
          res.statusCode = response.status
          res.setHeader('Content-Type', 'application/json')
          res.end(await response.text())
        } catch (error) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: error.message }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), permanentRedirects(), localApi(mode)],
  server: {
    proxy: {
      // Lead dashboard (oss-leads-dashboard, `npm run dev` on port 3001); on Vercel see vercel.json.
      '^/app(/|$)': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        ws: true, // Next.js dev live-reload; the page does not start without it
      },
      '/sanity': {
        target: 'https://wlhjrl6.api.sanity.io',
        changeOrigin: true,
        secure: true,
        // ❌ REMOVE rewrite completely
      },
    },
  },
}))