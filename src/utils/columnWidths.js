import projectData from '@/data/projects.js';
import toolData from '@/data/tools.js';

// The projects and tools tables are separate <table> elements with
// table-layout: fixed, so neither CSS nor the browser can size a column to its
// content or keep the two tables in agreement. Instead we measure the widest
// value across both data sets and publish it as a custom property that both
// tables read.
const COLUMNS = [
  // NAME is only sized this way on mobile, where YEAR and TYPE are hidden. It
  // is capped at half the table so a long name can't crowd out DESCRIPTION.
  { heading: 'NAME', field: 'name', cssVar: '--name-col-width', capped: true },
  // YEAR holds four digits, so it just hugs them.
  { heading: 'YEAR', field: 'date', cssVar: '--year-col-width' },
];

// A pixel of slack, so sub-pixel differences between this measurement and
// layout can't tip the widest value onto a second line.
const SLACK = 1;

// Takes the font from a real cell, so the measurement follows whatever the
// current breakpoint applies.
function createRuler(styles) {
  const ruler = document.createElement('span');
  ruler.style.position = 'absolute';
  ruler.style.top = '-9999px';
  ruler.style.left = '-9999px';
  ruler.style.visibility = 'hidden';
  ruler.style.whiteSpace = 'nowrap';
  ruler.style.fontFamily = styles.fontFamily;
  ruler.style.fontSize = styles.fontSize;
  ruler.style.fontWeight = styles.fontWeight;
  ruler.style.fontStyle = styles.fontStyle;
  ruler.style.letterSpacing = styles.letterSpacing;
  document.body.appendChild(ruler);
  return ruler;
}

// Tool names carry markup (the ↳ prefix and a link), so measure as HTML.
function textWidth(ruler, html) {
  ruler.innerHTML = html ?? '';
  return ruler.getBoundingClientRect().width;
}

function chromeWidth(styles) {
  return (
    parseFloat(styles.paddingLeft) +
    parseFloat(styles.paddingRight) +
    parseFloat(styles.borderLeftWidth) +
    parseFloat(styles.borderRightWidth)
  );
}

export function updateColumnWidths() {
  const cell = document.querySelector('.project-row td');
  const heading = document.querySelector('th');
  if (!cell || !heading) return;

  // Headings are set in a larger, bolder face than the cells, so a column has
  // to be measured against both to hold its content on one line.
  const cellStyles = getComputedStyle(cell);
  const headingStyles = getComputedStyle(heading);
  const cellRuler = createRuler(cellStyles);
  const headingRuler = createRuler(headingStyles);
  const cellChrome = chromeWidth(cellStyles);
  const headingChrome = chromeWidth(headingStyles);

  // Cap at half the table. This is done here rather than with a CSS min(),
  // which fixed table layout ignores when the arguments mix pixels and
  // percentages.
  const table = cell.closest('table');
  const cap = table ? table.getBoundingClientRect().width / 2 : Infinity;

  const rows = [...projectData, ...toolData];

  for (const { heading: label, field, cssVar, capped } of COLUMNS) {
    let widest = textWidth(headingRuler, label) + headingChrome;
    for (const row of rows) {
      widest = Math.max(widest, textWidth(cellRuler, row[field]) + cellChrome);
    }

    const width = Math.ceil(Math.min(widest + SLACK, capped ? cap : Infinity));
    document.documentElement.style.setProperty(cssVar, `${width}px`);
  }

  cellRuler.remove();
  headingRuler.remove();
}

export function watchColumnWidths() {
  updateColumnWidths();

  // Web fonts land after first paint and change the metrics.
  if (document.fonts?.ready) {
    document.fonts.ready.then(updateColumnWidths);
  }

  // The font size changes at the 600px breakpoint, so re-measure on resize.
  let frame = null;
  const onResize = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateColumnWidths);
  };
  window.addEventListener('resize', onResize);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('resize', onResize);
  };
}
