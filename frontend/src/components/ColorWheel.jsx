const ColorWheel = () => {
  return (
    <svg viewBox="0 0 64 64" className="pie">
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "orange",
          strokeDashoffset: -1,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "skyblue",
          strokeDashoffset: 12.5,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "gray",
          strokeDashoffset: 25,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-black hover:stroke-black/50 focus:stroke-black/50"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 37.5,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-yellow-300 hover:stroke-yellow-200 hover:brightness-125 focus:stroke-yellow-200 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 50,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-blue-700 hover:stroke-blue-600 hover:brightness-125 focus:stroke-blue-600 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 62.5,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer stroke-red-600 hover:stroke-red-500 hover:brightness-125 focus:stroke-red-500 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          strokeDashoffset: 75,
        }}
      ></circle>
      <circle
        r="25%"
        cx="50%"
        cy="50%"
        className="cursor-pointer hover:brightness-125 focus:brightness-125"
        style={{
          strokeDasharray: "100 100",
          stroke: "green",
          strokeDashoffset: 87.5,
        }}
      ></circle>
    </svg>
  );
};

export default ColorWheel;
