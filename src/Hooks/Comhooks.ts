import { useBetween } from "use-between";
import { useState } from "react";
const useFormState = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return {
    isToggled,
    setIsToggled,
  };
};
const useSharedFormState = () => useBetween(useFormState);
export default useSharedFormState;
