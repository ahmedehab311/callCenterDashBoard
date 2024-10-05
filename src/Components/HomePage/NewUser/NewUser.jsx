/* eslint-disable react/prop-types */
function NewUser({ newCustomerData, setNewCustomerData, handlePopupSubmit }) {
  const handleClear = () => {
    setNewCustomerData({
      name: "",
      number: "",
      additionalNumber: "",
      place: "",
      city: "",
      street: "",
      building: "",
      floor: "",
      apartment: "",
      landingMark: "",
      additionalInfo: "",
    });
  };
  return (
    <>
      <div>
        {/* Customer Name */}
        <div className="flex items-center">
          <div className=" mr-2">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Customer Name
            </label>
            <input
              type="text"
              value={newCustomerData.name}
              onChange={(e) =>
                setNewCustomerData({ ...newCustomerData, name: e.target.value })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Customer Name"
            />
          </div>

          {/* Customer Number */}
          <div className=" mr-2">
            <label className="flex text-gray-700 text-[1rem] font-bold mb-1">
              Customer Number
            </label>
            <input
              type="text"
              value={newCustomerData.number}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  number: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Customer Number"
            />
          </div>

          {/* Additional Number */}
          <div className=" ">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Additional Number
            </label>
            <input
              type="text"
              value={newCustomerData.additionalNumber}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  additionalNumber: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Additional Number"
            />
          </div>
        </div>

        {/* Place */}
        <div className="my-4">
          <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
            Customer Address
          </label>
          <input
            type="text"
            value={newCustomerData.place}
            onChange={(e) =>
              setNewCustomerData({ ...newCustomerData, place: e.target.value })
            }
            className="border rounded p-2 w-full"
            placeholder="Enter Customer details"
          />
        </div>

        {/* City */}
        <div className="flex items-center">
          <div className="mb-2  mr-3  ">
            <label className="flex text-gray-700 text-[1rem] font-bold mb-1">
              City
            </label>
            <input
              type="text"
              value={newCustomerData.city}
              onChange={(e) =>
                setNewCustomerData({ ...newCustomerData, city: e.target.value })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter City"
            />
          </div>

          {/* Street */}
          <div className="  mr-3">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Street
            </label>
            <input
              type="text"
              value={newCustomerData.street}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  street: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Street"
            />
          </div>

          {/* Building */}
          <div className="">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Building
            </label>
            <input
              type="text"
              value={newCustomerData.building}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  building: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Building"
            />
          </div>
        </div>

        <div className="flex my-4">
          {/* Floor */}
          <div className="mr-2">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Floor
            </label>
            <input
              type="text"
              value={newCustomerData.floor}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  floor: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Floor"
            />
          </div>

          {/* Apartment */}
          <div className="mr-2">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Apartment
            </label>
            <input
              type="text"
              value={newCustomerData.apartment}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  apartment: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Apartment"
            />
          </div>

          {/* Landing Mark */}
          <div className="  ">
            <label className="flex text-gray-700 text-[1rem]  font-bold mb-1">
              Landing Mark
            </label>
            <input
              type="text"
              value={newCustomerData.landingMark}
              onChange={(e) =>
                setNewCustomerData({
                  ...newCustomerData,
                  landingMark: e.target.value,
                })
              }
              className="border rounded p-2 w-full"
              placeholder="Enter Landing Mark"
            />
          </div>
        </div>
        {/* Additional Info */}
        <div className="my-4">
          <label className="flex text-gray-700 text-[1rem] font-bold mb-1 ">
            Additional Info
          </label>
          <input
            type="text"
            value={newCustomerData.additionalInfo}
            onChange={(e) =>
              setNewCustomerData({
                ...newCustomerData,
                additionalInfo: e.target.value,
              })
            }
            className="border rounded p-2 w-full"
            placeholder="Enter Additional Info"
          />
        </div>

        {/* Submit Button */}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePopupSubmit}
          className=" bg-[#B2EF9B] text-primary font-semibold rounded px-10 py-2 text-[1.2rem] "
        >
          add
        </button>
        <button
          onClick={handleClear}
          className=" text-primary font-semibold rounded p-2 text-[1.2rem]"
        >
          clear
        </button>
      </div>
    </>
  );
}

export default NewUser;
