function CreateOrder() {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Order</h1>
      <p className="mb-4">Fill in the details to create your order.</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Submit Order
      </button>
    </div>
  );
}

export default CreateOrder;
