// import { s } from "dompurify";

import DOMPurify from "dompurify";

export const createMarkup = (dirty) => {
  return { __html: DOMPurify.sanitize(dirty) };
};

export const isoIntoDate = (iso) => {
  const b = iso.split(/\D+/);
  const date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
