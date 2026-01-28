// Added missing React import to support React.ReactNode type definition
import React from 'react';

export enum Screen {
  DASHBOARD = 'DASHBOARD',
  SERVICES = 'SERVICES',
  SERVICE_DETAIL = 'SERVICE_DETAIL',
  PORTAL = 'PORTAL',
  CATALOG = 'CATALOG',
  VAULT = 'VAULT',
  TRUST = 'TRUST',
  INQUIRY = 'INQUIRY'
}

export interface Commodity {
  id: string;
  name: string;
  category: 'Fuel' | 'Metal' | 'Crude' | 'Gas' | 'Agro';
  grade: string;
  spec: string;
  description: string;
  priceDelta: string;
  image: string;
}

export interface Executive {
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  photo: string;
}

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  image: string;
  details?: string;
}