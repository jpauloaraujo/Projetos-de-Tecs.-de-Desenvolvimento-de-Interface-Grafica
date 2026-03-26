import React from 'react';
import ContactsList from './ContactsList';
import { ThemeSwitcher } from '../ThemeSwitcher';

export default function ContactsSection() {
  return (
    <section>
      <h2>Contacts Section</h2>
      <ThemeSwitcher />
      <ContactsList />
    </section>
  );
}