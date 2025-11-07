import { CaseStudyDetail } from '@/components/sections/case-study-detail';

// Mock data - in a real app, you'd fetch this from a CMS or database
const caseStudiesData: { [key: string]: any } = {
  'fashion-ecommerce': {
    title: 'E-commerce Platform for a Global Fashion Brand',
    category: 'E-commerce',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Fashion+E-commerce',
    liveUrl: '#',
    overview: 'We partnered with a leading fashion brand to build a high-performance, scalable e-commerce platform. The goal was to create a visually stunning and seamless shopping experience for a global audience, integrating advanced features like a custom product configurator and a multi-currency checkout.',
    challenges: [
      'Scaling for high-traffic product drops',
      'Integrating with a legacy inventory system',
      'Creating a highly customizable product view',
      'Ensuring a fast, responsive experience on all devices',
    ],
    solutions: [
      'Built on a modern, headless architecture using Next.js and Vercel for optimal performance and scalability.',
      'Developed a custom middleware to synchronize the legacy inventory system with the new platform in real-time.',
      'Used Three.js to create an interactive 3D product configurator.',
      'Implemented a global CDN and image optimization to ensure fast load times worldwide.',
    ],
    results: {
      'Conversion Rate': '+35%',
      'Page Load Time': '-60%',
      'Mobile Engagement': '+45%',
    },
    tags: ['Next.js', 'React', 'Stripe', 'Vercel', 'Headless', 'Three.js'],
  },
  'ai-chatbot': {
    title: 'AI-Powered Chatbot for Enhanced Customer Support',
    category: 'AI/ML',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=AI+Chatbot',
    liveUrl: '#',
    overview: 'A financial services company needed to reduce the burden on their customer support team and improve response times. We developed an AI-powered chatbot that could handle over 80% of common customer inquiries, available 24/7.',
    challenges: [
      'Understanding complex financial queries',
      'Integrating with multiple internal knowledge bases',
      'Ensuring a natural and helpful conversation flow',
      'Maintaining security and data privacy',
    ],
    solutions: [
      "Utilized Google's Dialogflow for its powerful natural language understanding (NLU) capabilities.",
      'Built a custom data pipeline to ingest and process information from various sources into a unified knowledge graph.',
      'Designed a sophisticated conversational tree with escalation paths to human agents for complex issues.',
      'Implemented end-to-end encryption and data anonymization techniques to protect user data.',
    ],
    results: {
      'Support Tickets': '-65%',
      'Customer Satisfaction': '+28%',
      'Average Response Time': 'Instant',
    },
    tags: ['Python', 'Dialogflow', 'Kubernetes', 'GCP', 'NLP'],
  },
  'mobile-banking': {
    title: 'Mobile Banking App with Biometric Authentication',
    category: 'Mobile App',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Mobile+Banking',
    liveUrl: '#',
    overview: 'We developed a secure and intuitive mobile banking app for a leading regional bank, focusing on user experience and robust security features to build customer trust.',
    challenges: [
      'Meeting strict financial security and compliance standards (PCI DSS).',
      'Ensuring seamless performance on a wide range of Android and iOS devices.',
      'Integrating with the bank\'s core banking system.',
    ],
    solutions: [
      'Implemented multi-layer security, including biometric authentication (Face ID/fingerprint) and end-to-end encryption.',
      'Built using React Native for cross-platform compatibility and a native-like feel.',
      'Developed a secure API gateway to communicate with the bank\'s legacy systems.',
    ],
    results: {
      'App Store Rating': '4.8 stars',
      'Mobile Adoption': '+200%',
      'Security Incidents': '0',
    },
    tags: ['React Native', 'Firebase', 'Security', 'iOS', 'Android'],
  },
  'analytics-dashboard': {
    title: 'Data Analytics Dashboard for Logistics',
    category: 'Data & Analytics',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Analytics+Dashboard',
    liveUrl: '#',
    overview: 'A major logistics company required a centralized dashboard to visualize their complex supply chain data, track shipments in real-time, and identify opportunities for optimization.',
    challenges: [
      'Ingesting data from multiple, disparate sources (GPS, sensors, ERPs).',
      'Processing and visualizing massive datasets in real-time.',
      'Creating an intuitive UI for non-technical users.',
    ],
    solutions: [
      'Built a data pipeline using AWS services (Kinesis, Lambda, S3) to handle data ingestion and processing.',
      'Used Tableau for powerful and interactive data visualization, embedded within a custom web application.',
      'Designed a user-centric dashboard with customizable widgets and role-based access control.',
    ],
    results: {
      'Operational Costs': '-15%',
      'Delivery Times': '-25%',
      'Data Visibility': '100%',
    },
    tags: ['Tableau', 'Redshift', 'AWS', 'React', 'Node.js'],
  },
  'headless-cms': {
    title: 'Headless CMS for a Media Company',
    category: 'Web Development',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Headless+CMS',
    liveUrl: '#',
    overview: 'A large media organization needed to modernize their content infrastructure to deliver content to a growing number of channels (web, mobile apps, smart TVs). We migrated them from a monolithic CMS to a flexible headless architecture.',
    challenges: [
      'Migrating thousands of articles and media assets without downtime.',
      'Training the editorial team on a new content management workflow.',
      'Building a resilient and scalable content delivery API.',
    ],
    solutions: [
      'Chose Contentful as the headless CMS for its user-friendly interface and powerful APIs.',
      'Developed custom migration scripts to automate the transfer of content and preserve metadata.',
      'Built a GraphQL API layer to provide a single, unified endpoint for all client applications.',
    ],
    results: {
      'Content Deployment': '10x faster',
      'Developer Productivity': '+50%',
      'New Channel Launches': 'Weeks to Days',
    },
    tags: ['Contentful', 'GraphQL', 'Next.js', 'Vercel', 'CMS'],
  },
  'iot-platform': {
    title: 'IoT Platform for Smart Home Devices',
    category: 'IoT',
    image: 'https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=IoT+Platform',
    liveUrl: '#',
    overview: 'A startup in the smart home space needed a robust cloud platform to manage and monitor thousands of connected devices. We built a scalable and secure IoT backend to support their product launch.',
    challenges: [
      'Handling a high volume of concurrent device connections and data streams.',
      'Ensuring low-latency communication for real-time device control.',
      'Implementing secure over-the-air (OTA) firmware updates.',
    ],
    solutions: [
      'Used an MQTT message broker for efficient and reliable device communication.',
      'Built the backend infrastructure on Azure IoT Hub for its scalability and security features.',
      'Developed a secure bootloader and OTA update mechanism to ensure device integrity.',
    ],
    results: {
      'Device Connectivity': '99.99% uptime',
      'Data Latency': '< 200ms',
      'Time to Market': '-4 months',
    },
    tags: ['MQTT', 'Node.js', 'Azure IoT Hub', 'IoT', 'Security'],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudiesData[params.slug];

  return <CaseStudyDetail study={study} />;
}
