import React from "react";

export default function IntersectionName({ name }: { name: string }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{name}</h2>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center' as const,
};

const titleStyle = {
  
};
