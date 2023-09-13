type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(
  items: T[],
  id: string
): number => items.findIndex((item) => item.id === id);

export const moveItem = <T>(items: T[], from: number, to: number): T[] => {
  const item = items[from];
  return insertItemAtIndex(removeItemAtIndex(items, from), item, to);
};

export const insertItemAtIndex = <T>(
  items: T[],
  item: T,
  index: number
): T[] => [...items.slice(0, index), item, ...items.slice(index)];

export const removeItemAtIndex = <T>(items: T[], index: number): T[] => [
  ...items.slice(0, index),
  ...items.slice(index + 1),
];
