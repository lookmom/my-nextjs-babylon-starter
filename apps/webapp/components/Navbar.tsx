import {
  Collapse,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar as BsNavbar,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <BsNavbar color="dark" expand="md" dark className={className}>
      {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </BsNavbar>
  );
};
export default Navbar;
