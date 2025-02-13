import React from "react";
import "../css/Map.css"

interface MapEmbedProps {
  src: string;
  width?: number | string;
  height?: number | string;
  allowFullscreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy; 
  style?: React.CSSProperties;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  src,
  width = "600",
  height = "450",
  allowFullscreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade",
  style = { border: 0 },
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ ...style, maxWidth: "100%" }}
      allowFullScreen={allowFullscreen}
      loading={loading}
      referrerPolicy={referrerPolicy}
      title="Google Maps Embed"
    />
  );
};

export default MapEmbed;
