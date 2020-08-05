import React, { useState } from "react";

const MoodToggler = (props) => {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return <h3 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>;
};

export default MoodToggler;
