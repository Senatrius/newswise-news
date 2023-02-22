'use client';
import '@/app/calendar.css';

import React from 'react';
import Calendar from 'react-calendar';
import { SectionHeading } from './SectionHeading';

export const CalendarSection = () => {
  return (
    <div>
      <SectionHeading heading='Calendar' />
      <Calendar
        minDetail='month'
        showNavigation={false}
      />
    </div>
  );
};
