import React from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Location() {
  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Our Locations
        </h3>
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[19.076, 72.8777]}>
            <Popup>
              Main Office - 1903, Sapphire, Regency Tower, Ghodbunder Road,Thane
              (W).
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
