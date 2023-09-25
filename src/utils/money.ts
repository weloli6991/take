export const convertToMoney = (v: any) => {
  if (v) {
    v = `${v}`;
    if (typeof v === "number") {
      v = parseFloat(`${v}`).toFixed(2);
    } else {
      if (v.indexOf(",") === -1) {
        v = v + ",00";
      }
      v = `${v}`.replace(/\D/g, "");
    }
    if (v) {
      if (v.length === 1) {
        v = `0.0${v}`;
      } else {
        v = v?.substring(0, v.length - 2) + "." + v?.substring(v.length - 2);
      }
      return parseFloat(v);
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};
