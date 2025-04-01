const CoffeeSize = ({ coffeeSize, handleSizeChange }) => {
  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={(e) => handleSizeChange(e.target.value)}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={(e) => handleSizeChange(e.target.value)}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={(e) => handleSizeChange(e.target.value)}
        />
        Large
      </label>
    </>
  );
};

export default CoffeeSize;
