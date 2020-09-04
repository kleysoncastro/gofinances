import { deflate } from 'zlib';

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'brl' }).format(
    value,
  );

export default formatValue;
