import EmptyState from "../components/EmptyState";

type pageProps = {};

const Users: React.FC<pageProps> = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full"> <EmptyState/> </div>
  )
};
export default Users;
