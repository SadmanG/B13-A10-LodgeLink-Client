import Image from 'next/image';
import { FaStar, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheckCircle, FaTree } from 'react-icons/fa';
import { BookNowModal } from './BookNowModal';

export const metadata = {
  title: 'LodgeLink | Property Details',
  description: 'View premium off-grid cabin configurations, amenities, and reservation requirements.'
};

const PropertyDetails = async ({ params }) => {
  const { propertyId } = await params;
  
  // Directly fetch the target record matching this ID without auth headers
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${propertyId}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen bg-emerald-950 text-white flex flex-col items-center justify-center p-4">
        <h3 className="text-xl font-bold">Property Not Found</h3>
        <p className="text-stone-400 text-sm mt-1">This listing may have been unlisted or moved off the grid.</p>
      </div>
    );
  }

  const property = await res.json();

  return (
    <div className="min-h-screen bg-emerald-950 text-stone-100 flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* --- LEFT SIDE: PROPERTY IMAGE WRAPPER --- */}
        <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-3xl shadow-2xl border border-emerald-800 bg-emerald-900/40">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover hover:scale-102 transition-transform duration-500"
            sizes="(max-w-1024px) 100vw, 50vw"
            priority
          />
          <span className="absolute top-4 left-4 bg-emerald-950/90 text-teal-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-md border border-emerald-800">
            {property.type}
          </span>
        </div>

        {/* --- RIGHT SIDE: PROPERTY SPECIFICATIONS OVERVIEW --- */}
        <div className="w-full flex flex-col">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
            {property.title}
          </h1>

          <div className="flex items-center gap-2 text-teal-400 font-semibold text-lg mb-6">
            <FaMapMarkerAlt />
            <span>{property.location}</span>
          </div>

          {/* Core Numerical Specifications Grid */}
          <div className="grid grid-cols-3 gap-4 py-4 px-5 bg-emerald-900/30 rounded-2xl border border-emerald-800/60 mb-6 text-center text-sm font-bold text-stone-200">
            <div className="flex flex-col items-center gap-1.5 border-r border-emerald-800/60">
              <FaBed className="text-teal-400 text-xl" />
              <span>{property.beds} Bedrooms</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 border-r border-emerald-800/60">
              <FaBath className="text-teal-400 text-xl" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <FaRulerCombined className="text-teal-400 text-xl" />
              <span>{property.propertySize} sqft</span>
            </div>
          </div>

          {/* Rating Subheader element */}
          <div className="flex items-center gap-1 bg-emerald-900/60 px-3 py-1 rounded-xl border border-emerald-800/40 w-fit text-sm font-bold text-white mb-6 shadow-inner">
            <span>Rating: {property.rating}</span>
            <FaStar className="text-amber-500 mb-0.5" />
          </div>

          {/* Description Text */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Overview Description</h3>
            <p className="text-stone-300 leading-relaxed text-sm md:text-base font-medium">{property.description}</p>
          </div>

          {/* Amenities Utilities Checklist */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Included Utilities & Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities?.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-stone-200 font-medium">
                  <FaCheckCircle className="text-teal-400 shrink-0 text-base" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Pricing Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-emerald-900">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Total Rate</span>
              <p className="text-3xl font-black text-white">
                ${property.price} <span className="text-base font-medium text-stone-400">/ night</span>
              </p>
            </div>

            <BookNowModal property={property} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
