/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
function OrderCard({
  customerNumber,
  setCustomerNumber,
  handleClear,
  showTable,
  filteredCustomers,
  setFilteredCustomers,
  customers,
  setShowTable,
}) {
  const [editIndex, setEditIndex] = useState(null);
  const [newAddress, setNewAddress] = useState("");
  const [newCustomerData, setNewCustomerData] = useState({
    name: "",
    number: "",
    place: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [noResults, setNoResults] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (editIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIndex]);

  const handleSearch = () => {
    const filtered = customers.filter(
      (customer) => customer.number === customerNumber
    );
    setFilteredCustomers(filtered);
    setShowTable(filtered.length > 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editIndex !== null) {
        if (newAddress.trim() !== "") {
          handleConfirmEdit();
        }
      } else {
        handleSearch();
      }
    }
  };

  const handleEditAddress = (customerIndex, addressIndex, address) => {
    setEditIndex({ customerIndex, addressIndex });
    setNewAddress(address);
  };

  const handleConfirmEdit = () => {
    if (editIndex !== null) {
      const updatedCustomers = [...filteredCustomers];
      updatedCustomers[editIndex.customerIndex].addresses[
        editIndex.addressIndex
      ] = newAddress;
      setFilteredCustomers(updatedCustomers);
      setEditIndex(null);
    }
  };

  const handleAddAddress = () => {
    const updatedCustomers = [...filteredCustomers];
    const newCustomer = { ...newCustomerData, addresses: [newAddress] };
    updatedCustomers.push(newCustomer);
    setFilteredCustomers(updatedCustomers);
    setNewCustomerData({ name: "", number: "", place: "" });
    setNewAddress("");
    setIsPopupVisible(false);
  };

  return (
    <>
      <div className="">
        <div className="flex items-center mb-4 ">
          <input
            type="text"
            placeholder="Customer Number"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className="border rounded-l-md p-2 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-[#B2EF9B] text-primary rounded-r-md p-2 text-[1rem] font-semibold"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className=" text-[#283d3bbd] p-2 ml-2 text-[1rem] font-semibold"
          >
            Clear
          </button>
        </div>

        {noResults && !showTable && (
          <div className="text-primary bg-[#D9D9D9] w-[500px] h-[200px] flex items-center justify-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mr-4 text-[1.5rem]"
            />
            <h2 className="text-[1.1rem] font-semibold">
              No matching search results
            </h2>
          </div>
        )}

        {showTable && (
          <div className="mt-4">
            {/* <h3 className="text-md font-bold mb-2">Customer Info</h3> */}
            <table className="min-w-full ">
              <thead className="bg-primary text-white ">
                <tr>
                  <th className=" px-4 py-2 text-[1rem] font-semibold">Name</th>
                  <th className=" px-4 py-2 text-[1rem] font-semibold">
                    Number
                  </th>
                  <th className=" px-4 py-2 text-[1rem] font-semibold">
                    Place
                  </th>
                  <th className=" px-4 py-2 text-[1rem] font-semibold">
                    Addresses
                  </th>
                  <th className=" px-4 py-2 text-[1rem] font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, customerIndex) => (
                  <tr key={customerIndex}>
                    <td className=" bg-white text-[1.2rem] font-semibold px-4 py-2">
                      {customer.name}
                    </td>
                    <td className="bg-white  text-[1.2rem] font-normal px-4 py-2">
                      {customer.number}
                    </td>
                    <td className="bg-white text-[1.2rem] font-normal px-4 py-2">
                      {customer.place}
                    </td>
                    <td className="bg-white text-[1.2rem] font-normal px-4 py-2">
                      {customer.addresses.map((address, addressIndex) => (
                        <div key={addressIndex} className="mb-2">
                          {editIndex &&
                          editIndex.customerIndex === customerIndex &&
                          editIndex.addressIndex === addressIndex ? (
                            <input
                              ref={inputRef}
                              type="text"
                              value={newAddress}
                              onChange={(e) => setNewAddress(e.target.value)} // تحديث الحالة عند تغيير القيمة
                              onKeyDown={(e) => handleKeyDown(e)} // تمرير حدث مفتاح الضغط
                              className="rounded p-1 mr-2 w-full" // إضافة أنماط
                            />
                          ) : (
                            <span className="mr-2">{address}</span>
                          )}
                        </div>
                      ))}
                    </td>

                    <td className="bg-white  px-4 py-2">
                      {customer.addresses.map((address, addressIndex) => (
                        <div
                          key={addressIndex}
                          className="flex items-center space-x-2"
                        >
                          {editIndex &&
                          editIndex.customerIndex === customerIndex &&
                          editIndex.addressIndex === addressIndex ? (
                            <button
                              onClick={handleConfirmEdit}
                              className="bg-green-500 text-white rounded p-1"
                            >
                              Confirm
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleEditAddress(
                                  customerIndex,
                                  addressIndex,
                                  address
                                )
                              }
                              className="text-primary p-1"
                            >
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                          )}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex">
              <button
                onClick={() => setIsPopupVisible(true)}
                className="bg-[#FF934F] text-white rounded p-2 mt-4"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Add New Address
              </button>
            </div>
            {isPopupVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-md font-bold mb-2">Add New Address</h3>
                  <label className="block mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={newCustomerData.name}
                    onChange={(e) =>
                      setNewCustomerData({
                        ...newCustomerData,
                        name: e.target.value,
                      })
                    }
                    className="border rounded-md p-2 w-full mb-2"
                  />

                  <label className="block mb-1" htmlFor="number">
                    Number
                  </label>
                  <input
                    id="number"
                    type="text"
                    placeholder="Number"
                    value={newCustomerData.number}
                    onChange={(e) =>
                      setNewCustomerData({
                        ...newCustomerData,
                        number: e.target.value,
                      })
                    }
                    className="border rounded-md p-2 w-full mb-2"
                  />

                  <label className="block mb-1" htmlFor="place">
                    Place
                  </label>
                  <input
                    id="place"
                    type="text"
                    placeholder="Place"
                    value={newCustomerData.place}
                    onChange={(e) =>
                      setNewCustomerData({
                        ...newCustomerData,
                        place: e.target.value,
                      })
                    }
                    className="border rounded-md p-2 w-full mb-2"
                  />

                  <label className="block mb-1" htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="border rounded-md p-2 w-full mb-2"
                  />

                  <button
                    onClick={handleAddAddress}
                    className="bg-green-500 text-white rounded p-2"
                  >
                    Add Address
                  </button>
                  <button
                    onClick={() => setIsPopupVisible(false)}
                    className="bg-red-500 text-white rounded p-2 mt-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default OrderCard;
