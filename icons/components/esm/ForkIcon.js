import * as React from "react";

function ForkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 35 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M1 10.49v19L17.47 39l16.45-9.5V10.49L17.47 1 1 10.49Z",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.47 32.25a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM9.1 17.35a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM25.89 17.35a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.8 16.73 5.67 3.26 6.32-3.65M17.47 20v6.86",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(ForkIcon);
export default ForwardRef;