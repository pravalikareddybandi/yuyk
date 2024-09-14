"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";
import useSearchModal from "@/app/hooks/useSearchModal";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
  is_favorite: boolean;
};

interface PropertyListProps {
  landlord_id?: any;
  favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const params = useSearchParams();
  const searchModal = useSearchModal();
  const country = searchModal.query.country;
  const numGuests = searchModal.query.guests;
  const numBathrooms = searchModal.query.bathrooms;
  const numBedrooms = searchModal.query.bedrooms;
  const checkinDate = searchModal.query.checkIn;
  const checkoutDate = searchModal.query.checkOut;
  const category = searchModal.query.category;
  const [properties, setProperties] = useState<PropertyType[]>([
    {
      id: "1",
      title: "Modern Loft in Downtown",
      image_url: "/beach_1.jpg",
      price_per_night: 150,
      is_favorite: true,
    },
    {
      id: "2",
      title: "Cozy Cabin in the Woods",
      image_url: "https://source.unsplash.com/random/400x300?cabin",
      price_per_night: 120,
      is_favorite: true,
    },
    {
      id: "3",
      title: "Luxury Villa with Pool",
      image_url: "https://source.unsplash.com/random/400x300?villa",
      price_per_night: 300,
      is_favorite: false,
    },
    {
      id: "4",
      title: "Beachfront Bungalow",
      image_url: "https://source.unsplash.com/random/400x300?beach",
      price_per_night: 200,
      is_favorite: true,
    },
    {
      id: "5",
      title: "Urban Studio Apartment",
      image_url: "https://source.unsplash.com/random/400x300?studio",
      price_per_night: 100,
      is_favorite: false,
    },
    {
      id: "6",
      title: "Charming Countryside Cottage",
      image_url: "https://source.unsplash.com/random/400x300?cottage",
      price_per_night: 130,
      is_favorite: true,
    },
    {
      id: "7",
      title: "Spacious City Condo",
      image_url: "https://source.unsplash.com/random/400x300?condo",
      price_per_night: 180,
      is_favorite: false,
    },
    {
      id: "8",
      title: "Mountain Retreat",
      image_url: "https://source.unsplash.com/random/400x300?mountain",
      price_per_night: 250,
      is_favorite: true,
    },
    {
      id: "1",
      title: "Modern Loft in Downtown",
      image_url:
        "https://via.placeholder.com/400x300.png?text=Modern+Loft+in+Downtown",
      price_per_night: 150,
      is_favorite: false,
    },
    {
      id: "2",
      title: "Cozy Cabin in the Woods",
      image_url: "https://source.unsplash.com/random/400x300?cabin",
      price_per_night: 120,
      is_favorite: true,
    },
    {
      id: "3",
      title: "Luxury Villa with Pool",
      image_url: "https://source.unsplash.com/random/400x300?villa",
      price_per_night: 300,
      is_favorite: false,
    },
    {
      id: "4",
      title: "Beachfront Bungalow",
      image_url: "https://source.unsplash.com/random/400x300?beach",
      price_per_night: 200,
      is_favorite: true,
    },
    {
      id: "5",
      title: "Urban Studio Apartment",
      image_url: "https://source.unsplash.com/random/400x300?studio",
      price_per_night: 100,
      is_favorite: false,
    },
    {
      id: "6",
      title: "Charming Countryside Cottage",
      image_url: "https://source.unsplash.com/random/400x300?cottage",
      price_per_night: 130,
      is_favorite: true,
    },
    {
      id: "7",
      title: "Spacious City Condo",
      image_url: "https://source.unsplash.com/random/400x300?condo",
      price_per_night: 180,
      is_favorite: false,
    },
    {
      id: "8",
      title: "Mountain Retreat",
      image_url: "https://source.unsplash.com/random/400x300?mountain",
      price_per_night: 250,
      is_favorite: true,
    },
    {
      id: "9",
      title: "Sunny Apartment with Balcony",
      image_url: "https://source.unsplash.com/random/400x300?apartment",
      price_per_night: 140,
      is_favorite: false,
    },
    {
      id: "10",
      title: "Historic Mansion in the Heart of the City",
      image_url: "https://source.unsplash.com/random/400x300?mansion",
      price_per_night: 350,
      is_favorite: true,
    },
    {
      id: "11",
      title: "Secluded Cabin by the Lake",
      image_url: "https://source.unsplash.com/random/400x300?lake",
      price_per_night: 160,
      is_favorite: false,
    },
    {
      id: "12",
      title: "Chic Loft with Rooftop Terrace",
      image_url: "https://source.unsplash.com/random/400x300?loft",
      price_per_night: 220,
      is_favorite: true,
    },
    {
      id: "13",
      title: "Rustic Barn Conversion",
      image_url: "https://source.unsplash.com/random/400x300?barn",
      price_per_night: 170,
      is_favorite: false,
    },
    {
      id: "14",
      title: "Modern Suburban House",
      image_url: "https://source.unsplash.com/random/400x300?suburb",
      price_per_night: 190,
      is_favorite: true,
    },
    {
      id: "15",
      title: "Coastal Retreat with Ocean Views",
      image_url: "https://source.unsplash.com/random/400x300?ocean",
      price_per_night: 280,
      is_favorite: false,
    },
    {
      id: "16",
      title: "Elegant Penthouse Suite",
      image_url: "https://source.unsplash.com/random/400x300?penthouse",
      price_per_night: 400,
      is_favorite: true,
    },
    {
      id: "17",
      title: "Quiet Village Cottage",
      image_url: "https://source.unsplash.com/random/400x300?village",
      price_per_night: 110,
      is_favorite: false,
    },
    {
      id: "18",
      title: "Stylish Studio in the City Center",
      image_url: "https://source.unsplash.com/random/400x300?city",
      price_per_night: 130,
      is_favorite: true,
    },
    {
      id: "19",
      title: "Elegant Country Manor",
      image_url: "https://source.unsplash.com/random/400x300?manor",
      price_per_night: 310,
      is_favorite: false,
    },
    {
      id: "20",
      title: "Charming Victorian Home",
      image_url: "https://source.unsplash.com/random/400x300?victorian",
      price_per_night: 200,
      is_favorite: true,
    },
    {
      id: "21",
      title: "Contemporary Beach House",
      image_url: "https://source.unsplash.com/random/400x300?beach-house",
      price_per_night: 230,
      is_favorite: false,
    },
    {
      id: "22",
      title: "Luxurious Downtown Penthouse",
      image_url: "https://source.unsplash.com/random/400x300?downtown",
      price_per_night: 450,
      is_favorite: true,
    },
    {
      id: "23",
      title: "Cozy Apartment in Historic District",
      image_url: "https://source.unsplash.com/random/400x300?historic",
      price_per_night: 160,
      is_favorite: false,
    },
    {
      id: "24",
      title: "Seaside Villa with Private Beach",
      image_url: "https://source.unsplash.com/random/400x300?seaside",
      price_per_night: 350,
      is_favorite: true,
    },
    {
      id: "25",
      title: "Art Deco Loft with City Views",
      image_url: "https://source.unsplash.com/random/400x300?art-deco",
      price_per_night: 240,
      is_favorite: false,
    },
    {
      id: "26",
      title: "Elegant Farmhouse Retreat",
      image_url: "https://source.unsplash.com/random/400x300?farmhouse",
      price_per_night: 180,
      is_favorite: true,
    },
    {
      id: "27",
      title: "Modern Chalet in the Alps",
      image_url: "https://source.unsplash.com/random/400x300?chalet",
      price_per_night: 300,
      is_favorite: false,
    },
    {
      id: "28",
      title: "Quaint Cabin with Fireplace",
      image_url: "https://source.unsplash.com/random/400x300?fireplace",
      price_per_night: 140,
      is_favorite: true,
    },
    {
      id: "29",
      title: "Upscale Urban Loft",
      image_url: "https://source.unsplash.com/random/400x300?urban-loft",
      price_per_night: 260,
      is_favorite: false,
    },
    {
      id: "30",
      title: "Rustic Lodge in the Forest",
      image_url: "https://source.unsplash.com/random/400x300?lodge",
      price_per_night: 170,
      is_favorite: true,
    },
    {
      id: "31",
      title: "Luxury High-Rise Apartment",
      image_url: "https://source.unsplash.com/random/400x300?high-rise",
      price_per_night: 320,
      is_favorite: false,
    },
    {
      id: "32",
      title: "Classic Colonial House",
      image_url: "https://source.unsplash.com/random/400x300?colonial",
      price_per_night: 190,
      is_favorite: true,
    },
    {
      id: "33",
      title: "Modern Country Home",
      image_url: "https://source.unsplash.com/random/400x300?country-home",
      price_per_night: 200,
      is_favorite: false,
    },
    {
      id: "34",
      title: "Luxury Retreat with Mountain Views",
      image_url: "https://source.unsplash.com/random/400x300?retreat",
      price_per_night: 300,
      is_favorite: true,
    },
  ]);

  console.log("searchQUery:", searchModal.query);
  console.log("numBedrooms", numBedrooms);

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          console.log("added to list of favorited propreties");
        } else {
          console.log("removed from list");
        }
      }

      return property;
    });

    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    // let url = '/api/properties/';
    // if (landlord_id) {
    //     url += `?landlord_id=${landlord_id}`
    // } else if (favorites) {
    //     url += '?is_favorites=true'
    // } else {
    //     let urlQuery = '';
    //     if (country) {
    //         urlQuery += '&country=' + country
    //     }
    //     if (numGuests) {
    //         urlQuery += '&numGuests=' + numGuests
    //     }
    //     if (numBedrooms) {
    //         urlQuery += '&numBedrooms=' + numBedrooms
    //     }
    //     if (numBathrooms) {
    //         urlQuery += '&numBathrooms=' + numBathrooms
    //     }
    //     if (category) {
    //         urlQuery += '&category=' + category
    //     }
    //     if (checkinDate) {
    //         urlQuery += '&checkin=' + format(checkinDate, 'yyyy-MM-dd')
    //     }
    //     if (checkoutDate) {
    //         urlQuery += '&checkout=' + format(checkoutDate, 'yyyy-MM-dd')
    //     }
    //     if (urlQuery.length) {
    //         console.log('Query:', urlQuery);
    //         urlQuery = '?' + urlQuery.substring(1);
    //         url += urlQuery;
    //     }
    // }
    // const tmpProperties = await apiService.get(url)
    // setProperties(tmpProperties.data.map((property: PropertyType) => {
    //     if (tmpProperties.favorites.includes(property.id)) {
    //         property.is_favorite = true
    //     } else {
    //         property.is_favorite = false
    //     }
    //     return property
    // }));
  };

  useEffect(() => {
    getProperties();
  }, [category, searchModal.query, params]);

  return (
    <>
      {properties.map((property) => {
        return (
          <PropertyListItem
            key={property.id}
            property={property}
            markFavorite={(is_favorite: any) =>
              markFavorite(property.id, is_favorite)
            }
          />
        );
      })}
    </>
  );
};

export default PropertyList;
