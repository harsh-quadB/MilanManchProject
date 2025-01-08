


import React from "react";
import { Users2, Utensils, Music, Camera } from "lucide-react";
import { NavLink } from "react-router-dom";

const Wedding = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: "Traditional Hindu Wedding",
      description:
        "Experience the beauty and rituals of a traditional Hindu wedding.",
      
    },
    {
      icon: <Users2 className="h-8 w-8 text-amber-600" />,
      title: "Destination Wedding",
      description: "Plan your perfect wedding at breathtaking locations around the world.",
    },
    {
      icon: <Music className="h-8 w-8 text-amber-600" />,
      title: "Themed Wedding",
      description:
        "Create unforgettable memories with unique themes and creative designs.",
    },
    {
      icon: <Camera className="h-8 w-8 text-amber-600" />,
      title: "Same-Day Wedding",
      description: "Organize seamless and elegant weddings with our efficient planning services.",
    },
    {
        icon: <Camera className="h-8 w-8 text-amber-600" />,
        title: "Nikah",
        description: "Organize seamless and elegant weddings with our efficient planning services.",
      },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-16">
            Types of Wedding
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 text-center mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;
