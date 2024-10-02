
// import  { useState, useEffect } from 'react'
// function OrderCard() {
//   const [customerNumber, setCustomerNumber] = useState('');
//   const [showTable, setShowTable] = useState(false);
//   const [customers, setCustomers] = useState([
//     { name: 'Badr ElTaher', number: '01014097665', place: 'Home', addresses: ['11 Ahmed Khashaba - Nozha'] },
//     { name: 'Badr ElTaher', number: '01014097665', place: 'Home', addresses: ['11 Ahmed Khashaba - Nozha'] },
//     { name: 'Ali Mohamed', number: '01015012345', place: 'Office', addresses: ['22 Salah El-Din St.'] },
//     { name: 'Sara Ahmed', number: '01016054321', place: 'Home', addresses: ['33 Elm St.'] },
//     { name: 'Mona Ali', number: '01017098765', place: 'Work', addresses: ['44 Nile St.'] },
//   ]);
//   const [filteredCustomers, setFilteredCustomers] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null); // To track which address is being edited
//   const [newAddress, setNewAddress] = useState(''); // To hold the new address value during editing
//   const [showPopup, setShowPopup] = useState(false); // Control the popup visibility
//   const [newCustomerData, setNewCustomerData] = useState({ name: '', number: '', place: '', address: '' }); // Store all new customer data

//   // Search for customer by number
//   const handleSearch = () => {
//     const filtered = customers.filter(customer => customer.number === customerNumber);
//     setFilteredCustomers(filtered);
//     setShowTable(filtered.length > 0);
//   };

//   const handleClear = () => {
//     setCustomerNumber('');
//     setShowTable(false);
//     setFilteredCustomers([]);
//   };

//   const handleEditAddress = (customerIndex, addressIndex) => {
//     setIsEditing(true);
//     setEditIndex({ customerIndex, addressIndex });
//     setNewAddress(filteredCustomers[customerIndex].addresses[addressIndex]);
//   };

//   const handleConfirmEdit = () => {
//     if (newAddress.trim()) {
//       const updatedCustomers = [...filteredCustomers];
//       updatedCustomers[editIndex.customerIndex].addresses[editIndex.addressIndex] = newAddress;
//       setFilteredCustomers(updatedCustomers);

//       // Update main customers array
//       setCustomers((prevCustomers) => {
//         const updatedAllCustomers = [...prevCustomers];
//         const customerIndexInAll = customers.findIndex(c => c.number === filteredCustomers[editIndex.customerIndex].number);
//         updatedAllCustomers[customerIndexInAll].addresses[editIndex.addressIndex] = newAddress;
//         return updatedAllCustomers;
//       });

//       setIsEditing(false);
//       setEditIndex(null);
//     }
//   };

//   const handleAddAddressClick = () => {
//     setShowPopup(true);
//   };

//   const handlePopupSubmit = () => {
//     const { name, number, place, address } = newCustomerData;
//     if (name.trim() && number.trim() && place.trim() && address.trim()) {
//       const updatedCustomers = [...filteredCustomers];
//       updatedCustomers.push({
//         name,
//         number,
//         place,
//         addresses: [address],
//       });
//       setFilteredCustomers(updatedCustomers);

//       // Update main customers array
//       setCustomers((prevCustomers) => [...prevCustomers, {
//         name,
//         number,
//         place,
//         addresses: [address],
//       }]);

//       setShowPopup(false); // Close popup
//       setNewCustomerData({ name: '', number: '', place: '', address: '' }); // Reset form
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleOutsideClick = (e) => {
//     if (showPopup && !e.target.closest('.popup-content')) {
//       setShowPopup(false); // Close popup if clicked outside of it
//     }
//   };

//   useEffect(() => {
//     if (showPopup) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [showPopup]);

//   return (
//     <div className="flex justify-center items-center ">
//       <div className="bg-white shadow-lg rounded-lg p-6 ">
//         <h2 className="text-lg font-bold mb-4">Create Order</h2>
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Customer Number"
//             value={customerNumber}
//             onChange={(e) => setCustomerNumber(e.target.value)}
//             onKeyDown={handleKeyDown} // Trigger search on Enter key
//             className="border rounded-l-md p-2 w-full"
//           />
//           <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r-md p-2">
//             Search
//           </button>
//           <button onClick={handleClear} className="bg-gray-300 text-black rounded-md p-2 ml-2">
//             Clear
//           </button>
//         </div>

//         {showTable && (
//           <div className="mt-4">
//             <h3 className="text-md font-bold mb-2">Customer Info</h3>
//             <table className="min-w-full border">
//               <thead>
//                 <tr>
//                   <th className="border px-4 py-2">Name</th>
//                   <th className="border px-4 py-2">Number</th>
//                   <th className="border px-4 py-2">Place</th>
//                   <th className="border px-4 py-2">Addresses</th>
//                   <th className="border px-4 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCustomers.map((customer, customerIndex) => (
//                   <tr key={customerIndex}>
//                     <td className="border px-4 py-2">{customer.name}</td>
//                     <td className="border px-4 py-2">{customer.number}</td>
//                     <td className="border px-4 py-2">{customer.place}</td>
//                     <td className="border px-4 py-2">
//                       {customer.addresses.map((address, addressIndex) => (
//                         <div key={addressIndex} className="flex items-center mb-2">
//                           {isEditing && editIndex?.customerIndex === customerIndex && editIndex?.addressIndex === addressIndex ? (
//                             <input
//                               type="text"
//                               value={newAddress}
//                               onChange={(e) => setNewAddress(e.target.value)}
//                               className="border rounded p-1 mr-2 w-full"
//                             />
//                           ) : (
//                             <span className="mr-2">{address}</span>
//                           )}
//                           {isEditing && editIndex?.customerIndex === customerIndex && editIndex?.addressIndex === addressIndex ? (
//                             <button
//                               onClick={handleConfirmEdit}
//                               className="bg-green-500 text-white rounded p-1"
//                             >
//                               Confirm
//                             </button>
//                           ) : (
//                             <button
//                               onClick={() => handleEditAddress(customerIndex, addressIndex)}
//                               className="bg-yellow-500 text-white rounded p-1"
//                             >
//                               Edit
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </td>
//                     <td className="border px-4 py-2">
//                       <button className="bg-red-500 text-white rounded p-1">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Add Address Button */}
//         {showTable && (
//           <button
//             onClick={handleAddAddressClick}
//             className="bg-blue-500 text-white rounded p-2 mt-4 w-full"
//           >
//             Add Address
//           </button>
//         )}

//         {showPopup && (
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-lg popup-content">
//               <h3 className="text-lg font-bold mb-4">Add New Customer & Address</h3>
//               <input
//                 type="text"
//                 value={newCustomerData.name}
//                 onChange={(e) => setNewCustomerData({ ...newCustomerData, name: e.target.value })}
//                 className="border rounded p-2 w-full mb-2"
//                 placeholder="Enter Name"
//               />
//               <input
//                 type="text"
//                 value={newCustomerData.number}
//                 onChange={(e) => setNewCustomerData({ ...newCustomerData, number: e.target.value })}
//                 className="border rounded p-2 w-full mb-2"
//                 placeholder="Enter Number"
//               />
//               <input
//                 type="text"
//                 value={newCustomerData.place}
//                 onChange={(e) => setNewCustomerData({ ...newCustomerData, place: e.target.value })}
//                 className="border rounded p-2 w-full mb-2"
//                 placeholder="Enter Place"
//               />
//               <input
//                 type="text"
//                 value={newCustomerData.address}
//                 onChange={(e) => setNewCustomerData({ ...newCustomerData, address: e.target.value })}
//                 className="border rounded p-2 w-full mb-2"
//                 placeholder="Enter Address"
//               />
//               <button
//                 onClick={handlePopupSubmit}
//                 className="bg-blue-500 text-white rounded p-2 mt-4 w-full"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderCard;




import  { useState, useEffect } from 'react'
function OrderCard() {
const [customerNumber,setCustomerNumber] = useState('')

const [showTable,setShowTable] = useState('')

const [customers, setCustomers] = useState([
    { name: 'Badr ElTaher', number: '01014097665', place: 'Home', addresses: ['11 Ahmed Khashaba - Nozha'] },
    { name: 'Ali Mohamed', number: '01015012345', place: 'Office', addresses: ['22 Salah El-Din St.'] },
    { name: 'Sara Ahmed', number: '01016054321', place: 'Home', addresses: ['33 Elm St.'] },
    { name: 'Mona Ali', number: '01017098765', place: 'Work', addresses: ['44 Nile St.'] },
  ]);

  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const [isEditing,setIsEditing] = useState(false);

  const [editIndex,setIndex] = useState(null);

  const [showPopup,setShowPopup] = useState('false');
  const [newCustomerData, setNewCustomerData] = useState({ name: '', number: '', place: '', address: '' });
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-lg font-bold mb-4">Create Order</h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Customer Number"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
            onKeyDown={handleKeyDown} // Trigger search on Enter key
            className="border rounded-l-md p-2 w-full"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r-md p-2">
            Search
          </button>
          <button onClick={handleClear} className="bg-gray-300 text-black rounded-md p-2 ml-2">
            Clear
          </button>
        </div>

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
                        <div key={addressIndex} className="flex items-center mb-2">
                          {isEditing && editIndex?.customerIndex === customerIndex && editIndex?.addressIndex === addressIndex ? (
                            <input
                              type="text"
                              value={newAddress}
                              onChange={(e) => setNewAddress(e.target.value)}
                              className="border rounded p-1 mr-2 w-full"
                            />
                          ) : (
                            <span className="mr-2">{address}</span>
                          )}
                          {isEditing && editIndex?.customerIndex === customerIndex && editIndex?.addressIndex === addressIndex ? (
                            <button
                              onClick={handleConfirmEdit}
                              className="bg-green-500 text-white rounded p-1"
                            >
                              Confirm
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEditAddress(customerIndex, addressIndex)}
                              className="bg-yellow-500 text-white rounded p-1"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      ))}
                    </td>
                    <td className="border px-4 py-2">
                      <button className="bg-red-500 text-white rounded p-1">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add Address Button */}
        {showTable && (
          <button
            onClick={handleAddAddressClick}
            className="bg-blue-500 text-white rounded p-2 mt-4 w-full"
          >
            Add Address
          </button>
        )}

        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg popup-content">
              <h3 className="text-lg font-bold mb-4">Add New Customer & Address</h3>
              <input
                type="text"
                value={newCustomerData.name}
                onChange={(e) => setNewCustomerData({ ...newCustomerData, name: e.target.value })}
                className="border rounded p-2 w-full mb-2"
                placeholder="Enter Name"
              />
              <input
                type="text"
                value={newCustomerData.number}
                onChange={(e) => setNewCustomerData({ ...newCustomerData, number: e.target.value })}
                className="border rounded p-2 w-full mb-2"
                placeholder="Enter Number"
              />
              <input
                type="text"
                value={newCustomerData.place}
                onChange={(e) => setNewCustomerData({ ...newCustomerData, place: e.target.value })}
                className="border rounded p-2 w-full mb-2"
                placeholder="Enter Place"
              />
              <input
                type="text"
                value={newCustomerData.address}
                onChange={(e) => setNewCustomerData({ ...newCustomerData, address: e.target.value })}
                className="border rounded p-2 w-full mb-2"
                placeholder="Enter Address"
              />
              <button
                onClick={handlePopupSubmit}
                className="bg-blue-500 text-white rounded p-2 mt-4 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderCard;

