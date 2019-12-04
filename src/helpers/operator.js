export const sub = x => {
  return {
    label: `-${x}`,
    func: y => y - x
  };
};

export const div = x => {
  return {
    label: `/${x}`,
    func: y => Math.round(y / x)
  };
};

export const plus = x => {
  return {
    label: `+${x}`,
    func: y => y + x
  };
};

export const multi = x => {
  return {
    label: `+${x}`,
    func: y => y * x
  };
};
