// The navbar sticks to the top of the window and the footer to the bottom, so
// an expanded row only ever has the space between them to work with. Capping
// the panel at exactly that leftover — less the row that was clicked and the
// row that follows it — lets a long project fill the window with the next row
// sitting on top of the footer, while a short one still keeps to its content.
const CSS_VAR = '--expanded-row-height';

// Matches the gap the section components leave below the navbar when they
// scroll a freshly expanded row into place.
const SCROLL_OFFSET = 10;

// A short window (a phone in landscape) would otherwise leave the panel with
// nothing, or a negative amount, to fill. Below this it just scrolls again.
const MIN_HEIGHT = 220;

function stickyHeight(selector) {
  return document.querySelector(selector)?.offsetHeight || 0;
}

export function fitExpandedRow(table) {
  const row = table?.querySelector('.expandable-row');
  const content = row?.querySelector('.expanded-content');
  if (!content) return;

  // The rows either side of the panel: the clicked one holds its place under
  // the navbar, the one after it is what should land above the footer. The
  // last row of a table has nothing after it, so the panel runs to the footer.
  const clickedRow = row.previousElementSibling;
  const nextRow = row.nextElementSibling;
  const rowHeight = (el) => el?.getBoundingClientRect().height || 0;

  // Border and padding around the panel, measured rather than assumed so the
  // arithmetic survives a change to the cell's styling.
  const chrome = rowHeight(row) - rowHeight(content);

  const available =
    window.innerHeight -
    stickyHeight('.navbar-container') -
    stickyHeight('.footer-container') -
    rowHeight(clickedRow) -
    rowHeight(nextRow) -
    chrome -
    SCROLL_OFFSET;

  content.style.setProperty(
    CSS_VAR,
    `${Math.max(Math.round(available), MIN_HEIGHT)}px`
  );
}

export function watchExpandedRow(getTable) {
  let frame = null;

  const onResize = () => {
    if (frame) cancelAnimationFrame(frame);
    // Two frames: the NAME column is re-measured on the first one, and that
    // changes the row heights this measurement reads.
    frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => fitExpandedRow(getTable()))
    );
  };

  window.addEventListener('resize', onResize);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    window.removeEventListener('resize', onResize);
  };
}
