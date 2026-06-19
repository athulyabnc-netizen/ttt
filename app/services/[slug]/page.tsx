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

type Feature = { icon: IconDefinition; title: string; description: string };
type SvcType = { title: string; description: string };
type Stat = { value: string; label: string };

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
      { icon: faTruck, title: 'Modern Fleet', description: 'With a varied range of trucks that can be maintained, you can rely on them for light load or heavy commercial transport.' },
      { icon: faUserGear, title: 'Experienced Drivers', description: 'We have high trained and licensed drivers who are aware of the Saudi road rules and hence values safe delivery yet effective one.' },
      { icon: faClock, title: '24/7 Service Support', description: 'The 24-hours service allows for constant transport operations whenever you require them.' },
      { icon: faShieldHalved, title: 'Fully Insured Vehicles', description: 'This is in reference to the insurance that is included with every rental, providing full insurance to bring you a lot of comfort and peace of mind in your cargo protection.' },
      { icon: faTools, title: 'Routine Maintenance', description: 'Regular inspections are performed for all trucks to reduce downtime and ensure high level of truck reliability through preventive maintenance.' },
      { icon: faMapMarkerAlt, title: 'Kingdom-Wide Availability', description: 'We offer pickup vehicles rental services at the major cities and industrial areas in Saudi Arabia.' },
    ],
    types: [
      { title: 'Flatbed Trucks', description: 'Ideal for moving big machinery, steel, pipes, pipes and piles, and over-sized loads that need open loading space' },
      { title: 'Pickup Trucks', description: 'Best solution for carrying or delivery of small quantities, equipment transport and last mile logistics for business.' },
      { title: 'Box Trucks', description: 'Freight trucks that are completely covered and close to the weather, dust and external damage while being transported.' },
      { title: 'Heavy-Duty Trucks', description: 'Designed for heavy-duty applications in industrial operations, infrastructure, bulk materials and overland and long haul transport.' },
      { title: 'Refrigerated Trucks', description: 'Cold storage trucks for carrying food items, medicines, milk, frozen foods and fragile items.' },
    ],
  },

  'crane-rental': {
    title: 'Crane Rental',
    tagline: 'Precision lifting for every project',
    image: '/images/crane-rental.png',
    overview:
      'Effective crane rental solutions are crafted to handle tasks that require accuracy, force, and safety. We can offer a state of the art fleet of cranes with highly skilled operators to suit the needs of the construction site, factory installation or heavy mobile equipment transfer or infrastructure project.\n\nRental flexibility along with rigorous safety protocols and dependable support services ensures that businesses can handle large-scale lifting tasks safely and efficiently, on time.',
    stats: [
      { value: '50+', label: 'Crane Units' },
      { value: '500T', label: 'Max Lift Capacity' },
      { value: '100%', label: 'Safety Compliance' },
    ],
    features: [
      { icon: faTruckLoading, title: 'High Lifting Capacity', description: 'We provide fleet of cranes suitable for the load and project size and complexity' },
      { icon: faUserGear, title: 'Certified Operators', description: 'All of the cranes are operated by trained and licensed operators who adhere to industry best practices and safety protocols.' },
      { icon: faShieldHalved, title: 'Safety-Focused Operations', description: 'All safety measures are taken to high standards, and thorough job site inspections are performed for safe lifting on each project.' },
      { icon: faTools, title: 'Well-Maintained Equipment', description: 'Our cranes are regularly serviced and maintained in an effort to ensure they operate at their peak and perform consistently.' },
      { icon: faClock, title: 'Timely Deployment', description: 'We make certain our team mobilizes swiftly and delivers on schedule, keeping your project on schedule.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage', description: 'Rental of cranes in all major cities and industrial areas in Saudi Arabia.' },
    ],
    types: [
      { title: 'Mobile Cranes', description: 'General cranes are suited to construction sites, equipment installations, and any lifting tasks and are easily moved between locations.' },
      { title: 'Telescopic Cranes', description: 'Perfect for those jobs that need longer reach and lift, such as two-story buildings, industrial settings, and the like.' },
      { title: 'Crawler Cranes', description: 'The cranes are designed for heavy-duty applications and have a high degree of stability, which is essential for large infrastructure projects or difficult site conditions.' },
      { title: 'Pick and Carry Cranes', description: 'Compact and mobile to suit the handling and lifting work in confined locations.' },
      { title: 'Tower Cranes', description: 'Designed for tall building sites with high lifting capacity, long reach, and high heights.' },
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
      { value: '50+', label: 'Routes Covered' },
      { value: '99%', label: 'On-Time Rate' },
    ],
    features: [
      { icon: faShippingFast, title: 'Fast & Reliable Delivery', description: 'Optimized routing and planning make it certain that your shipments are delivered on time, every time.' },
      { icon: faHeadset, title: 'Dedicated Logistics Support', description: 'Our seasoned team will coordinate and respond personally with you during the transporting process.' },
      { icon: faShieldHalved, title: 'Secure Cargo Handling', description: 'From pickup to delivery, every effort is made to minimize risk and ensure product integrity.' },
      { icon: faClock, title: 'Real-Time Shipment Tracking', description: 'Be notified and become visible of your cargo status along a journey and when it is delivered.' },
      { icon: faUsers, title: 'Experienced Logistics Team', description: 'We have industry experience and are operating efficiently, which enables us to manage complex transportation requirements.' },
      { icon: faChartLine, title: 'Scalable Transport Solutions', description: 'From the one-off delivery to long-term logistical support, our services can be custom-designed to meet the needs of your changing business needs.' },
    ],
    types: [
      { title: 'Supply Chain Management', description: 'Perfect coordination from procurement to delivery and transit for streamlined business operations.' },
      { title: 'Last-Mile Delivery', description: 'Last-mile logistics for retailers, warehouses, and customers that are quick and reliable.' },
      { title: 'Warehousing & Storage', description: 'Get/receive and store material and equipment safely in an organized manner, short- and long-term.' },
      { title: 'Distribution Services', description: 'Effective distribution networks are the manufacturers, wholesalers, retailers, and commercial enterprises in the distribution chain' },
      { title: 'Cross-Docking', description: 'We achieve flexible goods transfer and delivery to and from inbound/outbound transport with shorter storage time and faster deliveries.' },
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
      { value: '0', label: 'Damage Record' },
      { value: '100%', label: 'Permits Handled' },
    ],
    features: [
      { icon: faTruck, title: 'Specialized Transport Equipment', description: 'We transport heavy machinery and equipment that exceed the standard load capacity in a safe and secure way using heavy-duty trailers and transport vehicles.' },
      { icon: faUserGear, title: 'Experienced Handling Team', description: 'Precision and care are given to loading, securing, transporting, and unloading by our trained personnel.' },
      { icon: faShieldHalved, title: 'Safe & Secure Operations', description: 'All operations are carried out in line with industry best practices to ensure employee and equipment safety during transit.' },
      { icon: faRoad, title: 'Route Planning & Permits', description: 'Routes and required permits are carefully planned and coordinated for smooth operations and in compliance with the requirements.' },
      { icon: faClock, title: 'On-Time Project Delivery', description: 'A precise schedule and execution keep your construction or industry project on track.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Service Coverage', description: 'Heavy equipment moving is available throughout the major cities, industrial areas, and distant project sites in Saudi Arabia.' },
    ],
    types: [
      { title: 'Construction Equipment Transport', description: 'Safe moving of excavators, bulldozers, loaders, graders, and other construction machinery.' },
      { title: 'Industrial Machinery Relocation', description: 'Moving heavy industrial equipment, manufacturing units, generators, or machines.' },
      { title: 'Oversized Load Transport', description: 'Custom solutions for unusual and oversized shippers that need special trailers and route routing.' },
      { title: 'Moving of Plant & Factory Equipment', description: 'Tools and machinery in and out of the factory from setting up, expanding, or relocating' },
      { title: 'Project Cargo Logistics', description: 'Extensive transportation services for mega-projects, infrastructure, and/or energy applications.' },
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
      { value: '50+', label: 'Destinations' },
    ],
    features: [
      { icon: faBox, title: 'Specialized Container Fleet', description: 'Transport of 10ft, 20ft, 40ft, and oversized containers with the right specialist equipment.' },
      { icon: faAnchor, title: 'Port-to-Destination Service', description: 'Seamless transport from seaports into the warehouse/factory distribution centers and project worksites.' },
      { icon: faShieldHalved, title: 'Safe Cargo Handling', description: 'All goods are moved with specific cautionary precautions to protect goods, which has allowed valuable items in all containers.' },
      { icon: faClock, title: 'Timely Deliveries', description: 'The optimized routing and professional coordination ensures minimal wasted time and delays.' },
      { icon: faUserGear, title: 'Experienced Transport Team', description: 'You benefit from our experts services in our logistics and driving crews, which always work in full operational support with the containers.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage', description: 'Container transport in Saudi Arabia to various ports and industrial and urban areas in the kingdom.' },
    ],
    types: [
      { title: 'Port Container Haulage', description: 'Quick transfer of containers to and from ports and customer sites.' },
      { title: 'Warehouse-to-Warehouse Transport', description: 'An efficient flow of goods between storage areas, hubs, and distribution centers.' },
      { title: 'Industrial & Project Site Delivery', description: 'Moving equipment, materials, or supplies safely to project sites.' },
      { title: 'Empty Container Repositioning', description: 'Renting empty containers in a cost-effective manner to ports, depots, and/or designated facilities.' },
      { title: 'Full Container Load (FCL) Transport.', description: 'Full container transportation, secure, uninterrupted, fully loaded delivery.' },
    ],
  },

  'machinery-lifting': {
    title: 'Machinery Lifting',
    tagline: 'Expert hoisting for industrial applications',
    image: '/images/machinery-detail.png',
    overview:
      'The lifting and positioning of heavy industrial equipment is done accurately, efficiently, and safely, giving the best machine lifting service allowed throughout Saudi Arabia. From factory machinery to construction equipment, generators or production units, our skilled employees utilise quality equipment and advanced lifting techniques to perform each project in the most accurate and safe manner possible.Whether you are installing, moving, maintaining or need support in conducting projects, we ensure little disruption and maximum reliability for various industries.',
    stats: [
      { value: '300+', label: 'Lifts Completed' },
      { value: '0', label: 'Safety Incidents' },
      { value: '100T+', label: 'Max Lift Capacity' },
    ],
    features: [
      { icon: faTruckLoading, title: 'Specialised Lifting Equipment', description: 'We are using state-of-the-art cranes, hydraulic systems and tools which are designed to cater to heavy and delicate machines.' },
      { icon: faShieldHalved, title: 'Skilled & Certified Operators', description: 'They have very long experience in handling the complicated lifting operations and conform to strict security procedures.' },
      { icon: faTools, title: 'Precision Handling', description: 'Each lift is carefully planned and carefully moved to ensure accurate placement and to try and keep valuable equipment safe.' },
      { icon: faAward, title: 'Safety-First Approach', description: 'Industry security measures and in-depth risk assessments are carried out on all projects.' },
      { icon: faClock, title: 'Efficient Project Execution', description: 'Professional and effective planning and professional crews minimise downtime and ensure your operation stays on schedule.' },
      { icon: faUsers, title: 'Nationwide Service Coverage', description: 'We offer machinery lifting services on all construction sites, in factories, in warehouses and in industrial zones in Saudi Arabia.' },
    ],
    types: [
      { title: 'In-Plant Lifts', description: 'The safe connection, redirection and lifting of heavy equipment in factories, warehouses and industrial plant environments with minimum downtime.' },
      { title: 'Plant Relocation', description: 'Thorough base to lift support to move production line, manufacturing equipment and entire industrial plants with accuracy and efficiency.' },
      { title: 'Crane-Assisted Lifting', description: 'Oversized lifting solutions, oversized industrial components and heavy lifting projects handled by mobile cranes and/or crawler cranes.' },
      { title: 'Tandem Lifting', description: 'Logistics and risks associated with coordinating multiple cranes for lifting very heavy, long or oddly shaped pieces of equipment that need coordinated lift and increased stability.' },
      { title: 'Precision Placement', description: 'Correct alignment and location of equipment in limited spaces and/or exact installations with specialised lifting techniques.' },
    ],
  },

  'cargo-transport': {
    title: 'Cargo Transport',
    tagline: 'Your goods delivered safely, every time',
    image: '/images/cargo-transport.png',
    overview:
      'Our cargo transport services are efficient, reliable and safe in Saudi Arabia for the movement of products. Whether you are dealing with general freight, bulky loads or unusual or oversized items, we guarantee that all your goods will be moved with care, accuracy and security. With a state-of-the-art fleet and a seasoned logistics team, we provide customised solutions to ensure your business continues to run smoothly.',
    stats: [
      { value: '5000+', label: 'Shipments Delivered' },
      { value: '100%', label: 'Tracking Coverage' },
      { value: '98%', label: 'On-Time Delivery' },
    ],
    features: [
      { icon: faTruck, title: 'Safe & Secure Transportation', description: 'All shipments are processed in line with good handling practices in industry, with the safety and integrity of your shipment at the forefront of our mind.' },
      { icon: faShieldHalved, title: 'Versatile Cargo Solutions', description: 'Our modes of transport carried varied types of cargo, from general goods, bulk goods, breakbulk goods and oversized loads.' },
      { icon: faClock, title: 'Timely Deliveries', description: 'Incorporating optimised route planning and efficient fleet management can help ensure that your cargo arrives on time and in good condition.' },
      { icon: faHeadset, title: 'Experienced Logistics Team', description: 'Every process of the transportation is managed by our proficient professionals for seamless functioning.' },
      { icon: faTools, title: 'Regulatory Compliance', description: 'We will follow all applicable transportation laws and safety requirements, such as special requirements where applicable.' },
      { icon: faMapMarkerAlt, title: 'Nationwide Coverage', description: 'Our cargo transportation goes to key cities, ports, industrial areas and construction sites in Saudi Arabia.' },
    ],
    types: [
      { title: 'General Cargo', description: 'Transportation of packaged goods, pallets, cartons, machinery parts and everyday commercial goods in an efficient and safe way around Saudi Arabia.' },
      { title: 'Bulk Cargo', description: 'An effective solution with high volumes of loose materials, for example: sand, aggregates, minerals, grain or other bulk materials.' },
      { title: 'Breakbulk Cargo', description: 'Professional loading/unloading of overhang/oversize loads such as industrial equipment, materials on projects, etc., that are not loaded in standard truck boxes or containers.' },
      { title: 'Hazardous Materials', description: 'Safe handling, transportation and training of hazardous and regulated materials, ensuring that all safety and environmental procedures are adhered to.' },
      { title: 'Oversized Cargo', description: 'Abnormal loads and heavy loads require special trailers and planning, both to load and unload goods and to obtain the permits and escort needed for proper and safe delivery from normal trailers.' },
    ],
  },

  'emergency-transport': {
    title: 'Emergency Transport',
    tagline: '24/7 rapid response when it matters most',
    image: '/images/emergency-transport.png',
    overview:
      'An emergency transport service in Saudi Arabia offers quick and reliable logistics solutions for time-sensitive shipments. From critical industrial equipment and nongenuine medical supplies to replacement machinery and cargo of high priority, our team is all here to ensure prompt response and safe delivery at all times.Our dedicated vehicles, experienced drivers, and effective route planning ensure that your operations run smoothly without disruption and that downtime is minimized.',
    stats: [
      { value: '1-2h', label: 'Response Time' },
      { value: '24/7', label: 'Always Available' },
      { value: 'KSA', label: 'Full Coverage' },
    ],
    features: [
      { icon: faAmbulance, title: 'Rapid Response', description: 'Need to transport at a moments notice? Our crew is there 24/7!' },
      { icon: faClock, title: 'Priority Dispatch', description: 'Immediate attention for emergency shipments – allocating the vehicles as quickly as possible and optimizing routes.' },
      { icon: faShieldHalved, title: 'Safe & Secure Handling', description: 'Critical cargo is transported as per the highest standards of care, ensuring that it arrives on time and intact.' },
      { icon: faMapMarkerAlt, title: 'Experienced Transport Team', description: 'Our drivers and logistics experts have the skills necessary for handling deliveries that are time-sensitive and under pressure.' },
      { icon: faUserGear, title: 'Real-Time Coordination', description: 'You are always updated during shipment and about the situation.' },
      { icon: faHeadset, title: 'Nationwide Coverage', description: 'This is a service provided to transport patients from major cities, industrial centers, and remote project sites to the hospital for emergency services to aid them in Saudi Arabia.' },
    ],
    types: [
      { title: 'Breakdown Recovery', description: 'Quick and efficient recovery and transportation of stranded trucks, commercial vehicles, and cargo, minimizing downtime and swift restoration.' },
      { title: 'Critical Deliveries', description: 'Priority shipping means transporting time-sensitive products like urgently needed industrial components, vital materials, and expensive goods.' },
      { title: 'Disaster Response', description: 'In the event of a natural disaster or industrial accident or crisis situation, ensuring correct movement of equipment and materials.' },
      { title: 'Medical Supply Transport', description: 'Rapid and reliable delivery of medical devices, pharmaceuticals, laboratory supplies, and other medical commodities to clinics and hospitals.' },
      { title: 'Project Emergency Support', description: 'Quick turnaround for cranes, trucks, heavy equipment, and logistical support to meet critical construction, industrial, and infrastructure project demands.' },
    ],
  },

  'restaurant': {
    title: 'Restaurant',
    tagline: 'A taste of comfort, served with care',
    image: '/images/restaurant-detail.png',
    overview:
      'We have committed ourselves to our restaurant chain\'s mission to provide the highest quality of meal service in our restaurants with comprehensive quality food, exceptional service, and hospitality. Our Saudi restaurants offer a wide variety of impressive dishes, using fresh ingredients and cooked to a high standard, and ensuring that all food items are prepared with the highest level of hygiene standards, enabling our outlets to be enjoyed by every family, professional, and food lover.Enhancing the wonderful taste we offer, we provide the best of customer service, whether you are at home or catching a bite to eat from our takeout menu or cooking up a large meal for a special occasion.',
    stats: [
      { value: '50+', label: 'Menu Items' },
      { value: '100%', label: 'Hygienic Kitchen' },
      { value: 'Daily', label: 'Fresh Ingredients' },
    ],
    features: [
      { icon: faBowlFood, title: 'Fresh & Quality Ingredients', description: 'All items served are made from carefully choosing the ingredients to assure good taste and uniformity.' },
      { icon: faShieldHalved, title: 'Diverse Menu Options', description: 'Our menu offers a great variety of dishes for different tastes and preferences, ranging from local dishes to international ones.' },
      { icon: faClock, title: 'Comfortable Dining Experience', description: 'Beloved by everyone due to a classic vibe, family-friendly ambiance, and welcoming service.' },
      { icon: faUsers, title: 'Fast Takeaway & Delivery', description: 'Have your favorite foods delivered at convenient times, with assurance.' },
      { icon: faAward, title: 'The requirements for high standards of hygiene.', description: 'Strict food safety and cleanliness procedures are adhered to in all food preparations, cooking, and service.' },
      { icon: faHeadset, title: 'Multiple Locations', description: 'We serve our customers in different cities and offer the same reliable quality and friendly service in all of our restaurants.' },
    ],
    types: [
      { title: 'Breakfast Service', description: 'A hearty selection of hot and cold breakfast items to start the day right.' },
      { title: 'Lunch Buffet', description: 'A full spread of freshly cooked dishes served daily for an energising midday meal.' },
      { title: 'À la Carte Dinner', description: 'An evening menu with individually prepared dishes for a relaxed dining experience.' },
      { title: 'Snacks & Beverages', description: 'Hot drinks, cold beverages, and light snacks available throughout operating hours.' },
      { title: 'Take-Away', description: 'Freshly packed meals available for take-away for busy individuals on the go.' },
    ],
  },

  'catering-services': {
    title: 'Catering Services',
    tagline: 'Nutritious meals delivered at scale',
    image: '/images/catering-detail.png',
    overview:
      'Catering is a door-to-door service of exceptional food and professional, high-class service to events of all sizes throughout Saudi Arabia. Whether you are hosting a corporate event, a wedding, a family funeral, or a large event, you can trust us to supply the menu, execution time, and execution to make your event a memorable one. First, our highly trained cooks use quality ingredients, and we delight in preparing each meal from scratch and serving it with a smile.',
    stats: [
      { value: '500+', label: 'Meals Per Day' },
      { value: '100%', label: 'Hygienic Kitchen' },
      { value: 'KSA', label: 'Delivery Reach' },
    ],
    features: [
      { icon: faUtensils, title: 'Customized Menus', description: 'Find a diverse selection of food types and mealtime choices to suit your event, tastes, and needs.' },
      { icon: faShieldHalved, title: 'Freshly Prepared Cuisine', description: 'All dishes are made from high-quality ingredients and are prepared in a hygienic way.' },
      { icon: faAward, title: 'Professional Service Team', description: 'Our professional full team of chefs works diligently to ensure a successful setup, quick service, and a smooth dining experience.' },
      { icon: faClock, title: 'Events of All Sizes', description: 'Whether it is a small party or a big business gathering, a wedding or a gathering, we serve every kind of event.' },
      { icon: faUsers, title: 'On-Time Delivery & Setup', description: 'We are mindful of time and get food and service prepared when your event starts.' },
      { icon: faHeadset, title: 'Complete Catering Solutions', description: 'We plan menus and buffets, have live counters on hand, and provide support at your events.' },
    ],
    types: [
      { title: 'Labour Camp Catering', description: 'Structured daily meal programs for construction and industrial labour camps across KSA.' },
      { title: 'Corporate Catering', description: 'Professional office catering for meetings, events, and daily corporate meal programs.' },
      { title: 'Event Catering', description: 'Full-service catering for conferences, celebrations, product launches, and corporate events.' },
      { title: 'Outdoor Site Catering', description: 'Mobile catering solutions for remote project sites and outdoor work environments.' },
      { title: 'Bulk Meal Production', description: 'High-volume meal production for government, military, and large institutional clients.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

const seoMeta: Record<string, { title: string; description: string }> = {
  'truck-rental': { title: 'Truck Rental Services in Saudi Arabia | TT Global', description: 'Rent modern trucks across Saudi Arabia with TT Global. Flatbed, box, refrigerated & heavy-duty trucks available 24/7 with experienced drivers.' },
  'crane-rental': { title: 'Crane Rental Services in Saudi Arabia | TT Global', description: 'Professional crane rental in KSA — mobile, telescopic, crawler & tower cranes with certified operators. Safe, on-time lifting for every project.' },
  'logistics-transport': { title: 'Logistics & Transport Solutions in Saudi Arabia | TT Global', description: 'End-to-end logistics and supply chain management across KSA. Fast delivery, real-time tracking, and dedicated support for your business.' },
  'heavy-equipment-moving': { title: 'Heavy Equipment Moving Services in Saudi Arabia | TT Global', description: 'Expert heavy equipment relocation in KSA — excavators, cranes, industrial machinery & oversized loads moved safely with zero damage record.' },
  'container-transport': { title: 'Container Transport Services in Saudi Arabia | TT Global', description: 'Reliable container transport from ports to warehouses and project sites across Saudi Arabia. 20ft, 40ft & oversized containers handled 24/7.' },
  'machinery-lifting': { title: 'Machinery Lifting Services in Saudi Arabia | TT Global', description: 'Precision machinery lifting and rigging in KSA. Certified riggers, specialized equipment, and strict safety compliance for every lift.' },
  'cargo-transport': { title: 'Cargo Transport Services in Saudi Arabia | TT Global', description: 'Fast and secure cargo transport across Saudi Arabia. Full cargo insurance, professional drivers, and on-time delivery guaranteed.' },
  'emergency-transport': { title: 'Emergency Transport Services in Saudi Arabia | TT Global', description: '24/7 emergency transport and rapid response logistics across KSA. Time-critical shipments handled with speed and full coordination.' },
  'restaurant': { title: 'Restaurant Logistics & Food Delivery Solutions | TT Global', description: 'Reliable food supply chain and delivery logistics for restaurants in Saudi Arabia. Refrigerated transport and scheduled deliveries available.' },
  'catering-services': { title: 'Catering Transport & Cold Chain Logistics | TT Global', description: 'Fresh, on-time catering transport in KSA. Refrigerated vehicles ensure your food arrives safely for events and large-scale catering.' },
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
    'truck-rental': 'From a one-time shipment to a continuous logistics demand, our team is available to deal with the “who and when” of logistics support.',
    'crane-rental': 'If you are in construction, industrial installation or heavy lifting operations, we have crane rental solutions to meet your project requirements',
    'logistics-transport': 'Assisting you from warehouses, distribution, and last-mile deliveries to complete supply chain management solutions.',
    'heavy-equipment-moving': 'Connect us to move one piece of equipment or if you are transferring an entire project s equipment.',
    'container-transport': 'From port haulage to warehouse transfers and country-to-country container shipping, we can provide you with solutions you can rely on.',
    'machinery-lifting': 'We assist you with the safe and reliable installation and movement of any heavy machinery in your projects.',
    'cargo-transport': 'Say you have to ship one particular shipment or load the transport of cargo; our team can provide reliable and cost-efficient shipping solutions.',
    'emergency-transport': 'Our emergency transport team is on standby, delivering fast and safe and reliable solutions.',
    'restaurant': 'Come to any of our restaurant locations or order today and experience our breakfasts and dinners, our excellent service, and a great restaurant experience.',
    'catering-services': 'Planning an event? Trust our catering team to bring your food to you and provide an outstanding service experience.',
  };

  const ctaText = ctaMessages[slug] ?? `Ready to book our ${service.title.toLowerCase()} service? Contact us now for a free quote tailored to your needs.`;

  const whyChooseUsPoints: Record<string, string[]> = {
    restaurant: [
      'Freshly prepared foods served for comforting dining experiences.',
      'Variety menu options that are prepared to suit different taste preferences.',
      'Friendly and welcoming hospitality.',
      'Well maintained and hygienic kitchen and dining areas.',
      'Operations across different locations with good quality of food and memorable experiences.',
      'Food service, including catering and takeaway.',
    ],
    'catering-services': [
      'Chef picked high-quality ethically sourced ingredients for flavor and quality.',
      'Custom menus catered to the requirements of each event and guests.',
      'Professional chefs and experienced staff providing seamless services through the process.',
      'On time delivery and efficient event set up services.',
      'Strict hygiene practices during food preparation, transport, and serving.',
      'Catering for large events, parties, weddings, and corporate events.',
    ],
  };

  return (
    <>
      <Header />

      {/* ── Hero Banner ── */}
      <section
        className="text-white d-flex align-items-end pb-5 page-hero-lg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.78) 100%), url("${service.image}")`,
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
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-tag">WHY CHOOSE US</span>
                <h2 className="section-title mt-2 mb-4">
                  Why TT Global for {service.title}?
                </h2>
                {(whyChooseUsPoints[slug] ?? []).map((point, i) => (
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
