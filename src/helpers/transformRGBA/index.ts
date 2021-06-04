export const transformRGBA = (rgb: string, opacity: string | number) => {
  const value = rgb.match(/(\d+)/g);
  return `rgba(${value[0]},${value[1]},${value[2]},${opacity})`;
};
