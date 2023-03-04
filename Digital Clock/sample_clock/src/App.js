import NumberFormat from "react-number-format";

export default function App() {
  const MAX_VAL = 1400;
  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= MAX_VAL) return true;
    return false;
  };
  return (
    <>
      <label> Field with value limit to 1400 </label> <br />
      <NumberFormat value={12} isAllowed={withValueCap} />
    </>
  );
}
