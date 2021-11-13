import debugGridOverlay from "debug-grid-overlay";

if (process.env.NODE_ENV === "development") {
  const debugGrid = debugGridOverlay({
    columns: 24,
    columnWidth: "2fr",
    gutterWidth: "16px",
    maxWidth: "1344px",
    /*  marginsWidth: 'px' */
    /*   verticalRythm: '', */
    /*   keyCode: 71, */
  });

  debugGrid.on("toggled", (visible) => {
    document.body.style.position = visible ? "relative" : null;
    document.body.classList.toggle("debug-mode", visible);
  });
}
