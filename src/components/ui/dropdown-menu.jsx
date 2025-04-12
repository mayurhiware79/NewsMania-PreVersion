import React, { useState, useRef, useEffect } from 'react';

export const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, asChild }) => {
  return asChild ? children : <button>{children}</button>;
};

export const DropdownMenuContent = ({ children, align = 'start', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignmentClasses = {
    start: 'left-0',
    end: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2'
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className={`absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${alignmentClasses[align]} ${className}`}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="py-1" role="menu">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { setIsOpen })
          )}
        </div>
      </div>
    </div>
  );
};

export const DropdownMenuItem = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${className}`}
      onClick={onClick}
      role="menuitem"
    >
      {children}
    </button>
  );
}; 