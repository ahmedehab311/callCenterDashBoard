/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function OrderCard({
  customerNumber,
  setCustomerNumber,
  handleClear,
  handleKeyDown,
  showTable,
  filteredCustomers,
  setFilteredCustomers,
}) {
  const navigate = useNavigate();
  const [editIndex, setEditIndex] = useState(null);
  const [newAddress, setNewAddress] = useState("");
  const [newCustomerData, setNewCustomerData] = useState({
    name: "",
    number: "",
    place: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [noResults, setNoResults] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const storedCustomers = loadFromLocalStorage();
    if (storedCustomers.length > 0) {
      setFilteredCustomers(storedCustomers);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("customers", JSON.stringify(data));
  };

  const loadFromLocalStorage = () => {
    const data = localStorage.getItem("customers");
    return data ? JSON.parse(data) : [];
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
      saveToLocalStorage(updatedCustomers);
      setEditIndex(null);
      setNewAddress("");
    }
  };

  const handleAddAddress = () => {
    const updatedCustomers = [...filteredCustomers];
    const newCustomer = { ...newCustomerData, addresses: [newAddress] };
    updatedCustomers.push(newCustomer);
    setFilteredCustomers(updatedCustomers);
    saveToLocalStorage(updatedCustomers);
    setNewCustomerData({ name: "", number: "", place: "" });
    setNewAddress("");
    setIsPopupVisible(false);
  };

  const handleDeleteAddress = (customerIndex, addressIndex) => {
    const customer = filteredCustomers[customerIndex];
    if (!customer || !customer.addresses) {
      console.error("Customer or addresses not found");
      return;
    }

    if (window.confirm("هل أنت متأكد من أنك تريد الحذف؟")) {
      const updatedCustomers = [...filteredCustomers];
      updatedCustomers[customerIndex].addresses.splice(addressIndex, 1);
      setFilteredCustomers(updatedCustomers);
      saveToLocalStorage(updatedCustomers);
    }
  };

  const handleSearch = () => {
    const customers = loadFromLocalStorage();
    const filtered = customers.filter((customer) =>
      customer.number.includes(customerNumber)
    );

    setFilteredCustomers(filtered);
    setNoResults(filtered.length === 0);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Customer Number"
          value={customerNumber}
          onChange={(e) => setCustomerNumber(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border rounded-l-md p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-[#B2EF9B] text-primary rounded-r-md p-2"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 text-black rounded-md p-2 ml-2"
        >
          Clear
        </button>
      </div>

      {noResults && !showTable && (
        <div className="text-red-500">لا توجد نتائج للبحث.</div>
      )}

      {showTable && (
        <div className="mt-4">
          <h3 className="text-md font-bold mb-2">Customer Info</h3>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Number</th>
                <th className="border px-4 py-2">Place</th>
                <th className="border px-4 py-2">Addresses</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, customerIndex) => (
                <tr key={customerIndex}>
                  <td className="border px-4 py-2">{customer.name}</td>
                  <td className="border px-4 py-2">{customer.number}</td>
                  <td className="border px-4 py-2">{customer.place}</td>
                  <td className="border px-4 py-2">
                    {customer.addresses.map((address, addressIndex) => (
                      <div
                        key={addressIndex}
                        className="flex items-center mb-2"
                      >
                        {editIndex &&
                        editIndex.customerIndex === customerIndex &&
                        editIndex.addressIndex === addressIndex ? (
                          <input
                            type="text"
                            value={newAddress}
                            onChange={(e) => setNewAddress(e.target.value)}
                            className="border rounded p-1 mr-2 w-full"
                          />
                        ) : (
                          <span className="mr-2">{address}</span>
                        )}
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
                            className="bg-yellow-500 text-white rounded p-1"
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    ))}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white rounded p-1"
                      onClick={() =>
                        handleDeleteAddress(customerIndex, addressIndex)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => setIsPopupVisible(true)}
            className="bg-[#FF934F] text-white rounded p-2 mt-4"
          >
            Add New Address
          </button>
          {isPopupVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-md font-bold mb-2">Add New Address</h3>
                <input
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
                <input
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
                <input
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
                <input
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
      <button
        onClick={() => {
          navigate("/create-order");
        }}
        className="bg-red-500 text-white rounded p-2 mt-2"
      >
        create order
      </button>
    </div>
  );
}

export default OrderCard;
