import React from "react";

export const registerStyle = (bgImg: string) => {
  return {
    maxWidth: "390px",
    // height: "720px",
    backgroundImage: `url(${bgImg})`,
    margin: "20px auto",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Inter",
  };
};

export const inputStyle = (text: string, border: boolean) => {
  return {
    width: "300px",
    height: "35px",
    flexShrink: 0,
    border: border ? "1px solid #008FA0" : "none",
    borderRadius: text === "register" ? "none" : "20px",
    borderBottom: "1px solid #008FA0",
    background: "none",
    marginTop: "5px",
    marginBottom: "5px",
    padding: text === "register" ? "0px" : "10px 10px",
    color: "#1E1E1E",
    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
};

export const greenButtonStyle = (bgColor: string) => {
  return {
    width: "317px",
    height: "44px",
    flexShrink: 0,
    borderRadius: "20px",
    backgroundColor: bgColor || "transparent",
    color: bgColor ? "#fff" : "#008FA0",
    fontFamily: "Inter",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    border: bgColor ? "none" : `1px solid #008FA0`,
    marginTop: "10px",
    cursor: "pointer",
  };
};

export const spanStyle = (color: string, weight: number) => {
  return {
    color: color,
    fontFamily: "Inter",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: weight,
    lineHeight: "normal",
  };
};

export const labelStyle = {
  color: "#585858",
  fontFamily: "Inter",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  paddingTop: "10px",
};

export const topTextStyle = (color: string, weight: number) => {
  return {
    color: color,
    fontFamily: "Inter",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: weight,
    lineHeight: "normal",
  };
};

export const navigationIconsStyles = () => {
  return {
    width: "390px",
    height: "61px",
    flexShrink: 0,
    borderTop: "1px solid #D9D9D9",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    position: "fixed",
    bottom: 0,
  } as React.CSSProperties;
};

export const textStyle = (fontSize: string, color: string, weight: number) => {
  return {
    color: color,
    fontFamily: "Inter",
    fontSize: fontSize,
    fontStyle: "normal",
    fontWeight: weight,
    lineHeight: "normal",
  } as React.CSSProperties;
};

export const searchInputStyle = {
  width: "296.72px",
  height: "45px",
  flexShrink: 0,
  borderRadius: "20px",
  border: "1px solid #E9E9E9",
  background: "#FFF",
} as React.CSSProperties;

export const toggleStyle = {
  width: "43px",
  height: "45px",
  flexShrink: 0,
  borderRadius: "10px",
  background: "#008FA0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "5px",
} as React.CSSProperties;

export const categoryStyle = () => {
  return {
    width: "97.778px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "26.667px",
    border: "0.889px solid #008FA0",
    background: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "10px",
  } as React.CSSProperties;
};

export const tripStyle = () => {
  return {
    width: "150px",
    height: "250px",
    flexShrink: 0,
    background: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties;
};

export const tripImg = {
  width: "141px",
  height: "110.511px",
  flexShrink: 0,
  borderRadius: "20px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
  margin: "5px auto",
} as React.CSSProperties;

export const detailedStyle = (image: string | undefined) => {
  return {
    backgroundImage: `url(${image})`,
    width: "344px",
    height: "300px",
    flexShrink: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 10,
    display: "flex",
    alignItems: "end",
    overflowX: "scroll",
    boxShadow:
      "0px 9.953792572021484px 9.953792572021484px 0px rgba(0, 0, 0, 0.15)",
  } as React.CSSProperties;
};

export const tripImages = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

  img: {
    width: "58.784px",
    height: "58px",
    flexShrink: 0,
    borderRadius: "20px",
    border: "3px solid #FFF",
  },
};

export const topTrips = {
  width: "342px",
  // height: "133px",
  flexShrink: 0,
  borderRadius: "20px",
  background: "#FFF",
  display: "flex",
  margin: 2,
  alignItems: "center",
  gap: 5,

  img: {
    width: "141px",
    height: "126px",
    flexShrink: 0,
    borderRadius: "15px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
  },

  div1: {} as React.CSSProperties,

  div2: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  } as React.CSSProperties,

  icon: {
    width: "8.762px",
    height: "11.205px",
  },

  people: (idx: number) => {
    return {
      width: "14px",
      height: "14px",
      borderRadius: "14px",
      border: "0.28px solid #FFF",
      marginLeft: idx !== 0 && "-10px",
    } as React.CSSProperties;
  },

  progressBar: (width: string, bgColor: string) => {
    return {
      width: width,
      height: "6px",
      background: bgColor,
      borderRadius: 100,
    } as React.CSSProperties;
  },
};

export const LocationStyles = {
  top: {
    display: "flex",
  },
  trans: (idx: number) => {
    return {
      width: idx === 0 ? "20px" : "10px",
      height: "6px",
      background: idx === 0 ? "#008FA0" : "#AFAFAF",
      borderRadius: 5,
    } as React.CSSProperties;
  },

  bg: (img: string) => {
    return {
      backgroundImage: `url(${img})`,
      // width: "344px",
      height: "300px",
      flexShrink: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: 10,
      marginTop: "10px",
      padding: "10px",
    } as React.CSSProperties;
  },

  send: {
    width: "81px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "20px",
    background: "linear-gradient(113deg, #008FA0 0%, #00CFCD 100%)",
    boxShadow: "0px 4px 10px 0px rgba(0, 143, 160, 0.30)",
    display: "flex",
  } as React.CSSProperties,
};
