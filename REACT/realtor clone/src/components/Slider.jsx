import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import { useNavigate } from "react-router";

const Slider = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!listings || listings.length === 0) {
    return <></>;
  }

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ type: "progressbar" }}
      effect="fade"
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      autoplay={{ delay: 3000 }}
    >
      {listings.map((listing) => (
        <SwiperSlide
          key={listing.id}
          onClick={() =>
            navigate(`/category/${listing.data.type}/${listing.id}`)
          }
        >
          <div
            style={{
              background: `url(${listing.data.imgUrls[0]}) center no-repeat`,
              backgroundSize: "cover",
            }}
            className="relative w-full h-[300px] overflow-hidden"
          ></div>
          <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
            {listing.data.name}
          </p>
          <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
            ${listing.data.discountedPrice ?? listing.data.regularPrice}
            {listing.data.type === "rent" && " / months"}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
