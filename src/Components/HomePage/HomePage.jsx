// import { Link } from "react-router-dom";
// import Header from "./Header/Header.jsx";
// import CardContent from "./CardContent/CardContent.jsx";
// import { useEffect, useState } from "react";
// import NewUser from "./NewUser/NewUser.jsx";
// function HomePage() {
//   const [customerNumber, setCustomerNumber] = useState("");
//   const [isCreateOrder, setIsCreateOrder] = useState(true);
//     const [showTable, setShowTable] = useState(false);
//     const [customers, setCustomers] = useState([
//       {
//         name: "Badr ElTaher",
//         number: "01014097665",
//         place: "Home",
//         addresses: ["11 Ahmed Khashaba - Nozha"],
//       },
//       {
//         name: "Badr ElTaher",
//         number: "01014097665",
//         place: "Home",
//         addresses: ["11 Ahmed Khashaba - Nozha"],
//       },
//       {
//         name: "Ali Mohamed",
//         number: "01015012345",
//         place: "Office",
//         addresses: ["22 Salah El-Din St."],
//       },
//       {
//         name: "Sara Ahmed",
//         number: "01016054321",
//         place: "Home",
//         addresses: ["33 Elm St."],
//       },
//       {
//         name: "Mona Ali",
//         number: "01017098765",
//         place: "Work",
//         addresses: ["44 Nile St."],
//       },
//     ]);
//     const [filteredCustomers, setFilteredCustomers] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editIndex, setEditIndex] = useState(null); // To track which address is being edited
//     const [newAddress, setNewAddress] = useState(""); // To hold the new address value during editing
//     const [showPopup, setShowPopup] = useState(false); // Control the popup visibility
//     const [newCustomerData, setNewCustomerData] = useState({
//       name: "",
//       number: "",
//       place: "",
//       address: "",
//     }); // Store all new customer data

//     // Search for customer by number
//     const handleSearch = () => {
//       const filtered = customers.filter(
//         (customer) => customer.number === customerNumber
//       );
//       setFilteredCustomers(filtered);
//       setShowTable(filtered.length > 0);
//     };

//     const handleClear = () => {
//       setCustomerNumber("");
//       setShowTable(false);
//       setFilteredCustomers([]);
//     };

//     const handleEditAddress = (customerIndex, addressIndex) => {
//       setIsEditing(true);
//       setEditIndex({ customerIndex, addressIndex });
//       setNewAddress(filteredCustomers[customerIndex].addresses[addressIndex]);
//     };

//     const handleConfirmEdit = () => {
//       if (newAddress.trim()) {
//         const updatedCustomers = [...filteredCustomers];
//         updatedCustomers[editIndex.customerIndex].addresses[
//           editIndex.addressIndex
//         ] = newAddress;
//         setFilteredCustomers(updatedCustomers);

//         // Update main customers array
//         setCustomers((prevCustomers) => {
//           const updatedAllCustomers = [...prevCustomers];
//           const customerIndexInAll = customers.findIndex(
//             (c) => c.number === filteredCustomers[editIndex.customerIndex].number
//           );
//           updatedAllCustomers[customerIndexInAll].addresses[
//             editIndex.addressIndex
//           ] = newAddress;
//           return updatedAllCustomers;
//         });

//         setIsEditing(false);
//         setEditIndex(null);
//       }
//     };

//     const handleAddAddressClick = () => {
//       setShowPopup(true);
//     };

//     const handlePopupSubmit = () => {
//       const { name, number, place, address } = newCustomerData;
//       if (name.trim() && number.trim() && place.trim() && address.trim()) {
//         const updatedCustomers = [...filteredCustomers];
//         updatedCustomers.push({
//           name,
//           number,
//           place,
//           addresses: [address],
//         });
//         setFilteredCustomers(updatedCustomers);

//         // Update main customers array
//         setCustomers((prevCustomers) => [
//           ...prevCustomers,
//           {
//             name,
//             number,
//             place,
//             addresses: [address],
//           },
//         ]);

//         setShowPopup(false);
//         setNewCustomerData({ name: "", number: "", place: "", address: "" });
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (e.key === "Enter") {
//         handleSearch();
//       }
//     };

//     const handleOutsideClick = (e) => {
//       if (showPopup && !e.target.closest(".popup-content")) {
//         setShowPopup(false);
//       }
//     };

//     useEffect(() => {
//       if (showPopup) {
//         document.addEventListener("mousedown", handleOutsideClick);
//       } else {
//         document.removeEventListener("mousedown", handleOutsideClick);
//       }

//       return () => {
//         document.removeEventListener("mousedown", handleOutsideClick);
//       };
//     }, [showPopup]);

//     return (
//       <>
//         <Header />

//         <div className="flex justify-center items-center text-center p-6">
//           <div className="bg-white shadow-lg rounded-lg p-[5rem] relative">
//             <div className="absolute top-0 -left-0 flex space-x-1">
//               <button
//                 onClick={() => setIsCreateOrder(true)}
//                 className="bg-blue-500 text-white rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-[1rem] p-3 shadow-lg"
//               >
//                 Create order
//               </button>
//               <button
//                 onClick={() => setIsCreateOrder(false)}
//                 className="bg-gray-300 text-black rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-[1rem] p-3 shadow-lg"
//               >
//                 New User
//               </button>
//             </div>

//             {/* عرض القسم بناءً على الحالة */}
//             {isCreateOrder ? (
//               <CardContent
//                 customerNumber={customerNumber}
//                 setCustomerNumber={setCustomerNumber}
//                 handleSearch={handleSearch}
//                 handleClear={handleClear}
//                 handleKeyDown={handleKeyDown}
//                 handleEditAddress={handleEditAddress}
//                 handleConfirmEdit={handleEditAddress}

//               />
//             ) : (
//               <NewUser
//                 newCustomerData={newCustomerData}
//                 setNewCustomerData={setNewCustomerData}
//                 handlePopupSubmit={handlePopupSubmit}
//               />
//             )}

//           {/* <Link to="/create-order">
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       Create Order
//     </button>
//   </Link> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

import { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import CardContent from "./CardContent/CardContent.jsx";
import NewUser from "./NewUser/NewUser.jsx";

function HomePage() {
  const [customerNumber, setCustomerNumber] = useState("");
  const [isCreateOrder, setIsCreateOrder] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [customers, setCustomers] = useState([
    {
      name: "Badr ElTaher",
      number: "01014097665",
      place: "Home",
      addresses: ["11 Ahmed Khashaba - Nozha"],
    },
    {
      name: "ahahah",
      number: "12345",
      place: "Home",
      addresses: ["11 Ahmed Khashaba - sdasda"],
    },

  ]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newAddress, setNewAddress] = useState(""); 
  const [newCustomerData, setNewCustomerData] = useState({
    name: "",
    number: "",
    place: "",
    address: "",
  }); 


  const handleSearch = () => {
    const filtered = customers.filter(
      (customer) => customer.number === customerNumber
    );
    setFilteredCustomers(filtered);
    setShowTable(filtered.length > 0);
  };

  const handleClear = () => {
    setCustomerNumber('');
    setShowTable(false);
    setFilteredCustomers([]);
  };

  // const handleEditAddress = (customerIndex, addressIndex, newAddress) => {
  //   const updatedCustomers = [...filteredCustomers];
  //   updatedCustomers[customerIndex].addresses[addressIndex] = newAddress;
  //   setFilteredCustomers(updatedCustomers);
  //   saveToLocalStorage(updatedCustomers);
  // };

  const handleConfirmEdit = () => {
    if (newAddress.trim()) {
      const updatedCustomers = [...filteredCustomers];
      updatedCustomers[editIndex.customerIndex].addresses[
        editIndex.addressIndex
      ] = newAddress;
      setFilteredCustomers(updatedCustomers);

      // تحديث مصفوفة العملاء الرئيسية
      setCustomers((prevCustomers) => {
        const updatedAllCustomers = [...prevCustomers];
        const customerIndexInAll = customers.findIndex(
          (c) => c.number === filteredCustomers[editIndex.customerIndex].number
        );
        updatedAllCustomers[customerIndexInAll].addresses[
          editIndex.addressIndex
        ] = newAddress;
        return updatedAllCustomers;
      });

      setIsEditing(false);
      setEditIndex(null);
    }
  };
  // const handleAddAddress = (customerIndex, newAddress) => {
  //   const updatedCustomers = [...filteredCustomers];
  //   updatedCustomers[customerIndex].addresses.push(newAddress);
  //   setFilteredCustomers(updatedCustomers);
  //   saveToLocalStorage(updatedCustomers);
  // };
  
  const handlePopupSubmit = () => {
    const { name, number, place, address } = newCustomerData;
    if (name.trim() && number.trim() && place.trim() && address.trim()) {
      const updatedCustomers = [...filteredCustomers];
      updatedCustomers.push({
        name,
        number,
        place,
        addresses: [address],
      });
      setFilteredCustomers(updatedCustomers);

      // تحديث مصفوفة العملاء الرئيسية
      setCustomers((prevCustomers) => [
        ...prevCustomers,
        {
          name,
          number,
          place,
          addresses: [address],
        },
      ]);

      setNewCustomerData({ name: "", number: "", place: "", address: "" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>

<div  >
<Header />
      <div className="flex justify-center items-center text-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-[5rem] relative">
          <div className="absolute top-0 -left-0 flex space-x-1">
            <button
              onClick={() => setIsCreateOrder(true)}
              className="bg-blue-500 text-white p-3 shadow-lg"
            >
              Create order
            </button>
            <button
              onClick={() => setIsCreateOrder(false)}
              className="bg-gray-300 text-black p-3 shadow-lg"
            >
              New User
            </button>
          </div>

          {isCreateOrder ? (
            <CardContent
              customerNumber={customerNumber}
              setCustomerNumber={setCustomerNumber}
              handleSearch={handleSearch}
              handleClear={handleClear}
              handleKeyDown={handleKeyDown}
              showTable={showTable}
              filteredCustomers={filteredCustomers}
              handleConfirmEdit={handleConfirmEdit}
              isEditing={isEditing}
              editIndex={editIndex}
              newAddress={newAddress}
              setNewAddress={setNewAddress}
              setFilteredCustomers={setFilteredCustomers}
            />
          ) : (
            <NewUser
              newCustomerData={newCustomerData}
              setNewCustomerData={setNewCustomerData}
              handlePopupSubmit={handlePopupSubmit}
            />
          )}
        </div>
      </div>
</div>
    </>
  );
}

export default HomePage;
