import React, {useState} from 'react';

const useFlip = () => {
    const [state, useState] = useState();
    return [state, useState];
}

export default useFlip;