import React from "react";

const SvgErrorStatus = props => (
  <svg viewBox="0 0 16 16" fill="#212C42" width="1em" height="1em" {...props}>
    <g fillRule="evenodd">
      <path fill="none" d="M0 0h16v16H0z" />
      <path
        d="M14.36 13l1.36 1.36a.964.964 0 0 1 0 1.36.966.966 0 0 1-1.36 0L13 14.36l-1.36 1.36a.966.966 0 0 1-1.36 0 .964.964 0 0 1 0-1.36L11.64 13l-1.36-1.36a.964.964 0 0 1 0-1.36.966.966 0 0 1 1.36 0L13 11.64l1.36-1.36a.966.966 0 0 1 1.36 0 .964.964 0 0 1 0 1.36L14.36 13zM6 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H6zm0 12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2v12h4zM5 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H5zm9-5v6a1 1 0 1 1-2 0V2h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1z"
      />
    </g>
  </svg>
);

export default SvgErrorStatus;
