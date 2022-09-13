import { v4 as uuidv4 } from 'uuid';

import { mattresses } from '../data/mattresses.json';

const TIME_OUT = 1000;

const data = Object.values(mattresses).map((item) => ({
  ...item,
  id: uuidv4(),
}));
export const getMattresses = () =>
  new Promise((resolve) => setTimeout(() => resolve(data), TIME_OUT));
