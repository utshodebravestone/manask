type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(
  items: T[],
  id: string
): number => items.findIndex((item) => item.id === id);
