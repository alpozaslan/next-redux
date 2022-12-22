import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import { Link, useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const { data: postsForUser, isLoading, isSuccess, isError, error } = useGetPostsByUserIdQuery(Number(userId));

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((postId) => (
      <li key={postId}>
        <Link to={`/post/${postId}`}>{entities[postId].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{content}</ol>
    </section>
  );
};

export default UserPage;
