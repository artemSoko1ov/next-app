import './UsersPage.scss';
import { UserList } from '@/widgets/UsersListWidget';
import ColorBends from '@/pages/home/model/colorBends';

const UsersPage = () => (
  <div className="">
    <div className="users__content">
      <UserList />
    </div>
  </div>
);

export default UsersPage;
