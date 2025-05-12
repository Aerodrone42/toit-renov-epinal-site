
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  className?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  to,
  className,
  imageUrl
}) => {
  return (
    <div className={cn("service-card", className)}>
      {imageUrl && (
        <div className="h-48 mb-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      )}
      <div className="service-card-icon">
        <Icon size={36} className="text-roofing-red" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link to={to}>
        <Button className="btn-secondary w-full">En savoir plus</Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
