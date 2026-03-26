import React, { useContext } from 'react';
import { ThemeContext, ThemeArea } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import ContactsSection from './components/ContactsSection';

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      <header>
        <h1>Contacts App</h1>
        <ThemeSwitcher />
      </header>
      
      <main>
        <ThemeArea initialTheme="light">
          <ContactsSection />
        </ThemeArea>
        
        <ThemeArea initialTheme="dark">
          <ContactsSection />
        </ThemeArea>
      </main>
    </div>
  );
}