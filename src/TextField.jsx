import React from 'react';

export default function TextField({
  label, type = 'text', name, inputValue, onChange,
}) {
  const id = `review-${name}`;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
