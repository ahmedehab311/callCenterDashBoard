// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeftLong,
//   faPen,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import itemsData from "./itemsData";
// import img from "./img/macr1.png";
// import Counter from "./Counter";
// function CreateOrder() {
//   const navigate = useNavigate();
//   const [selectedButton, setSelectedButton] = useState("order");
//   const [selectedMenu, setSelectedMenu] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedItems, setSelectedItems] = useState([]); // لإدارة العناصر المختارة
//   const [selectedOption, setSelectedOption] = useState("Delivery"); // لحالة Delivery و Pickup

//   useEffect(() => {
//     setSelectedButton("order");
//   }, []);
//   const filteredItems = () => {
//     const itemsToFilter =
//       selectedMenu === "all" ? itemsData.all : itemsData[selectedMenu];

//     if (!searchTerm.trim()) {
//       return itemsToFilter;
//     }

//     return itemsToFilter.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.price.toString().includes(searchTerm)
//     );
//   };
//   const addItemToCheckout = (item) => {
//     setSelectedItems((prevItems) => [...prevItems, item]);
//   };
//   const removeItemFromCheckout = (itemIndex) => {
//     setSelectedItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
//   };
//   return (
//     <>
//       <div className="bg-[#F3F3F3] min-h-screen">
//         <div className="container mx-auto px-4 py-6">
//           <div className="text-center flex justify-between mb-8 items-center">
//             <div className="flex items-center justify-center ">
//               <FontAwesomeIcon
//                 icon={faArrowLeftLong}
//                 className="cursor-pointer"
//                 onClick={() => {
//                   navigate("/");
//                 }}
//               />
//               <h1 className="text-2xl font-bold ml-2">Create order</h1>
//             </div>
//             <p className="text-center">ID: Ahmed Khaled.</p>
//           </div>
//           <div className="flex items-center mx-4">
//             <button
//               onClick={() => setSelectedButton("order")}
//               className={`${
//                 selectedButton === "order"
//                   ? "bg-primary text-white"
//                   : "bg-[#283d3b2d] text-black"
//               } p-3 shadow-lg rounded-md font-medium text-[1rem]`}
//             >
//               order no: #2231527
//             </button>
//             <button
//               onClick={() => setSelectedButton("pastOrders")}
//               className={`${
//                 selectedButton === "pastOrders"
//                   ? "bg-primary text-white"
//                   : "bg-[#283d3b2d] text-black"
//               } p-3 shadow-lg rounded-md font-medium text-[1rem] mx-12`}
//             >
//               Badr's Past orders
//             </button>
//             <button
//               onClick={() => setSelectedButton("points")}
//               className={`${
//                 selectedButton === "points"
//                   ? "bg-primary text-white"
//                   : "bg-[#283d3b2d] text-black"
//               } p-3 shadow-lg rounded-md font-medium text-[1rem]`}
//             >
//               Number of points
//             </button>
//           </div>

//           <div className="flex">
//             {selectedButton === "order" && (
//               <div className="mt-6 ">
//                 <div className="flex flex-col">
//                   <div className="flex ml-[10rem]">
//                     <button
//                       onClick={() => setSelectedMenu("all")}
//                       className={`${
//                         selectedMenu === "all"
//                           ? "bg-primary text-white"
//                           : "bg-[#283d3b2d] text-black"
//                       } p-2 mx-2 rounded-md`}
//                     >
//                       All
//                     </button>
//                     <button
//                       onClick={() => setSelectedMenu("offers")}
//                       className={`${
//                         selectedMenu === "offers"
//                           ? "bg-primary text-white"
//                           : "bg-[#283d3b2d] text-black"
//                       } p-2 mx-2 rounded-md`}
//                     >
//                       Offers
//                     </button>
//                     <button
//                       onClick={() => setSelectedMenu("pasta")}
//                       className={`${
//                         selectedMenu === "pasta"
//                           ? "bg-primary text-white"
//                           : "bg-[#283d3b2d] text-black"
//                       } p-2 mx-2 rounded-md`}
//                     >
//                       Pasta
//                     </button>
//                     <button
//                       onClick={() => setSelectedMenu("drinks")}
//                       className={`${
//                         selectedMenu === "drinks"
//                           ? "bg-primary text-white"
//                           : "bg-[#283d3b2d] text-black"
//                       } p-2 mx-2 rounded-md`}
//                     >
//                       Drinks
//                     </button>
//                   </div>
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className=" my-4 w-full p-2 rounded-md"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <div className="grid grid-cols-3 gap-2 mt-4">
//                   {filteredItems().map((item) => (
//                     <div key={item.id} className=" p-2">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="object-cover"
//                       />
//                       <div className="text-center mt-2">
//                         <h3 className="text-[1.1rem] font-medium">
//                           {item.name}
//                         </h3>
//                         <p className="text-[1.1rem] font-semibold">
//                           {item.price} EGP
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="flex-1"></div>
//             <div className="bg-white ">
//               <div className="flex items-center justify-between p-3 bg-[#89937c54]">
//                 <div>
//                   <h2 className="">Badr el Taher</h2>
//                   <h2 className="">11 ahmed khashaba - El nozha</h2>
//                 </div>
//                 <FontAwesomeIcon icon={faPen} className="text-xl" />
//               </div>
//               <div className="flex items-center justify-around my-2">
//                 <h2 className="underline ">Delivery</h2>
//                 <h2>Pickup</h2>
//               </div>
//               <div className="flex items-center card p-2">
//                 <div className="flex  items-center">
//                   <h2 >x1</h2>
//                   <img src={img} alt="img" className="w-[50px] " />
//                 </div>
//                 <div className="mx-5 ">
//                   <h2>Shrimp Symphony</h2>
//                   <Counter />
//                 </div>
//                 <div className="flex flex-col">
//                   <h2>352Egp</h2>
//                   <FontAwesomeIcon icon={faTrash} className="text-center" />
//                 </div>
//               </div>
//               <div className="flex items-center card p-2">
//                 <div className="flex  items-center">
//                   <h2 >x1</h2>
//                   <img src={img} alt="img" className="w-[50px] " />
//                 </div>
//                 <div className="mx-5 ">
//                   <h2>Shrimp Symphony</h2>
//                   <Counter />
//                 </div>
//                 <div className="flex flex-col">
//                   <h2>352Egp</h2>
//                   <FontAwesomeIcon icon={faTrash} className="text-center" />
//                 </div>
//               </div>
//               <div className="flex items-center card p-2">
//                 <div className="flex  items-center">
//                   <h2 >x1</h2>
//                   <img src={img} alt="img" className="w-[50px] " />
//                 </div>
//                 <div className="mx-5 ">
//                   <h2>Shrimp Symphony</h2>
//                   <Counter />
//                 </div>
//                 <div className="flex flex-col">
//                   <h2>352Egp</h2>
//                   <FontAwesomeIcon icon={faTrash} className="text-center" />
//                 </div>
//               </div>
//               <div className="flex items-center card p-2">
//                 <div className="flex  items-center">
//                   <h2 >x1</h2>
//                   <img src={img} alt="img" className="w-[50px] " />
//                 </div>
//                 <div className="mx-5 ">
//                   <h2>Shrimp Symphony</h2>
//                   <Counter />
//                 </div>
//                 <div className="flex flex-col">
//                   <h2>352Egp</h2>
//                   <FontAwesomeIcon icon={faTrash} className="text-center" />
//                 </div>
//               </div>
       
//             </div>
//           </div>

//           {selectedButton === "pastOrders" && (
//             <div className="mt-6 p-4  ">
//               <h2 className="text-xl font-bold">Badr's Past Orders</h2>
//               <p>These are Badr's past orders...</p>
//             </div>
//           )}
//           {selectedButton === "points" && (
//             <div className="mt-6 p-4  ">
//               <h2 className="text-xl font-bold">Badr's Points</h2>
//               <p>Here are Badr's points...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default CreateOrder;
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import itemsData from "./itemsData";
import img from "./img/macr1.png";
import Counter from "./Counter";

function CreateOrder() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("order");
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]); 
  const [selectedOption, setSelectedOption] = useState("Delivery"); 
  const [itemQuantities, setItemQuantities] = useState({}); 

  
  useEffect(() => {
    setSelectedButton("order");
  }, []);

  const filteredItems = () => {
    const itemsToFilter =
      selectedMenu === "all" ? itemsData.all : itemsData[selectedMenu];

    if (!searchTerm.trim()) {
      return itemsToFilter;
    }

    return itemsToFilter.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.price.toString().includes(searchTerm)
    );
  };


  const addItemToCheckout = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    // تعيين الكمية الافتراضية إلى 1 لكل عنصر جديد يتم اختياره
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: 1,
    }));
  };

  // وظيفة لحذف عنصر معين من الشيك آوت
  const removeItemFromCheckout = (itemIndex) => {
    setSelectedItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  // دالة لتغيير كمية عنصر معين
  const handleQuantityChange = (itemId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center flex justify-between mb-8 items-center">
            <div className="flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              />
              <h1 className="text-2xl font-bold ml-2">Create order</h1>
            </div>
            <p className="text-center">ID: Ahmed Khaled.</p>
          </div>

          {/* أزرار التبديل بين الشيك آوت والنقاط */}
          <div className="flex items-center mx-4">
            <button
              onClick={() => setSelectedButton("order")}
              className={`${
                selectedButton === "order"
                  ? "bg-primary text-white"
                  : "bg-[#283d3b2d] text-black"
              } p-3 shadow-lg rounded-md font-medium text-[1rem]`}
            >
              order no: #2231527
            </button>
            <button
              onClick={() => setSelectedButton("pastOrders")}
              className={`${
                selectedButton === "pastOrders"
                  ? "bg-primary text-white"
                  : "bg-[#283d3b2d] text-black"
              } p-3 shadow-lg rounded-md font-medium text-[1rem] mx-12`}
            >
              Badr's Past orders
            </button>
            <button
              onClick={() => setSelectedButton("points")}
              className={`${
                selectedButton === "points"
                  ? "bg-primary text-white"
                  : "bg-[#283d3b2d] text-black"
              } p-3 shadow-lg rounded-md font-medium text-[1rem]`}
            >
              Number of points
            </button>
          </div>

          <div className="flex">
            {selectedButton === "order" && (
              <div className="mt-6 ">
                <div className="flex flex-col">
                  <div className="flex ml-[10rem]">
                    <button
                      onClick={() => setSelectedMenu("all")}
                      className={`${
                        selectedMenu === "all"
                          ? "bg-primary text-white"
                          : "bg-[#283d3b2d] text-black"
                      } p-2 mx-2 rounded-md`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedMenu("offers")}
                      className={`${
                        selectedMenu === "offers"
                          ? "bg-primary text-white"
                          : "bg-[#283d3b2d] text-black"
                      } p-2 mx-2 rounded-md`}
                    >
                      Offers
                    </button>
                    <button
                      onClick={() => setSelectedMenu("pasta")}
                      className={`${
                        selectedMenu === "pasta"
                          ? "bg-primary text-white"
                          : "bg-[#283d3b2d] text-black"
                      } p-2 mx-2 rounded-md`}
                    >
                      Pasta
                    </button>
                    <button
                      onClick={() => setSelectedMenu("drinks")}
                      className={`${
                        selectedMenu === "drinks"
                          ? "bg-primary text-white"
                          : "bg-[#283d3b2d] text-black"
                      } p-2 mx-2 rounded-md`}
                    >
                      Drinks
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Search..."
                  className=" my-4 w-full p-2 rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {filteredItems().map((item) => (
                    <div
                      key={item.id}
                      className="p-2 cursor-pointer"
                      onClick={() => addItemToCheckout(item)} // عند الضغط على العنصر
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover"
                      />
                      <div className="text-center mt-2">
                        <h3 className="text-[1.1rem] font-medium">{item.name}</h3>
                        <p className="text-[1.1rem] font-semibold">
                          {item.price} EGP
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex-1"></div>
            <div className="bg-gray-200 rounded-md shadow ">
              <div className="flex items-center justify-between p-3 bg-[#89937c54]">
                <div>
                  <h2>Badr el Taher</h2>
                  <h2>11 ahmed khashaba - El nozha</h2>
                </div>
                <FontAwesomeIcon icon={faPen} className="text-xl" />
              </div>

              <div className="flex items-center justify-around mt-2">
                <h2
                  className={`cursor-pointer ${
                    selectedOption === "Delivery" ? "underline" : ""
                  }`}
                  onClick={() => setSelectedOption("Delivery")}
                >
                  Delivery
                </h2>
                <h2
                  className={`cursor-pointer ${
                    selectedOption === "Pickup" ? "underline" : ""
                  }`}
                  onClick={() => setSelectedOption("Pickup")}
                >
                  Pickup
                </h2>
              </div>

          
              {selectedItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex mt-8 items-center">
                    <h2>x{itemQuantities[item.id]}</h2>
                    <img src={item.image} alt={item.name} className="w-[50px] ml-2" />
                  </div>
                  <div className="mx-5">
                    <h2>{item.name}</h2>
                    {/* هنا نعرض الـ Counter لتعديل الكمية */}
                    <Counter
                      value={itemQuantities[item.id]}
                      onChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* حساب السعر الإجمالي بناءً على الكمية */}
                    <h2>{(item.price * itemQuantities[item.id]).toFixed(2)} EGP</h2>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-center cursor-pointer"
                      onClick={() => removeItemFromCheckout(index)} // حذف العنصر عند الضغط
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* عرض الأوامر السابقة أو النقاط */}
          {selectedButton === "pastOrders" && (
            <div className="mt-6 p-4">
              <h2 className="text-xl font-bold">Badr's Past Orders</h2>
              <p>These are Badr's past orders...</p>
            </div>
          )}

          {selectedButton === "points" && (
            <div className="mt-6 p-4">
              <h2 className="text-xl font-bold">Number of Points</h2>
              <p>Badr has X number of points...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
