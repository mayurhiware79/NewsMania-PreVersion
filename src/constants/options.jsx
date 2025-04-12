export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler exploring the world",
    icon: "🧍",
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving adventurers",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A group of friends making memories",
    icon: "🧑‍🤝‍🧑",
    people: "3 to 6 People",
  },
  {
    id: 5,
    title: "Team",
    desc: "A team traveling together for work or adventure",
    icon: "👥",
    people: "5+ People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : India , for {totalDays} for {Travelers} with a {budget} budget ,Give me a Hotels options list with HotelName, HotelAddress, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format,prices should in rupees";

export default SelectBudgetOptions;
