"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  label: string;
  options: string[];
  defaultOption?: string;
  onChange?: (selectedOption: string) => void;
}

export default function Dropdown({ 
  label, 
  options, 
  defaultOption = options[0] || "", 
  onChange 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.dropdownLabel}>{label}</div>
      <div 
        className={`${styles.dropdownHeader} ${isOpen ? styles.active : ""}`} 
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <svg 
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`} 
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1 1L6 6L11 1" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li 
              key={index} 
              className={`${styles.dropdownItem} ${option === selectedOption ? styles.selected : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
