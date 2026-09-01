import React from 'react';
import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = (Icons as unknown as Record<string, React.FC<LucideProps>>)[name];
  
  if (!IconComponent) {
    return <Icons.Sparkles {...props} />;
  }

  return <IconComponent {...props} />;
};
