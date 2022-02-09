import { useState, useEffect, useRef } from "react";
export const useHook = () => {
    const  [isShown, setIsShown] = useState(false);

    return {isShown, setIsShown}
}
