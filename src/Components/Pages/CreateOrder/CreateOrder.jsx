import { useState, useEffect } from "react";

function CreateOrder() {
  const [selectedButton, setSelectedButton] = useState("order");
  const [selectedMenu, setSelectedMenu] = useState("all");

  useEffect(() => {
    setSelectedButton("order");
  }, []);

  return (
    <>
      <div className="bg-[#F3F3F3] min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Create order</h1>
            <p className="mb-4">ID: Ahmed Khaled.</p>
          </div>
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

          {selectedButton === "order" && (
            <div className="mt-6">
              <div className="flex   flex-col">
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
                <div className=" ml-[15rem]  mt-8">
                  {selectedMenu && <p>You selected: {selectedMenu}</p>}
                </div>
              </div>
            </div>
          )}

          {selectedButton === "pastOrders" && (
            <div className="mt-6 p-4  ">
              <h2 className="text-xl font-bold">Badr's Past Orders</h2>
              <p>These are Badr's past orders...</p>
            </div>
          )}
          {selectedButton === "points" && (
            <div className="mt-6 p-4  ">
              <h2 className="text-xl font-bold">Badr's Points</h2>
              <p>Here are Badr's points...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateOrder;
