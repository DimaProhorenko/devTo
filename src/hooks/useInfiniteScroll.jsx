import { useEffect, useState } from "react";
import usePagination from "./usePagination";
import { POSTS_PER_PAGE } from "src/constants/db";

function useInfiniteScroll(queryFn) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [fetchPosts, { data, isFetching }, page] = usePagination(
    POSTS_PER_PAGE,
    queryFn,
  );

  const nextFn = async () => {
    fetchPosts().then(({ data }) => {
      setItems((prevState) => [...prevState, ...data]);
      if (data.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }
    });
  };

  useEffect(() => {
    nextFn();
  }, []);

  return { items, hasMore, next: nextFn, page };
}
export default useInfiniteScroll;
