/* eslint-disable react/prop-types */

function NewUser({ newCustomerData, setNewCustomerData, handlePopupSubmit }) {

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Add New Customer & Address</h3>
      <input
        type="text"
        value={newCustomerData.name}
        onChange={(e) =>
          setNewCustomerData({ ...newCustomerData, name: e.target.value })
        }
        className="border rounded p-2 w-full mb-2"
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={newCustomerData.number}
        onChange={(e) =>
          setNewCustomerData({ ...newCustomerData, number: e.target.value })
        }
        className="border rounded p-2 w-full mb-2"
        placeholder="Enter Number"
      />
      <input
        type="text"
        value={newCustomerData.place}
        onChange={(e) =>
          setNewCustomerData({ ...newCustomerData, place: e.target.value })
        }
        className="border rounded p-2 w-full mb-2"
        placeholder="Enter Place"
      />
      <input
        type="text"
        value={newCustomerData.address}
        onChange={(e) =>
          setNewCustomerData({ ...newCustomerData, address: e.target.value })
        }
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
  );
}

export default NewUser;
