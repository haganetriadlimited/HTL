import React from 'react';
import { Commodity, Executive, Screen, Service } from './types';
import { BarChart3, Fuel, HardHat, Ship, Truck, Factory, LineChart, ShieldCheck as Shield, Flame, UserCircle2 } from 'lucide-react';

export const COLORS = {
  steel: '#1e3a5f',
  gunmetal: '#0f2039',
  gold: '#b99130', 
  blue: '#0EA5E9', 
  green: '#10B981',
};

export const LOGO_URL = "https://i.ibb.co/S8fLTD5/Hagane-Triad.jpg";

export const SERVICES_DATA: Service[] = [
  {
    id: 'commodity-trading',
    title: 'Commodity Trading',
    desc: 'Expert sourcing and global delivery of fuels, metals, crude oil, and LNG on FOB, CIF, CIP, or DAP terms.',
    icon: <Ship className="w-8 h-8" />,
    tag: 'Global Access',
    image: 'https://i.ibb.co/23qSZs5J/Hagane-Triad-4.jpg',
    details: 'HTL specializes in fuels (AGO, PMS, Jet Fuel, LPG), metals, crude oil, and LNG, serving mining companies, governments, and industrial firms with refinery-direct sourcing including Dangote.'
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    desc: 'Marine transport and massive trucking operations moving 600+ units monthly across key African corridors.',
    icon: <Truck className="w-8 h-8" />,
    tag: 'Regional Strength',
    image: 'https://i.ibb.co/8LzbXh8K/Hagane-Triad-2.jpg',
    details: 'Leveraging a robust supply chain from Nigerian refineries to East African ports like Tanga and Dar es Salaam, ensuring seamless delivery to Katanga, DRC, Zambia, and Tanzania.'
  },
  {
    id: 'infrastructure',
    title: 'Energy Infrastructure',
    desc: 'Development of world-class storage and distribution facilities in strategic regions like Tanga and Lubumbashi.',
    icon: <Factory className="w-8 h-8" />,
    tag: 'Infrastructure',
    image: 'https://i.ibb.co/x8S19fZp/Hagane-Triad-5.jpg',
    details: 'HTL envisions a future where we develop world-class storage and distribution facilities across key regions, driving economic development and energy independence.'
  }
];

export const COMMODITIES: Commodity[] = [
  { 
    id: '1', 
    name: 'AGO 50ppm', 
    category: 'Fuel', 
    grade: 'Euro-V Standard', 
    spec: 'EN 590', 
    description: 'Automotive Gas Oil for industrial and mining sectors.', 
    priceDelta: '+1.2%',
    image: 'https://i.ibb.co/v4tpn3vB/Hagane-Triad-6.jpg'
  },
  { 
    id: '2', 
    name: 'Bonny Light', 
    category: 'Crude', 
    grade: 'Sweet Crude', 
    spec: 'Nigerian Standard', 
    description: 'Premium grade Nigerian crude oil.', 
    priceDelta: '-0.4%',
    image: 'https://i.ibb.co/YF7pNbj1/Hagane-Triad-8.jpg'
  },
  { 
    id: '3', 
    name: 'Copper', 
    category: 'Metal', 
    grade: 'A-Grade Cathode', 
    spec: 'ASTM B115', 
    description: 'High-purity copper cathodes for global export.', 
    priceDelta: '+2.1%',
    image: 'https://i.ibb.co/27zzQRRC/Hagane-Triad-9.jpg'
  },
  { 
    id: '4', 
    name: 'LNG', 
    category: 'Gas', 
    grade: 'Premium', 
    spec: 'Energy Transition', 
    description: 'Liquefied Natural Gas for industrial power projects.', 
    priceDelta: '+0.8%',
    image: 'https://i.ibb.co/ytJyv8h/Hagane-Triad-10.jpg'
  },
  { 
    id: '5', 
    name: 'Jet A-1', 
    category: 'Fuel', 
    grade: 'Aviation Turbine', 
    spec: 'ASTM D1655', 
    description: 'Premium aviation fuel for international transit.', 
    priceDelta: '+0.3%',
    image: 'https://i.ibb.co/TBnRXWFK/Hagane-Triad-11.jpg'
  },
  { 
    id: '6', 
    name: 'Urea 46', 
    category: 'Agro', 
    grade: 'Granular', 
    spec: 'Agro Standard', 
    description: 'High-nitrogen fertilizer for agricultural productivity.', 
    priceDelta: '-1.2%',
    image: 'https://i.ibb.co/CpMdSyDX/Hagane-Triad-7.jpg'
  },
];

export const EXECUTIVES: Executive[] = [
  {
    name: 'Edward Vemba Mzobe',
    role: 'Chairman',
    bio: 'A respected leader with extensive experience in the energy and logistics sector, Edward brings strategic oversight and governance to HTL\'s operations. He oversees financial strategy and compliance, ensuring HTL\'s deals are secure and scalable.',
    qualifications: ['Energy Strategy Specialist', 'Governance Expert', 'Logistics Veteran'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'Onyiluka Ikechukwu Peter',
    role: 'Managing Director & CEO',
    bio: 'A seasoned commodity trader with over 20 years in financial services and O&G. Successfully negotiated multi-million-dollar deals with Dangote Refinery and Katanga mining firms. Holds an LL.B from University of London and an MBA from University of Middlesex, UK.',
    qualifications: ['LL.B London', 'MBA Middlesex', 'Certified Commodity Trader'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'Jolie Akumby Ipondo',
    role: 'Director',
    bio: 'A Congolese national with deep roots in the DRC energy sector, Jolie brings invaluable local networks in Katanga. With 10 years in logistics, she is an American-trained Healthcare specialist with a passion for energy entrepreneurship.',
    qualifications: ['Healthcare Management', 'Logistics Infrastructure', 'Regional Strategy'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500'
  }
];

export const NAV_ITEMS = [
  { id: Screen.DASHBOARD, label: 'Home', icon: <BarChart3 className="w-5 h-5" /> },
  { id: Screen.VAULT, label: 'About', icon: <UserCircle2 className="w-5 h-5" /> },
  { id: Screen.SERVICES, label: 'Services', icon: <HardHat className="w-5 h-5" /> },
  { id: Screen.CATALOG, label: 'Products', icon: <Fuel className="w-5 h-5" /> },
  { id: Screen.INQUIRY, label: 'Contact', icon: <Flame className="w-5 h-5" /> },
];