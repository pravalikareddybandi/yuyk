import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = {
    image_url:
      "https://www.google.com/imgres?q=nature%20images&imgurl=https%3A%2F%2Fi0.wp.com%2Fpicjumbo.com%2Fwp-content%2Fuploads%2Fbeautiful-nature-mountain-scenery-with-flowers-free-photo.jpg%3Fw%3D600%26quality%3D80&imgrefurl=https%3A%2F%2Fpicjumbo.com%2Ffree-images%2Fnature%2F&docid=9xKzCbIQW6isoM&tbnid=NDQdEGL-6UGjmM&vet=12ahUKEwjV_7KF8ZWIAxVbh68BHblKA24QM3oECBwQAA..i&w=599&h=399&hcb=2&ved=2ahUKEwjV_7KF8ZWIAxVbh68BHblKA24QM3oECBwQAA",
    title: "hbjknkj",
    bedrooms: 1,
    guests: 10,
    bathrooms: 1,
    landlord: {
      id: "lsckld",
      avatar_url: "https://source.unsplash.com/random/400x300?ocean",
      name: "jnkedm",
      description: "jndksemd",
    },
  };
  const userId = await getUserId();

  console.log("userId", userId);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src={property.image_url}
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

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
                width={50}
                height={50}
                className="rounded-full"
                alt="The user name"
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </Link>

          <hr />

          <p className="mt-6 text-lg">{property.description}</p>
        </div>

        <ReservationSidebar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
