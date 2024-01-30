import { useCallback, useState } from "react";
import { getFromAndToRange } from "src/helpers/apiHelpers";

function usePagination(step, cb) {
  const [page, setPage] = useState(0);
  const { from, to } = getFromAndToRange(page, step);
  console.log(from, to, page);
  const [f, options] = cb();

  const trigger = useCallback(async () => {
    setPage((prevState) => prevState + 1);
    return f({ from, to });
  }, [f, from, to]);

  return [trigger, options, page];
}
export default usePagination;
