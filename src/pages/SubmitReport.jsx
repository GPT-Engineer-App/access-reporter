import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import 'leaflet/dist/leaflet.css';

const SubmitReport = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [address, setAddress] = useState('');
  const [vehicles, setVehicles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement report submission logic
    console.log('Submitting report:', { location, address, vehicles });
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLocation(e.latlng);
      },
    });

    return location ? <Marker position={location} /> : null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Access Report</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Location</label>
          <div className="h-[300px] w-full mb-4">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
            </MapContainer>
          </div>
          <Input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Vehicle Types</label>
          <div className="space-y-2">
            {['Car', 'Truck', 'Bicycle', 'Motorcycle'].map((type) => (
              <div key={type} className="flex items-center">
                <Checkbox
                  id={type}
                  checked={vehicles.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setVehicles([...vehicles, type]);
                    } else {
                      setVehicles(vehicles.filter((v) => v !== type));
                    }
                  }}
                />
                <label htmlFor={type} className="ml-2">{type}</label>
              </div>
            ))}
          </div>
        </div>
        <Button type="submit">Submit Report</Button>
      </form>
    </div>
  );
};

export default SubmitReport;