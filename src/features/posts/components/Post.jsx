import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery } from "src/api";

function Post() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchPostByIdQuery(id);
  const post = (data && data[0]) || {};
  console.log(post);
  return <div>Post id: {id}</div>;
}
export default Post;
