import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Building2, Users, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzY4NDQ2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="New York City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl mb-6">New York City</h1>
            <p className="text-2xl max-w-2xl mx-auto">
              The city that never sleeps. Experience the heart of America's most iconic metropolis.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl mb-4">Welcome to NYC</h2>
            <p className="text-lg text-gray-700">
              New York City is a global hub of culture, finance, and entertainment. 
              With its iconic skyline, diverse neighborhoods, and endless opportunities, 
              NYC offers an unforgettable experience for visitors and residents alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h3 className="text-xl mb-2">8.3M+</h3>
              <p className="text-gray-600">Population</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h3 className="text-xl mb-2">5 Boroughs</h3>
              <p className="text-gray-600">Manhattan, Brooklyn, Queens, Bronx, Staten Island</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h3 className="text-xl mb-2">800+ Languages</h3>
              <p className="text-gray-600">Spoken across the city</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Must-See Attractions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588384153148-ebd739ac430c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0dWUlMjBvZiUyMGxpYmVydHl8ZW58MXx8fHwxNzY4NDI1ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Statue of Liberty"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2">Statue of Liberty</h3>
                <p className="text-gray-600">An iconic symbol of freedom and democracy</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695147383484-621b933811d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lcyUyMHNxdWFyZSUyMG5ldyUyMHlvcmt8ZW58MXx8fHwxNzY4NDkwMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Times Square"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2">Times Square</h3>
                <p className="text-gray-600">The bright lights and energy of Broadway</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573261658953-8b29e144d1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9va2x5biUyMGJyaWRnZXxlbnwxfHx8fDE3Njg0MjU4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brooklyn Bridge"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2">Brooklyn Bridge</h3>
                <p className="text-gray-600">A historic architectural masterpiece</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}