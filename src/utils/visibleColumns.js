import { computed, ref } from 'vue';

// Below the breakpoint the section tables hide their YEAR and TYPE columns,
// leaving NAME and DESCRIPTION. An expanded row's single cell has to span
// exactly the columns that are left: a colspan wider than the table makes the
// table model invent the missing columns, and table-layout: fixed then shares
// the row's width out between them, squeezing the two real columns into the
// left half of the screen.
const MOBILE_QUERY = '(max-width: 600px)';
const FULL_COLUMNS = 4;
const MOBILE_COLUMNS = 2;

const query = window.matchMedia(MOBILE_QUERY);
const isMobile = ref(query.matches);
query.addEventListener('change', (event) => {
  isMobile.value = event.matches;
});

export const visibleColumnCount = computed(() =>
  isMobile.value ? MOBILE_COLUMNS : FULL_COLUMNS
);
