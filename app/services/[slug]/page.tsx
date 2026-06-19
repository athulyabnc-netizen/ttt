import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faTruck, faTruckLoading, faShippingFast, faRoad, faAnchor,
  faBox, faTools, faUserGear, faClock, faAmbulance,
  faBowlFood, faUtensils, faShieldHalved, faHeadset,
  faMapMarkerAlt, faAward, faUsers, faCheckCircle, faChartLine,
} from '@fortawesome/free-solid-svg-icons';

type Feature  = { icon: IconDefinition; title: string; description: string };
type SvcType  = { title: string; description: string };
type Stat     = { value: string; label: string };

type ServiceData = {
  title: string;
  tagline: string;
  image: string;
  overview: string;
  stats: Stat[];
  features: Feature[];
  types: SvcType[];
};

const services: Record<string, ServiceData> = {
  'truck-rental': {
    title: 'Truck Rental',
    tagline: 'Reliable trucks for every cargo need',
    image: '/images/truck-rental.png',
    overview:
      'Keep operations running smoothly, rent out a truck to delivery and have goods moved from site to site, for industrial transport or for large-scale logistics. Home delivery is available and we have a selection of a variety of well-maintained vehicles to suit all cargo needs supported by professional and prompt service.\n\nOur flexible rates, reliable service and safety guarantee your cargo arrives on time and in good order',
    stats: [
      { value: '100+', label: 'Trucks Available' },
      { value: '24/7', label: 'Service Hours' },
      { value: '50+', label: 'Cities Covered' },
    ],
    features: [
      { icon: faTruck,       title: 'Modern Fleet',           description: 'With a varied range of trucks that can be maintained, you can rely on them for light load or heavy commercial transport.' },
      { icon: faUserGear,    title: 'Experienced Drivers',   description: 'We have high trained and licensed drivers who are aware of the Saudi road rules and hence values safe delivery yet effective one.' },
      { icon: faClock,       title: '24/7 Service Support',      description: 'The 24-hours service allows for constant transport operations whenever you require them.' },
      { icon: faShieldHalved,title: 'Fully Insured Vehicles',          description: 'This is in reference to the insurance that is included with every rental, providing full insurance to bring you a lot of comfort and peace of mind in your cargo protection.' },
      { icon: faTools,       title: 'Routine Maintenance',    description: 'Regular inspections are performed for all trucks to reduce downtime and ensure high level of truck reliability through preventive maintenance.' },
      { icon: faMapMarkerAlt,title: 'Kingdom-Wide Availability',    description: 'We offer pickup vehicles rental services at the major cities and industrial areas in Saudi Arabia.' },
    ],
    types: [
      { title: 'Flatbed Trucks',       description: 'Ideal for moving big machinery, steel, pipes, pipes and piles, and over-sized loads that need open loading space' },
      { title: 'Pickup Trucks',        description: 'Best solution for carrying or delivery of small quantities, equipment transport and last mile logistics for business.' },
      { title: 'Box Trucks',           description: 'Freight trucks that are completely covered and close to the weather, dust and external damage while being transported.' },
      { title: 'Heavy-Duty Trucks',    description: 'Designed for heavy-duty applications in industrial operations, infrastructure, bulk materials and overland and long haul transport.' },
      { title: 'Refrigerated Trucks',  description: 'Cold storage trucks for carrying food items, medicines, milk, frozen foods and fragile items.' },
    ],
  },

  'crane-rental': {
    title: 'Crane Rental',
    tagline: 'Precision lifting for every project',
    image: '/images/crane-rental.png',
    overview:
      'Effective crane rental solutions are crafted to handle tasks that require accuracy, force, and safety. We can offer a state of the art fleet of cranes with highly skilled operators to suit the needs of the construction site, factory installation or heavy mobile equipment transfer or infrastructure project.\n\nRental flexibility along with rigorous safety protocols and dependable support services ensures that businesses can handle large-scale lifting tasks safely and efficiently, on time.',
    stats: [
      { value: '50+',  label: 'Crane Units' },
      { value: '500T', label: 'Max Lift Capacity' },
      { value: '100%', label: 'Safety Compliance' },
    ],
    features: [
      { icon: faTruckLoading, title: 'High Lifting Capacity', description: 'We provide fleet of cranes suitable for the load and project size and complexity' },
      { icon: faUserGear,     title: 'Certified Operators',    description: 'All of the cranes are operated by trained and licensed operators who adhere to industry best practices and safety protocols.' },
      { icon: faShieldHalved, title: 'Safety-Focused Operations',           description: 'All safety measures are taken to high standards, and thorough job site inspections are performed for safe lifting on each project.' },
      { icon: faTools,        title: 'Well-Maintained Equipment',  description: 'Our cranes are regularly serviced and maintained in an effort to ensure they operate at their peak and perform consistently.' },
      { icon: faClock,        title: 'Timely Deployment',     description: 'We make certain our team mobilizes swiftly and delivers on schedule, keeping your project on schedule.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage',     description: 'Rental of cranes in all major cities and industrial areas in Saudi Arabia.' },
    ],
    types: [
      { title: 'Mobile Cranes',      description: 'General cranes are suited to construction sites, equipment installations, and any lifting tasks and are easily moved between locations.' },
      { title: 'Telescopic Cranes',  description: 'Perfect for those jobs that need longer reach and lift, such as two-story buildings, industrial settings, and the like.' },
      { title: 'Crawler Cranes',     description: 'The cranes are designed for heavy-duty applications and have a high degree of stability, which is essential for large infrastructure projects or difficult site conditions.' },
      { title: 'Pick and Carry Cranes',     description: 'Compact and mobile to suit the handling and lifting work in confined locations.' },
      { title: 'Tower Cranes',       description: 'Designed for tall building sites with high lifting capacity, long reach, and high heights.' },
    ],
  },

  'logistics-transport': {
    title: 'Logistics Transport',
    tagline: 'Seamless supply chain from start to finish',
    image: '/images/logistic-transport.png',
    overview:
      'Our logistics supply services provide businesses throughout Saudi Arabia with complete solutions for product movement from one point to another, ensuring safe, efficient, and fast transportation. Technology, expertise, and efficient fleet management from local deliveries to regional logistics to warehousing and last-mile delivery help your business run smoothly.\n\n We specialize in optimization, safety & timeliness—thereby helping our clients to reduce their costs and optimize their value chains.',
    stats: [
      { value: '1000+', label: 'Deliveries/Month' },
      { value: '50+',   label: 'Routes Covered' },
      { value: '99%',   label: 'On-Time Rate' },
    ],
    features: [
      { icon: faShippingFast, title: 'Fast & Reliable Delivery',        description: 'Optimized routing and planning make it certain that your shipments are delivered on time, every time.' },
      { icon: faHeadset,      title: 'Dedicated Logistics Support',    description: 'Our seasoned team will coordinate and respond personally with you during the transporting process.' },
      { icon: faShieldHalved, title: 'Secure Cargo Handling',        description: 'From pickup to delivery, every effort is made to minimize risk and ensure product integrity.' },
      { icon: faClock,        title: 'Real-Time Shipment Tracking',   description: 'Be notified and become visible of your cargo status along a journey and when it is delivered.' },
      { icon: faUsers,        title: 'Experienced Logistics Team',     description: 'We have industry experience and are operating efficiently, which enables us to manage complex transportation requirements.' },
      { icon: faChartLine,    title: 'Scalable Transport Solutions',   description: 'From the one-off delivery to long-term logistical support, our services can be custom-designed to meet the needs of your changing business needs.' },
    ],
    types: [
      { title: 'Supply Chain Management', description: 'Perfect coordination from procurement to delivery and transit for streamlined business operations.' },
      { title: 'Last-Mile Delivery',      description: 'Last-mile logistics for retailers, warehouses, and customers that are quick and reliable.' },
      { title: 'Warehousing & Storage',   description: 'Get/receive and store material and equipment safely in an organized manner, short- and long-term.' },
      { title: 'Distribution Services',   description: 'Effective distribution networks are the manufacturers, wholesalers, retailers, and commercial enterprises in the distribution chain' },
      { title: 'Cross-Docking',           description: 'We achieve flexible goods transfer and delivery to and from inbound/outbound transport with shorter storage time and faster deliveries.' },
    ],
  },

  'heavy-equipment-moving': {
    title: 'Heavy Equipment Moving',
    tagline: 'Safe transport of your most critical assets',
    image: '/images/heavyequipment-moving.png',
    overview:
      'The services we offer include safe, efficient, and reliable heavy equipment moving solutions to transport equipment for construction, industrial, oil & gas, and infrastructure projects all over Saudi Arabia. The use of machinery and oversized equipment, such as excavators and cranes, is carefully kept planned and plotted from start to finish. We are backed by dedicated trailers, trained staff, and safety protocols, we are able to carry out complex moves with minimal downtime, ensuring they deliver to your project site on time.',
    stats: [
      { value: '500+', label: 'Moves Completed' },
      { value: '0',    label: 'Damage Record' },
      { value: '100%', label: 'Permits Handled' },
    ],
    features: [
      { icon: faTruck,        title: 'Specialized Transport Equipment', description: 'We transport heavy machinery and equipment that exceed the standard load capacity in a safe and secure way using heavy-duty trailers and transport vehicles.' },
      { icon: faUserGear,     title: 'Experienced Handling Team',       description: 'Precision and care are given to loading, securing, transporting, and unloading by our trained personnel.' },
      { icon: faShieldHalved, title: 'Safe & Secure Operations',        description: 'All operations are carried out in line with industry best practices to ensure employee and equipment safety during transit.' },
      { icon: faRoad,         title: 'Route Planning & Permits',        description: 'Routes and required permits are carefully planned and coordinated for smooth operations and in compliance with the requirements.' },
      { icon: faClock,        title: 'On-Time Project Delivery',        description: 'A precise schedule and execution keep your construction or industry project on track.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Service Coverage',     description: 'Heavy equipment moving is available throughout the major cities, industrial areas, and distant project sites in Saudi Arabia.' },
    ],
    types: [
      { title: 'Construction Equipment Transport',   description: 'Safe moving of excavators, bulldozers, loaders, graders, and other construction machinery.' },
      { title: 'Industrial Machinery Relocation', description: 'Moving heavy industrial equipment, manufacturing units, generators, or machines.' },
      { title: 'Oversized Load Transport',    description: 'Custom solutions for unusual and oversized shippers that need special trailers and route routing.' },
      { title: 'Moving of Plant & Factory Equipment',       description: 'Tools and machinery in and out of the factory from setting up, expanding, or relocating' },
      { title: 'Project Cargo Logistics',       description: 'Extensive transportation services for mega-projects, infrastructure, and/or energy applications.' },
    ],
  },

  'container-transport': {
    title: 'Container Transport',
    tagline: 'Reliable container handling across KSA',
    image: '/images/container-transport.png',
    overview:
      'With our container transport services, you can be guaranteed to move shipping containers across Saudi Arabia in a reliable and efficient manner. From loading/unloading containers at ports, moving cargo from one warehouse to another or delivering goods to industrial locations, our specialized, towering fleet maintains safe and timely operations. Our experienced drivers, advanced planning, and dedication to security help businesses streamline supply chains and ensure cargo movement without delay.',
    stats: [
      { value: '200+', label: 'Containers/Month' },
      { value: '24/7', label: 'Port Operations' },
      { value: '50+',  label: 'Destinations' },
    ],
    features: [
      { icon: faBox,          title: 'Specialized Container Fleet',  description: 'Transport of 10ft, 20ft, 40ft, and oversized containers with the right specialist equipment.' },
      { icon: faAnchor,       title: 'Port-to-Destination Service', description: 'Seamless transport from seaports into the warehouse/factory distribution centers and project worksites.' },
      { icon: faShieldHalved, title: 'Safe Cargo Handling',         description: 'All goods are moved with specific cautionary precautions to protect goods, which has allowed valuable items in all containers.' },
      { icon: faClock,        title: 'Timely Deliveries',           description: 'The optimized routing and professional coordination ensures minimal wasted time and delays.' },
      { icon: faUserGear,     title: 'Experienced Transport Team',  description: 'You benefit from our experts services in our logistics and driving crews, which always work in full operational support with the containers.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage',         description: 'Container transport in Saudi Arabia to various ports and industrial and urban areas in the kingdom.' },
    ],
    types: [
      { title: 'Port Container Haulage', description: 'Quick transfer of containers to and from ports and customer sites.' },
      { title: 'Warehouse-to-Warehouse Transport',          description: 'An efficient flow of goods between storage areas, hubs, and distribution centers.' },
      { title: 'Industrial & Project Site Delivery',  description: 'Moving equipment, materials, or supplies safely to project sites.' },
      { title: 'Empty Container Repositioning',      description: 'Renting empty containers in a cost-effective manner to ports, depots, and/or designated facilities.' },
      { title: 'Full Container Load (FCL) Transport.',     description: 'Full container transportation, secure, uninterrupted, fully loaded delivery.' },
    ],
  },

  'machinery-lifting': {
    title: 'Machinery Lifting',
    tagline: 'Expert hoisting for industrial applications',
    image: '/images/machinery-detail.png',
    overview:
      'TT Global delivers professional machinery lifting services using advanced hoisting equipment and certified riggers. From factory floor relocations to placing equipment at height, our lifting team ensures every job is executed with precision, speed, and uncompromising safety.',
    stats: [
      { value: '300+', label: 'Lifts Completed' },
      { value: '0',    label: 'Safety Incidents' },
      { value: '100T+',label: 'Max Lift Capacity' },
    ],
    features: [
      { icon: faTruckLoading, title: 'Advanced Hoisting Equipment', description: 'Chain hoists, hydraulic jacks, gantry cranes, and custom lifting frames for all applications.' },
      { icon: faShieldHalved, title: 'Certified Riggers',           description: 'All rigging performed by certified specialists following international lifting codes.' },
      { icon: faTools,        title: 'Load Calculation',            description: 'Detailed engineering analysis conducted before every lift to ensure structural safety.' },
      { icon: faAward,        title: 'Lift Plan & Risk Assessment', description: 'Comprehensive lift plans with full risk assessments prepared for each individual job.' },
      { icon: faClock,        title: 'Minimal Downtime',            description: 'Efficient execution keeps equipment downtime to the absolute minimum.' },
      { icon: faUsers,        title: 'Experienced Crew',            description: 'A seasoned lifting team that has handled complex industrial jobs across Saudi Arabia.' },
    ],
    types: [
      { title: 'In-Plant Lifts',        description: 'Lifting and repositioning of machinery within factories and industrial facilities.' },
      { title: 'Plant Relocation',       description: 'Heavy lifting support during full plant or production line relocation projects.' },
      { title: 'Crane-Assisted Lifting', description: 'Using mobile and crawler cranes for large, complex lifts requiring high capacity.' },
      { title: 'Tandem Lifting',         description: 'Coordinated multi-crane operations for exceptionally heavy or wide loads.' },
      { title: 'Precision Placement',    description: 'Accurate placement of sensitive or delicate machinery into tight or exact positions.' },
    ],
  },

  'cargo-transport': {
    title: 'Cargo Transport',
    tagline: 'Your goods delivered safely, every time',
    image: '/images/cargo-transport.png',
    overview:
      'TT Global offers reliable cargo transport services for businesses across Saudi Arabia. Whether you need regular deliveries or a one-off shipment, our fleet and experienced drivers are ready to move your goods safely, on schedule, and at competitive rates.',
    stats: [
      { value: '5000+', label: 'Shipments Delivered' },
      { value: '100%',  label: 'Tracking Coverage' },
      { value: '98%',   label: 'On-Time Delivery' },
    ],
    features: [
      { icon: faTruck,        title: 'Versatile Fleet',     description: 'A full range of cargo vehicles suited for every load type, size, and destination.' },
      { icon: faShieldHalved, title: 'Insured Cargo',       description: 'All shipments covered by comprehensive cargo insurance for full financial protection.' },
      { icon: faClock,        title: 'Timely Delivery',     description: 'Reliable scheduling and route management to guarantee on-time arrival of every shipment.' },
      { icon: faHeadset,      title: 'Live Tracking',       description: 'Real-time GPS tracking so you always know the exact location and status of your cargo.' },
      { icon: faTools,        title: 'Careful Handling',    description: 'Trained loading crews handle all goods with care to prevent any damage during transit.' },
      { icon: faMapMarkerAlt, title: 'Door-to-Door',        description: 'Complete pickup and delivery from origin to final destination anywhere in KSA.' },
    ],
    types: [
      { title: 'General Cargo',       description: 'Transport of packaged goods, pallets, boxes, and standard commercial shipments.' },
      { title: 'Bulk Cargo',          description: 'Moving large quantities of loose materials such as sand, grain, aggregates, and chemicals.' },
      { title: 'Breakbulk Cargo',     description: 'Transport of individually packaged, non-containerised cargo of all sizes.' },
      { title: 'Hazardous Materials', description: 'Specialist transport of hazardous goods in full compliance with Saudi safety regulations.' },
      { title: 'Oversized Cargo',     description: 'Handling and transport of abnormal-load cargo requiring special permits and escort.' },
    ],
  },

  'emergency-transport': {
    title: 'Emergency Transport',
    tagline: '24/7 rapid response when it matters most',
    image: '/images/emergency-transport.png',
    overview:
      'When time is critical, TT Global\'s emergency transport team is ready to respond. Available 24 hours a day, 7 days a week, our emergency fleet is strategically positioned across Saudi Arabia to provide the fastest possible response to urgent transportation needs.',
    stats: [
      { value: '1-2h',    label: 'Response Time' },
      { value: '24/7',    label: 'Always Available' },
      { value: 'KSA',     label: 'Full Coverage' },
    ],
    features: [
      { icon: faAmbulance,    title: 'Rapid Response',        description: 'Emergency units dispatched within 60 minutes in major cities and 2 hours in other regions.' },
      { icon: faClock,        title: '24/7 Hotline',          description: 'Dedicated emergency line staffed around the clock, every day of the year.' },
      { icon: faShieldHalved, title: 'Priority Dispatch',     description: 'Emergency requests are immediately escalated and given the highest dispatch priority.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage',   description: 'Standby trucks positioned across the Kingdom for rapid emergency deployment.' },
      { icon: faUserGear,     title: 'Trained Crew',          description: 'Specialists trained to handle urgent scenarios calmly and efficiently under pressure.' },
      { icon: faHeadset,      title: 'Real-Time Coordination',description: 'Operations centre monitors and coordinates every emergency job from dispatch to delivery.' },
    ],
    types: [
      { title: 'Breakdown Recovery',       description: 'Immediate vehicle and cargo recovery for trucks and fleet that break down on the road.' },
      { title: 'Critical Deliveries',      description: 'Time-sensitive deliveries for production lines, medical facilities, and urgent project sites.' },
      { title: 'Disaster Response',        description: 'Logistics support during natural disasters, industrial incidents, and emergency relief operations.' },
      { title: 'Medical Supply Transport', description: 'Rapid transport of medical equipment, supplies, and pharmaceuticals to hospitals and clinics.' },
      { title: 'Project Emergency Support',description: 'Emergency crane, truck, and equipment deployment for critical construction or industrial situations.' },
    ],
  },

  'restaurant': {
    title: 'Restaurant',
    tagline: 'A taste of comfort, served with care',
    image: '/images/restaurant-detail.png',
    overview:
      'At TT Global\'s restaurant and café, we believe great food is the foundation of a productive day. We serve a diverse, hygienically prepared menu of wholesome meals, quick bites, and refreshing beverages — all made fresh and served in a clean, comfortable environment for all tastes and preferences.',
    stats: [
      { value: '50+',  label: 'Menu Items' },
      { value: '100%', label: 'Hygienic Kitchen' },
      { value: 'Daily',label: 'Fresh Ingredients' },
    ],
    features: [
      { icon: faBowlFood,     title: 'Diverse Menu',        description: 'A wide selection spanning local Saudi cuisine, international favourites, and healthy options.' },
      { icon: faShieldHalved, title: 'Hygienic Standards',  description: 'All meals prepared in a fully sanitised kitchen adhering to strict food safety regulations.' },
      { icon: faClock,        title: 'All-Day Dining',      description: 'Open for breakfast, lunch, and dinner — serving fresh meals throughout the day.' },
      { icon: faUsers,        title: 'Comfortable Setting', description: 'A welcoming dining space designed for both individual meals and group dining.' },
      { icon: faAward,        title: 'Fresh Ingredients',   description: 'Quality, fresh ingredients sourced daily to ensure the best taste and nutritional value.' },
      { icon: faHeadset,      title: 'Friendly Service',    description: 'A hospitable team dedicated to making every dining experience enjoyable and memorable.' },
    ],
    types: [
      { title: 'Breakfast Service',   description: 'A hearty selection of hot and cold breakfast items to start the day right.' },
      { title: 'Lunch Buffet',        description: 'A full spread of freshly cooked dishes served daily for an energising midday meal.' },
      { title: 'À la Carte Dinner',   description: 'An evening menu with individually prepared dishes for a relaxed dining experience.' },
      { title: 'Snacks & Beverages',  description: 'Hot drinks, cold beverages, and light snacks available throughout operating hours.' },
      { title: 'Take-Away',           description: 'Freshly packed meals available for take-away for busy individuals on the go.' },
    ],
  },

  'catering-services': {
    title: 'Catering Services',
    tagline: 'Nutritious meals delivered at scale',
    image: '/images/catering-detail.png',
    overview:
      'TT Global provides professional catering solutions for labour camps, corporate offices, and large-scale events across Saudi Arabia. We specialise in preparing and delivering hygienic, nutritionally balanced, and delicious meals to large groups — consistently, reliably, and on schedule.',
    stats: [
      { value: '500+',  label: 'Meals Per Day' },
      { value: '100%',  label: 'Hygienic Kitchen' },
      { value: 'KSA',   label: 'Delivery Reach' },
    ],
    features: [
      { icon: faUtensils,     title: 'Large-Scale Capacity',  description: 'Equipped to prepare and deliver hundreds to thousands of meals per day without compromising quality.' },
      { icon: faShieldHalved, title: 'Hygienic Preparation',  description: 'All meals produced in certified, regularly inspected kitchens meeting Saudi food safety standards.' },
      { icon: faAward,        title: 'Balanced Nutrition',    description: 'Menus designed to provide a balanced diet supporting workforce health and productivity.' },
      { icon: faClock,        title: 'Timely Delivery',       description: 'Punctual meal delivery on your schedule — breakfast, lunch, and dinner, every day.' },
      { icon: faUsers,        title: 'Workforce Specialists', description: 'Experienced in catering for diverse international workforces with varied dietary preferences.' },
      { icon: faHeadset,      title: 'Custom Menu Plans',     description: 'Flexible menu planning to meet specific dietary requirements, cultural preferences, and budgets.' },
    ],
    types: [
      { title: 'Labour Camp Catering', description: 'Structured daily meal programs for construction and industrial labour camps across KSA.' },
      { title: 'Corporate Catering',   description: 'Professional office catering for meetings, events, and daily corporate meal programs.' },
      { title: 'Event Catering',       description: 'Full-service catering for conferences, celebrations, product launches, and corporate events.' },
      { title: 'Outdoor Site Catering',description: 'Mobile catering solutions for remote project sites and outdoor work environments.' },
      { title: 'Bulk Meal Production', description: 'High-volume meal production for government, military, and large institutional clients.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

const seoMeta: Record<string, { title: string; description: string }> = {
  'truck-rental':           { title: 'Truck Rental Services in Saudi Arabia | TT Global',          description: 'Rent modern trucks across Saudi Arabia with TT Global. Flatbed, box, refrigerated & heavy-duty trucks available 24/7 with experienced drivers.' },
  'crane-rental':           { title: 'Crane Rental Services in Saudi Arabia | TT Global',          description: 'Professional crane rental in KSA — mobile, telescopic, crawler & tower cranes with certified operators. Safe, on-time lifting for every project.' },
  'logistics-transport':    { title: 'Logistics & Transport Solutions in Saudi Arabia | TT Global', description: 'End-to-end logistics and supply chain management across KSA. Fast delivery, real-time tracking, and dedicated support for your business.' },
  'heavy-equipment-moving': { title: 'Heavy Equipment Moving Services in Saudi Arabia | TT Global', description: 'Expert heavy equipment relocation in KSA — excavators, cranes, industrial machinery & oversized loads moved safely with zero damage record.' },
  'container-transport':    { title: 'Container Transport Services in Saudi Arabia | TT Global',   description: 'Reliable container transport from ports to warehouses and project sites across Saudi Arabia. 20ft, 40ft & oversized containers handled 24/7.' },
  'machinery-lifting':      { title: 'Machinery Lifting Services in Saudi Arabia | TT Global',     description: 'Precision machinery lifting and rigging in KSA. Certified riggers, specialized equipment, and strict safety compliance for every lift.' },
  'cargo-transport':        { title: 'Cargo Transport Services in Saudi Arabia | TT Global',       description: 'Fast and secure cargo transport across Saudi Arabia. Full cargo insurance, professional drivers, and on-time delivery guaranteed.' },
  'emergency-transport':    { title: 'Emergency Transport Services in Saudi Arabia | TT Global',   description: '24/7 emergency transport and rapid response logistics across KSA. Time-critical shipments handled with speed and full coordination.' },
  'restaurant':             { title: 'Restaurant Logistics & Food Delivery Solutions | TT Global', description: 'Reliable food supply chain and delivery logistics for restaurants in Saudi Arabia. Refrigerated transport and scheduled deliveries available.' },
  'catering-services':      { title: 'Catering Transport & Cold Chain Logistics | TT Global',      description: 'Fresh, on-time catering transport in KSA. Refrigerated vehicles ensure your food arrives safely for events and large-scale catering.' },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  const seo = seoMeta[slug] ?? { title: `${service.title} | TT Global Saudi Arabia`, description: service.overview.slice(0, 160) };
  return {
    title: seo.title,
    description: seo.description,
    icons: {
      icon: '/images/ttg-favicon.png',
      shortcut: '/images/ttg-favicon.png',
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: '/images/ttglobal-og.jpg', width: 1200, height: 630, alt: `TT Global ${service.title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/images/ttglobal-og.jpg'],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const statColors = ['#002554', '#ff6b35', '#002554'];

  const ctaMessages: Record<string, string> = {
    'truck-rental':          'From a one-time shipment to a continuous logistics demand, our team is available to deal with the “who and when” of logistics support.',
    'crane-rental':          'If you are in construction, industrial installation or heavy lifting operations, we have crane rental solutions to meet your project requirements',
    'logistics-transport':   'Assisting you from warehouses, distribution, and last-mile deliveries to complete supply chain management solutions.',
    'heavy-equipment-moving':'Connect us to move one piece of equipment or if you are transferring an entire project s equipment.',
    'container-transport':   'From port haulage to warehouse transfers and country-to-country container shipping, we can provide you with solutions you can rely on.',
    'machinery-lifting':     'Complex machinery lift? Our rigging experts ensure safe placement with zero downtime for your operations.',
    'cargo-transport':       'Ready to ship your cargo? We deliver across Saudi Arabia with speed, care, and full cargo insurance.',
    'emergency-transport':   'Time-critical shipment? Our emergency response team is on standby 24/7 to get your cargo moving fast.',
    'restaurant':            'Looking for reliable food delivery logistics? Let TT Global handle your restaurant\'s supply chain from source to table.',
    'catering-services':     'Planning a catering event? Our refrigerated transport ensures your food arrives fresh and on time, every time.',
  };

  const ctaText = ctaMessages[slug] ?? `Ready to book our ${service.title.toLowerCase()} service? Contact us now for a free quote tailored to your needs.`;

  return (
    <>
      <Header />

      {/* ── Hero Banner ── */}
      <section
        className="text-white d-flex align-items-end pb-5"
        style={{
          minHeight: '500px',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.78) 100%), url("${service.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '90px',
        }}
      >
        <div className="container pb-4">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/services" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  Services
                </Link>
              </li>
              <li className="breadcrumb-item active" style={{ color: 'white' }}>
                {service.title}
              </li>
            </ol>
          </nav>
          <h1 className="display-3 fw-bold mb-2">{service.title}</h1>
          <p className="fs-5 mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── Overview + Stats ── */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-primary-blue fw-bold mb-3">Overview</h2>
              <div
                style={{ width: '50px', height: '3px', background: '#ff6b35', marginBottom: '20px', borderRadius: '2px' }}
              />
              {service.overview.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted fs-5" style={{ lineHeight: '1.85' }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="col-lg-5">
              <div className="row g-3">
                {service.stats.map((stat, i) => (
                  <div className="col-4" key={i}>
                    <div
                      className="text-center p-3 rounded-3 h-100 d-flex flex-column align-items-center justify-content-center"
                      style={{ background: statColors[i], color: 'white', minHeight: '110px' }}
                    >
                      <div className="fw-bold" style={{ fontSize: '1.9rem', lineHeight: 1.1 }}>
                        {stat.value}
                      </div>
                      <div className="small mt-1" style={{ opacity: 0.85, fontSize: '0.78rem' }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="py-5 bg-light why-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2 className="section-title mt-2">Key Features</h2>
            <p className="section-subtitle">Everything you get with our {service.title.toLowerCase()} service</p>
          </div>

          <div className="row g-4">
            {service.features.map((feature, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="feature-card d-flex h-100">
                  <div className="icon-box me-3 flex-shrink-0">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Types ── */}
      {!['restaurant', 'catering-services'].includes(slug) && (
        <section className="py-5" style={{ background: '#f1f4f8' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-tag">WHAT WE PROVIDE</span>
              <h2 className="section-title mt-2">Types of {service.title}</h2>
              <p className="section-subtitle">Choose the right option that fits your requirements</p>
            </div>

            <div className="row g-4">
              {service.types.map((type, i) => (
                <div className="col-lg-6" key={i}>
                  <div
                    className="type-card d-flex rounded-3 overflow-hidden"
                    style={{ minHeight: '130px' }}
                  >
                    {/* Left coloured panel */}
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '88px',
                        background: i % 2 === 0 ? '#ff6b35' : '#002554',
                        color: 'white',
                        fontSize: '1.7rem',
                        fontWeight: 900,
                        letterSpacing: '-1px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Right content panel */}
                    <div className="p-4 bg-white flex-grow-1 d-flex flex-column justify-content-center">
                      <h5 className="fw-bold text-primary-blue mb-1">{type.title}</h5>
                      <p className="text-muted mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why TT Global + Get in Touch ── */}
      <section className="py-5 bg-light">
        <div className="container">
          {['restaurant', 'catering-services'].includes(slug) ? (
            /* Restaurant & Catering: two-column layout with Why Choose Us + Get in Touch */
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-tag">WHY CHOOSE US</span>
                <h2 className="section-title mt-2 mb-4">
                  Why TT Global for {service.title}?
                </h2>
                {[
                  'Saudi Arabia-wide coverage with a single trusted provider',
                  'Modern, well-maintained equipment and fleet',
                  'Experienced, certified, and professional team',
                  '24/7 availability and dedicated customer support',
                  'Transparent pricing with no hidden fees',
                  'Fully insured services for your peace of mind',
                ].map((point, i) => (
                  <div className="d-flex align-items-start mb-3" key={i}>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-primary-orange me-3 mt-1 flex-shrink-0"
                      style={{ fontSize: '1.1rem' }}
                    />
                    <span className="text-muted">{point}</span>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                <div
                  className="rounded-4 p-5 text-white"
                  style={{ background: 'linear-gradient(135deg, #002554 0%, #1e3a8a 100%)' }}
                >
                  <h4 className="fw-bold mb-4">Get in Touch</h4>
                  <p className="mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {ctaText}
                  </p>
                  <div className="d-flex flex-column gap-3">
                    <Link href="/contact" className="btn btn-primary-orange rounded-pill px-4 text-center">
                      Request a Quote
                    </Link>
                    <a
                      href="#!"
                      className="btn rounded-pill px-4 text-center"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}
                    >
                      Call +966 50 000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Other 8 services: centered Get in Touch card only */
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div
                  className="rounded-4 p-5 text-white"
                  style={{ background: 'linear-gradient(135deg, #002554 0%, #1e3a8a 100%)' }}
                >
                  <h4 className="fw-bold mb-4">Get in Touch</h4>
                  <p className="mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {ctaText}
                  </p>
                  <div className="d-flex flex-column gap-3">
                    <Link href="/contact" className="btn btn-primary-orange rounded-pill px-4 text-center">
                      Request a Quote
                    </Link>
                    <a
                      href="#!"
                      className="btn rounded-pill px-4 text-center"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}
                    >
                      Call +966 50 000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

<Footer />
      <WhatsAppButton />
    </>
  );
}
