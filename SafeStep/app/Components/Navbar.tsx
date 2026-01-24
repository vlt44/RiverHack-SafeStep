import React from "react";

export default function Navbar() {
  return (
    <div style={NavbarContainerStyle}>
      <div style={navbarTitleStyle}>SafeStep</div>
    </div>
  );
}

const NavbarContainerStyle = {
  width: '100%',
  height: '60px',
  backgroundColor: '#000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const navbarTitleStyle = {
  color: '#FFFFFF',
  margin: 0,
  fontSize: '24px',
};