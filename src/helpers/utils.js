// import { s } from "dompurify";

import DOMPurify from "dompurify";

export const createMarkup = (dirty) => {
  return { __html: DOMPurify.sanitize(dirty) };
};
