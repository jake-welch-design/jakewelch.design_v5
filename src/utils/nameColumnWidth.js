import projectData from '@/data/projects.js';
import toolData from '@/data/tools.js';

// The projects and tools tables are separate <table> elements with
// table-layout: fixed, so neither CSS nor the browser can size their NAME
// columns to the content or keep the two in agreement. Instead we measure the
// widest name across both data sets and publish it as a custom property that
// both tables read.
const CSS_VAR = '--name-col-width';

function measureWidestName() {
  // Take the font from a real name cell so the measurement follows whatever
  // the current breakpoint applies.
  const cell = document.querySelector('.project-row td');
  if (!cell) return null;

  const styles = getComputedStyle(cell);

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

  let widest = 0;
  for (const { name } of [...projectData, ...toolData]) {
    // Tool names carry markup (the ↳ prefix and a link), so measure as HTML.
    ruler.innerHTML = name;
    widest = Math.max(widest, ruler.getBoundingClientRect().width);
  }

  ruler.remove();

  const chrome =
    parseFloat(styles.paddingLeft) +
    parseFloat(styles.paddingRight) +
    parseFloat(styles.borderLeftWidth) +
    parseFloat(styles.borderRightWidth);

  // A pixel of slack, so sub-pixel differences between this measurement and
  // layout can't tip the longest name onto a second line.
  const SLACK = 1;

  // Cap at half the table so a long name can never crowd out DESCRIPTION.
  // This is done here rather than with a CSS min(), which fixed table layout
  // ignores when the arguments mix pixels and percentages.
  const table = cell.closest('table');
  const cap = table ? table.getBoundingClientRect().width / 2 : Infinity;

  return Math.ceil(Math.min(widest + chrome + SLACK, cap));
}

export function updateNameColumnWidth() {
  const width = measureWidestName();
  if (width) {
    document.documentElement.style.setProperty(CSS_VAR, `${width}px`);
  }
}

export function watchNameColumnWidth() {
  updateNameColumnWidth();

  // Web fonts land after first paint and change the metrics.
  if (document.fonts?.ready) {
    document.fonts.ready.then(updateNameColumnWidth);
  }

  // The font size changes at the 600px breakpoint, so re-measure on resize.
  let frame = null;
  const onResize = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateNameColumnWidth);
  };
  window.addEventListener('resize', onResize);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('resize', onResize);
  };
}
