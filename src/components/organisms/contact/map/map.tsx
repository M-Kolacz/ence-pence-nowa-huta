"use client";
import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import { Section } from "#app/components/templates";

const position = { lat: 50.07033662490449, lng: 20.039205293759537 };
const zoom = 18.75;

export const Map = () => {
  const mapTitle = "map-title";

  return (
    <Section
      className="col-span-full grid grid-cols-1 gap-strong gap-y-strong lg:col-start-1 lg:col-end-13 lg:grid-cols-12"
      aria-labelledby={mapTitle}
    >
      <h2
        className="col-span-full font-headings text-h2 text-text lg:col-start-2 lg:col-end-12"
        id={mapTitle}
      >
        Zobacz, gdzie nas znaleźć
      </h2>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
        <div className="col-span-full -mx-app h-[800px]">
          <GoogleMap
            defaultZoom={zoom}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
          />
        </div>
      </APIProvider>
    </Section>
  );
};
