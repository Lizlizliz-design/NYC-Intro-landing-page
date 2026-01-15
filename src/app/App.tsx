import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Building2, Users, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzY4NDQ2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="New York City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4 z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl">
              New York City
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-2xl mx-auto drop-shadow-lg">
              The city that never sleeps. Experience the heart of America's most iconic metropolis.
            </p>
          </div>
        </div>
      </section>

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

      {/* 5 Boroughs Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-bold">The Five Boroughs of NYC</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            New York City is composed of five distinct boroughs, each with its own unique character and charm.
          </p>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMG1hcCUyMGJvcm91Z2h8ZW58MXx8fHwxNzY4NDQ2Njk5fDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
              alt="Map of New York City showing the 5 boroughs: Manhattan, Brooklyn, Queens, Bronx, and Staten Island"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Manhattan</h3>
              <p className="text-sm text-gray-600">The heart of NYC, home to Times Square, Central Park, and Wall Street</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Brooklyn</h3>
              <p className="text-sm text-gray-600">The most populous borough, known for its vibrant culture and arts scene</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Queens</h3>
              <p className="text-sm text-gray-600">The most ethnically diverse urban area in the world</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">The Bronx</h3>
              <p className="text-sm text-gray-600">Birthplace of hip-hop and home to the New York Yankees</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Staten Island</h3>
              <p className="text-sm text-gray-600">Known for its green spaces and the iconic Staten Island Ferry</p>
            </div>
          </div>
        </div>
      </section>

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