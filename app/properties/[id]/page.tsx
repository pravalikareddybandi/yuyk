"use client";
import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";
import { useState } from "react";

const ImageGallery = ({
  images,
  openModal,
}: {
  images: string[];
  openModal?: any;
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-1 lg:gap-2">
      <div className="col-span-2 md:col-span-3">
        <div className="w-full h-[60vh] md:h-[64vh] mb-2 overflow-hidden rounded-xl relative">
          <Image
            fill
            src={images[0]}
            className="object-cover w-full h-full"
            alt="Property Image"
            onClick={openModal}
          />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-2 md:gap-1 lg:gap-2">
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="relative w-full h-70 md:h-70 lg:h-70">
            <Image
              src={image}
              alt={`Property Image ${index + 1}`}
              fill
              className="object-cover w-full h-full rounded-lg"
              onClick={openModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PropertyDetailPage = ({ params }: { params: { id: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const property = {
    image_url: [
      "/house_1.jpeg",
      "/house_2.jpeg",
      "/house_3.jpeg",
      "/house_4.jpeg",
      "/house_5.jpeg",

    ],
    title: "Kapalua Bay resort",
    bedrooms: 1,
    guests: 10,
    bathrooms: 1,
    landlord: {
      id: "lsckld",
      avatar_url: "/profilephoto.jpg",
      name: "Durga",
      description: "I loved staying in a beach front villa at the Kapalua Bay resort. It's in Maui. It's right on Kapalua Bay. Individual villas with parking spaces right at each villa. Super luxurious with full kitchen, big living room, huge windows with white water views. Balcony, beautiful bathroom. It felt like our little house. Away from the scene at Wailea and not hot like Lahaina. Golfing, restaurants. Very peaceful and quiet. My husband loved the TV reception. Fairly affordable at about $400 a night no resort fee and only a $300 booking deposit. Near Honolua Bay and north shore of Maui.",
    },
  };
  const userId = getUserId();

  console.log("userId", userId);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <ImageGallery images={property.image_url} openModal={openModal} />
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on background click
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto p-4 rounded-lg">
            <div className="grid grid-cols-1 gap-4">
              {property?.image_url.map((image, index) => (
                <div key={index} className="relative w-full h-80">
                  <Image
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded"
              onClick={closeModal} // Close modal on button click
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>

          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathrooms
          </span>

          <hr />

          <Link
            href={`/landlords/${property.landlord.id}`}
            className="py-6 flex items-center space-x-4"
          >
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                width={70}
                height={60}
                className="rounded-full"
                alt={property.landlord.name}
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </Link>

          <hr />

          <p className="mt-6 text-lg">{property.landlord.description}</p>
        </div>

        <ReservationSidebar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
