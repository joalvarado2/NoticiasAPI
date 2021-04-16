import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, updateState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select 
        className="browser-default" 
        value={state}
        onChange={e => updateState(e.target.value)}
    >
      {opciones.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
