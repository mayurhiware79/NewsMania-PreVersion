import React from "react";
import { Link } from "react-router-dom";

function PlacesToVisit({ trip }) {
  // Extract itinerary from trip data
  const itinerary = trip?.tripData?.itinerary || {};

  // Convert the itinerary object into an array of days
  const days = Object.keys(itinerary)
    .filter((key) => key.startsWith("Day"))
    .sort()
    .map((dayKey) => ({
      day: dayKey,
      theme: itinerary[dayKey].theme,
      places: itinerary[dayKey].plan || [],
    }));

  return (
    <div>
      {/* Places to Visit Header */}
      <h2 className="font-bold text-xl mt-8">Places to Visit</h2>
      <p className="text-sm text-gray-600 mt-1">
        Your {days.length}-day itinerary
      </p>

      {/* Itinerary Section */}
      <div className="my-4">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-8">
            {/* Day Header with Theme */}
            <div className="flex items-center mb-3">
              <h3 className="font-bold text-lg">{day.day}</h3>
              {day.theme && (
                <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {day.theme}
                </span>
              )}
            </div>

            {/* Places List */}
            <div className="border-l-2 border-blue-200 pl-4 ml-2">
              {day.places.map((place, placeIndex) => (
                <div key={placeIndex} className="mb-6 relative ">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

                  {/* Place Card */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Place Images - Side by Side */}
                    {place["Place Image Url"] && (
                      <div className="flex flex-row h-40">
                        {/* First Image */}
                        <div className="w-1/2 overflow-hidden">
                          <img
                            src={place["Place Image Url"]}
                            onError={(e) =>
                              (e.target.src = "/placeholder.jpeg")
                            }
                            alt={`${place.placeName} - primary view`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Second Image - Using a second image URL if available, or the same image as a fallback */}
                        <div className="w-1/2 overflow-hidden">
                          <img
                            src={
                              place["Secondary Image Url"] ||
                              place["Place Image Url"]
                            }
                            onError={(e) =>
                              (e.target.src = "/placeholder.jpeg")
                            }
                            alt={`${place.placeName} - secondary view`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Place Info */}
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800">
                        {place.placeName || "Unnamed Location"}
                      </h4>

                      {/* Place Details */}
                      <p className="text-gray-600 text-sm mt-2">
                        {place["Place Details"] || "No details available"}
                      </p>

                      {/* Additional Details */}
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {place["Best Time to Visit"] && (
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-1">⏰</span>
                            <span>
                              Best time: {place["Best Time to Visit"]}
                            </span>
                          </div>
                        )}

                        {place["Time to travel"] && (
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-1">🕙</span>
                            <span>Duration: {place["Time to travel"]}</span>
                          </div>
                        )}

                        {place["ticket Pricing"] && (
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-1">💰</span>
                            <span>{place["ticket Pricing"]}</span>
                          </div>
                        )}

                        {place["Geo Coordinates"] && (
                          <Link
                            to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800"
                          >
                            <span className="mr-1">📍</span>
                            <span>View on Map</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
