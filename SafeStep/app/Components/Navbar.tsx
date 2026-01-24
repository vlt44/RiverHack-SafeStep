import React from "react";

export default function Navbar() {
  return (
    <div style={NavbarStyling}>
      SafeStep
    </div>
  );
}

const NavbarStyling = {
  width: '100%',
  height: '60px',
  backgroundColor: '#000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF',
  margin: 0,
  fontSize: '24px',
}