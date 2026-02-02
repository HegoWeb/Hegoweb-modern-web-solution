
// Add React import to resolve 'Cannot find namespace React' errors
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}
