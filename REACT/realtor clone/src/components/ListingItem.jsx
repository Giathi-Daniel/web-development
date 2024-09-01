import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocation } from "react-icons/md";
import { FaBed, FaBath, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const ListingItem = ({ listing, id, onEdit, onDelete }) => {
  return (
    <li className="bg-white relative flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition duration-150 m-[10px]">
      <Link className="contents" to={`/category/${listing.type}/${id}`}>
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition duration-200 ease-in"
          loading="lazy"
          src={listing.imgUrls[0]}
          alt={listing.name}
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {listing.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocation className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex space-x-1 items-center mt-[10px]">
            <div className="flex items-center space-x-1">
              <p className="flex items-center whitespace-nowrap font-bold text-xs">
                <FaBed className="text-lg mr-1" />
                {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="flex items-center whitespace-nowrap">
                <FaBath className="text-lg mr-1" />
                {+listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : "1 Bath"}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(listing.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-4 cursor-pointer"
          onClick={() => onEdit(listing.id)}
        />
      )}
    </li>
  );
};

ListingItem.propTypes = {
  listing: PropTypes.shape({
    type: PropTypes.string.isRequired,
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    timestamp: PropTypes.object,
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired,
    discountedPrice: PropTypes.number,
    regularPrice: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ListingItem;
