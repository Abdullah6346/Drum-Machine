import useSharedFormState from "../Hooks/Comhooks";
export default function ToggleButton() {
  const { isToggled, setIsToggled } = useSharedFormState();

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleChange}
      className={`toggle-button ${isToggled ? "on" : "off"}`}
    >
      {isToggled ? "ON" : "OFF"}
    </button>
  );
}
