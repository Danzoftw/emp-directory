export const maxLengthCheck = (
  object: any,
  min: number,
  max: number,
  setNumValue: any,
  setAge: any
) => {
  const value = Math.max(min, Math.min(max, Number(object.target.value)));
  setNumValue(value);
  setAge(value);
};
