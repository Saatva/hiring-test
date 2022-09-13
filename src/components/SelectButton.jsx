import React, { useCallback } from 'react';

import { Flex, Button } from './styled';

const SelectButton = ({ items, selectedItem, onChange }) => {
  const handleOnClick = useCallback(
    (e) => onChange(e.target.value),
    [onChange]
  );

  return (
    <Flex fullWidth>
      {items?.map(({ text, id }) => (
        <Button
          key={id}
          variant={selectedItem === id ? 'secondary' : 'ternary'}
          onClick={handleOnClick}
          value={id}
          fullWidth
        >
          {text}
        </Button>
      ))}
    </Flex>
  );
};

export default SelectButton;
