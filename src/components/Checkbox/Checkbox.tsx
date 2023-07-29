import React from "react";

interface CheckboxProps { 
    label: string;

}

const Checkbox = ({label}: CheckboxProps ) => {
    return <div className="flex gap-2">
        <input type="checkbox"/>
        <h3 className="text-blue-600 normal text-base">
            {label}
        </h3>
  </div>;
};

export default Checkbox;
