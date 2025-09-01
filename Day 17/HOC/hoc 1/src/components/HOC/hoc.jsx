import { useState } from "react";

export const hoc = (WrappedComponents) => {

  //return new component
    return function EnhancedComponents(props) {

        let [count, setCount] = useState(0);

        let handleClickInc = () => {
            setCount(count + 1);
        };
        let handleClickDec = () => {
            setCount(count - 1);
        };

            return (
                <WrappedComponents {...props} count={count} handleClickInc={handleClickInc} handleClickDec={handleClickDec}></WrappedComponents>
            );

    };

};

// export default hoc
    