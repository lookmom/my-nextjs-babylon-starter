import { Container } from 'reactstrap';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <article className="layout">
      <Sidebar />
      <Container fluid tag="section" className="main-wrapper">
        <Navbar className="mb-3" />
        <main className="main">{children}</main>
      </Container>
    </article>
  );
};

export default Layout;
