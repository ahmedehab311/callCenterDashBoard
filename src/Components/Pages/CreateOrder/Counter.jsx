// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(1);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center  mt-1">
//       <button
//         className="bg-primary text-white px-[.7rem] py-[.1em] text-lg font-bold rounded focus:outline-none hover:bg-[#3B5452] mx-1"
//         onClick={handleDecrement}
//       >
//         -
//       </button>
//       <span className="text-[1.3rem] font-medium mx-1 ">{count}</span>
//       <button
//         className="bg-primary text-white px-[.7rem] py-[.1em] text-lg font-bold rounded focus:outline-none hover:bg-[#3B5452] mx-1"
//         onClick={handleIncrement}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default Counter;

import { useState } from "react";

const Counter = ({ value, onChange }) => {
  const [count, setCount] = useState(value || 1);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount); // تحديث العدد في المكوّن الأب
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) {
        onChange(newCount); // تحديث العدد في المكوّن الأب
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-1">
      <button
        className="bg-primary text-white px-[.7rem] py-[.1em] text-lg font-bold rounded focus:outline-none hover:bg-[#3B5452] mx-1"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-[1.3rem] font-medium mx-1">{count}</span>
      <button
        className="bg-primary text-white px-[.7rem] py-[.1em] text-lg font-bold rounded focus:outline-none hover:bg-[#3B5452] mx-1"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
