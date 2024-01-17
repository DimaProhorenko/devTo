import { useGetUserByIdQuery } from "src/api";

function PostCreator() {
  const { data } = useGetUserByIdQuery("bd57cc48-8a7a-4b8e-b19b-c675265a7e28");

  // console.log(data);
  return <div>PostCreator</div>;
}
export default PostCreator;
