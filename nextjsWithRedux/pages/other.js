import Page from "../components/Page";
import { addUser } from "../store/usersSlice";
import { wrapper } from "../store/store";
import { increment } from "../store/counterSlice";

const Other = () => <Page title="Other Page" linkTo="/" />;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  // const response = await fetch(`https://regres.in/api/users/2`);

  const { data } = response;

  // store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
  store.dispatch(increment());
});

export default Other;
