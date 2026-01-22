import React from "react";

export default function IntersectionStatus({ status }: { status: string }) {
  if (status === 'GO') {
    status = 'SAFE TO CROSS';
  } else if (status === 'STOP') {
    status = 'DO NOT CROSS';
  }

  // status symbol component    
  return (
    (status === 'SAFE TO CROSS') ? (
      <div style={statusContainerStyle}>
        <div>✓</div>
        <p style={statusTitleStyle}>{status}</p>
      </div>
    ) : ( 
      <div style={statusContainerStyle}>
        <div>🛑</div>
        <p style={statusTitleStyle}>{status}</p>
      </div>
    )
  );
}

const statusContainerStyle = {
  textAlign: 'center' as const,
};

const statusTitleStyle = {};