import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardChildProps {
  children: ReactNode;
  className?: string; 
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`p-4 bg-white shadow-md rounded-md ${className || ''}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardChildProps> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle: React.FC<CardChildProps> = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);

export const CardContent: React.FC<CardChildProps> = ({ children }) => (
  <div>{children}</div>
);
