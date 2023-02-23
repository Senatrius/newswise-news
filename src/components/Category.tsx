import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Category = ({ category }: { category: string }) => {
  return (
    <section>
      <SectionHeading heading={category} />
    </section>
  );
};
