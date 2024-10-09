import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import itemsData from "./itemsData";
import Counter from "./Counter";

function CreateOrder() {
  const inputRef = useRef(null);
  const [selectedButton, setSelectedButton] = useState("order");
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Delivery");
  const [itemQuantities, setItemQuantities] = useState({});
  // const [editedAddress, setEditedAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedAddress, setEditedAddress] = useState(
    "11 ahmed khashaba - El nozha"
  );

  useEffect(() => {
    setSelectedButton("order");
  }, []);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  const handleConfirmEdit = () => {
    setIsEditing(false);
  };
  useEffect(() => {
    // استرجاع العناصر من localStorage عند تحميل الصفحة
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedQuantities = JSON.parse(localStorage.getItem("cartQuantities")) || {};
    
    setSelectedItems(storedItems);
    setItemQuantities(storedQuantities);
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
    const uniqueId = Date.now();
    setSelectedItems((prevItems) => [
      ...prevItems,
      { ...item, uniqueId: uniqueId },
    ]);
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [uniqueId]: 1,
    }));
  };

  const removeItemFromCheckout = (uniqueId) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.uniqueId !== uniqueId)
    );
    setItemQuantities((prevQuantities) => {
      const { [uniqueId]: _, ...rest } = prevQuantities;
      return rest;
    });
  };

  const handleQuantityChange = (uniqueId, newQuantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [uniqueId]: newQuantity,
    }));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleConfirmEdit();
    }
  };
  const handleCancelOrder = () => {
    setSelectedItems([])
    setItemQuantities({})
  };
  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center flex justify-between mb-8 items-center">
            <div className="flex items-center justify-center ">
              <h1 className="text-2xl font-bold ">Create order</h1>
            </div>
            <p className="text-center">ID: Ahmed Khaled</p>
          </div>

          <div className="mx-2">
            <div className="flex items-center ">
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
            </div>
            {selectedButton === "pastOrders" && (
              <div className="mt-6 p-4 ">
                <h2 className="text-xl font-bold">Badr's Past Orders</h2>
                <p>These are Badr's past orders...</p>
              </div>
            )}

            <div className="flex ">
              {selectedButton === "order" && (
                <div className="mt-6 ">
                  <div className="flex flex-col ">
                    <div className="flex ">
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
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {filteredItems().map((item) => (
                      <div
                        key={item.id}
                        className="p-2 cursor-pointer"
                        onClick={() => addItemToCheckout(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover"
                        />
                        <div className="text-center mt-2">
                          <h3 className="text-[1.1rem] font-medium">
                            {item.name}
                          </h3>
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
              <div className="bg-gray-200 rounded-md shadow  items-center">
                <div className="flex items-center justify-between p-3 bg-[#89937c54]">
                  <div className="flex flex-col">
                    <h2>Badr el Taher</h2>
                    <div className="flex items-center  space-x-2">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editedAddress}
                          onChange={(e) => setEditedAddress(e.target.value)}
                          className="border p-1 rounded"
                          onKeyDown={handleKeyDown}
                          ref={inputRef}
                        />
                      ) : (
                        <h2>{editedAddress}</h2>
                      )}
                      {isEditing ? (
                        <button
                          onClick={handleConfirmEdit}
                          className="bg-green-500 text-white rounded p-1"
                        >
                          Confirm
                        </button>
                      ) : (
                        <FontAwesomeIcon
                          icon={faPen}
                          className="text-xl ml-6 cursor-pointer"
                          onClick={handleEditClick}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {selectedItems.length > 0 && (
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
                )}

                {selectedItems.map((item) => (
                  <div
                    key={item.uniqueId}
                    className="flex items-center  justify-between"
                  >
                    <div className="flex mt-8 items-center ">
                      <h2>x{itemQuantities[item.uniqueId]}</h2>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[50px] ml-2"
                      />
                    </div>
                    <div className="mx-2">
                      <h2 className=" text-center">{item.name}</h2>
                      <Counter
                        value={itemQuantities[item.uniqueId]}
                        onChange={(newQuantity) =>
                          handleQuantityChange(item.uniqueId, newQuantity)
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2>
                        {(
                          item.price *
                          (itemQuantities[item.uniqueId] !== undefined
                            ? itemQuantities[item.uniqueId]
                            : itemQuantities[item.uniqueId])
                        ).toFixed(2)}{" "}
                        EGP
                      </h2>

                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-center cursor-pointer text-error"
                        onClick={() => removeItemFromCheckout(item.uniqueId)}
                      />
                    </div>
                  </div>
                ))}
                {selectedItems.length > 0 && (
                  <div>
                    <div className="border-t-[.1rem] border-[#283d3b41] mt-12"></div>

                    <div className="mt-4 flex justify-between items-center mx-2">
                      <div className="flex">
                        <h4 className="mr-2 text-[#4F5744] text-[1rem] font-medium">
                          Subtotal
                        </h4>
                        <h4>({selectedItems.length} items)</h4>{" "}
                      </div>
                      <h4 className="mr-2 text-[#4F5744] text-[1rem] font-medium">
                        {selectedItems
                          .reduce(
                            (total, item) =>
                              total +
                              (item.price * itemQuantities[item.uniqueId] || 1),
                            0
                          )
                          .toFixed(2)}{" "}
                        EGP
                      </h4>
                    </div>

                    <div className="mt-4 flex justify-between items-center mx-2">
                      <div className="flex">
                        <h4 className="mr-2 text-[#4F5744] text-[1rem] font-medium">
                          Delivery
                        </h4>
                      </div>
                      <h4 className="mr-2 text-[#4F5744] text-[1rem] font-medium">
                        30 EGP
                      </h4>
                    </div>

                    <div className="border-t-[.1rem] border-[#283d3b41] mt-4"></div>

                    <div className="mt-4 mb-4 flex justify-between items-center mx-2">
                      <div className="flex ">
                        <h4 className="mr-2 text-[#4F5744] text-[1.1rem] font-bold">
                          Total
                        </h4>
                      </div>
                      <h4 className="mr-2 text-[#4F5744] text-[1.1rem] font-bold">
                        {(
                          selectedItems.reduce(
                            (total, item) =>
                              total +
                              (item.price * itemQuantities[item.uniqueId] || 1),
                            0
                          ) + 30
                        ).toFixed(2)}{" "}
                        EGP
                      </h4>
                    </div>
                  </div>
                )}
                {selectedItems.length > 0 && (
                  <>
                    <div className="flex justify-between items-center mt-9">
                      <div className="flex items-center">
                        <button
                          className=" bg-[#FF934F] text-wh rounded px-[1.3rem] py-[.5rem] ml-2 text-[1rem] font-semibold"
                          // onClick={handleSubmitOrder}
                        >
                          Pay
                        </button>
                        <button
                          className="  bg-wh text-primary rounded px-[1.3rem] py-[.5rem] ml-2 text-[1rem] font-semibold"
                          // onClick={handleSubmitOrder}
                        >
                          Void
                        </button>
                      </div>

                      <div>
                        <button
                          className=" text-error p-2 ml-2  text-[1rem] font-semibold"
                          onClick={handleCancelOrder}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
