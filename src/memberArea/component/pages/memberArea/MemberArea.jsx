// import TopMember from '../template/TopMember.jsx'
// import SidebarMember from '../template/SidebarMember.jsx'
// import FootMember from '../template/FootMember.jsx'

const MemberArea = () => {
  return (
    

<div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
  {/* ============================================================== */}
  {/* Topbar header - style you can find in pages.scss */}
  {/* ============================================================== */}
  <header className="topbar" data-navbarbg="skin6">
    <nav className="navbar top-navbar navbar-expand-lg">
      <div className="navbar-header" data-logobg="skin6">
        {/* This is for the sidebar toggle which is visible on mobile only */}
        <a className="nav-toggler waves-effect waves-light d-block d-lg-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
        {/* ============================================================== */}
        {/* Logo */}
        {/* ============================================================== */}
        <div className="navbar-brand">
          {/* Logo icon */}
          <a href="index.html">
            <img src=".././src/memberArea/assets/images/freedashDark.svg" alt className="img-fluid" />
          </a>
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Toggle which is visible on mobile only */}
        {/* ============================================================== */}
        <a className="topbartoggler d-block d-lg-none waves-effect waves-light" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
      </div>
      {/* ============================================================== */}
      {/* End Logo */}
      {/* ============================================================== */}
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        {/* ============================================================== */}
        {/* toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav float-left me-auto ms-3 ps-1">
          {/* Notification */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)" id="bell" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span><i data-feather="bell" className="svg-icon" /></span>
              <span className="badge text-bg-primary notify-no rounded-circle">5</span>
            </a>
            <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
              <ul className="list-style-none">
                <li>
                  <div className="message-center notifications position-relative">
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <div className="btn btn-danger rounded-circle btn-circle"><i data-feather="airplay" className="text-white" /></div>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                        <span className="font-12 text-nowrap d-block text-muted">Just see
                          the my new
                          admin!</span>
                        <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-success text-white rounded-circle btn-circle"><i data-feather="calendar" className="text-white" /></span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h6 className="message-title mb-0 mt-1">Event today</h6>
                        <span className="font-12 text-nowrap d-block text-muted text-truncate">Just
                          a reminder that you have event</span>
                        <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-info rounded-circle btn-circle"><i data-feather="settings" className="text-white" /></span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h6 className="message-title mb-0 mt-1">Settings</h6>
                        <span className="font-12 text-nowrap d-block text-muted text-truncate">You
                          can customize this template
                          as you want</span>
                        <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-primary rounded-circle btn-circle"><i data-feather="box" className="text-white" /></span>
                      <div className="w-75 d-inline-block v-middle ps-2">
                        <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span className="font-12 text-nowrap d-block text-muted">Just
                          see the my admin!</span>
                        <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="nav-link pt-3 text-center text-dark" href="javascript:void(0);">
                    <strong>Check all notifications</strong>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* End Notification */}
          {/* ============================================================== */}
          {/* create new */}
          {/* ============================================================== */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i data-feather="settings" className="svg-icon" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="javascript:void(0)">
              <div className="customize-input">
                <select className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                  <option selected>EN</option>
                  <option value={1}>AB</option>
                  <option value={2}>AK</option>
                  <option value={3}>BE</option>
                </select>
              </div>
            </a>
          </li>
        </ul>
        {/* ============================================================== */}
        {/* Right side toggle and nav items */}
        {/* ============================================================== */}
        <ul className="navbar-nav float-end">
          {/* ============================================================== */}
          {/* Search */}
          {/* ============================================================== */}
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="javascript:void(0)">
              <form>
                <div className="customize-input">
                  <input className="form-control custom-shadow custom-radius border-0 bg-white" type="search" placeholder="Search" aria-label="Search" />
                  <i className="form-control-icon" data-feather="search" />
                </div>
              </form>
            </a>
          </li>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src=".././src/memberArea/assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle" width={40} />
              <span className="ms-2 d-none d-lg-inline-block"><span>Hello,</span> <span className="text-dark">Jason Doe</span> <i data-feather="chevron-down" className="svg-icon" /></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-right user-dd animated flipInY">
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="user" className="svg-icon me-2 ms-1" />
                My Profile</a>
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card" className="svg-icon me-2 ms-1" />
                My Balance</a>
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="mail" className="svg-icon me-2 ms-1" />
                Inbox</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="settings" className="svg-icon me-2 ms-1" />
                Account Setting</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="javascript:void(0)"><i data-feather="power" className="svg-icon me-2 ms-1" />
                Logout</a>
              <div className="dropdown-divider" />
              <div className="pl-4 p-3"><a href="javascript:void(0)" className="btn btn-sm btn-info">View
                  Profile</a></div>
            </div>
          </li>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
        </ul>
      </div>
    </nav>
  </header>
  {/* ============================================================== */}
  {/* End Topbar header */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Left Sidebar - style you can find in sidebar.scss  */}
  {/* ============================================================== */}
  <aside className="left-sidebar" data-sidebarbg="skin6">
    {/* Sidebar scroll*/}
    <div className="scroll-sidebar" data-sidebarbg="skin6">
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav">
        <ul id="sidebarnav">
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="index.html" aria-expanded="false"><i data-feather="home" className="feather-icon" /><span className="hide-menu">Dashboard</span></a></li>
          <li className="list-divider" />
          <li className="nav-small-cap"><span className="hide-menu">Applications</span></li>
          <li className="sidebar-item"> <a className="sidebar-link" href="ticket-list.html" aria-expanded="false"><i data-feather="tag" className="feather-icon" /><span className="hide-menu">Ticket List
              </span></a>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="app-chat.html" aria-expanded="false"><i data-feather="message-square" className="feather-icon" /><span className="hide-menu">Chat</span></a></li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="app-calendar.html" aria-expanded="false"><i data-feather="calendar" className="feather-icon" /><span className="hide-menu">Calendar</span></a></li>
          <li className="list-divider" />
          <li className="nav-small-cap"><span className="hide-menu">Components</span></li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="file-text" className="feather-icon" /><span className="hide-menu">Forms </span></a>
            <ul aria-expanded="false" className="collapse  first-level base-level-line">
              <li className="sidebar-item"><a href="form-inputs.html" className="sidebar-link"><span className="hide-menu"> Form Inputs
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="form-input-grid.html" className="sidebar-link"><span className="hide-menu"> Form Grids
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="form-checkbox-radio.html" className="sidebar-link"><span className="hide-menu"> Checkboxes &amp;
                    Radios
                  </span></a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="grid" className="feather-icon" /><span className="hide-menu">Tables </span></a>
            <ul aria-expanded="false" className="collapse  first-level base-level-line">
              <li className="sidebar-item"><a href="table-basic.html" className="sidebar-link"><span className="hide-menu"> Basic Table
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="table-dark-basic.html" className="sidebar-link"><span className="hide-menu"> Dark Basic Table
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="table-sizing.html" className="sidebar-link"><span className="hide-menu">
                    Sizing Table
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="table-layout-coloured.html" className="sidebar-link"><span className="hide-menu">
                    Coloured
                    Table Layout
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="table-datatable-basic.html" className="sidebar-link"><span className="hide-menu">
                    Basic
                    Datatables
                    Layout
                  </span></a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="bar-chart" className="feather-icon" /><span className="hide-menu">Charts </span></a>
            <ul aria-expanded="false" className="collapse  first-level base-level-line">
              <li className="sidebar-item"><a href="chart-morris.html" className="sidebar-link"><span className="hide-menu"> Morris Chart
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="chart-chart-js.html" className="sidebar-link"><span className="hide-menu"> ChartJs
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="chart-knob.html" className="sidebar-link"><span className="hide-menu">
                    Knob Chart
                  </span></a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="box" className="feather-icon" /><span className="hide-menu">UI Elements </span></a>
            <ul aria-expanded="false" className="collapse  first-level base-level-line">
              <li className="sidebar-item"><a href="ui-buttons.html" className="sidebar-link"><span className="hide-menu"> Buttons
                  </span></a>
              </li>
              <li className="sidebar-item"><a href="ui-modals.html" className="sidebar-link"><span className="hide-menu"> Modals </span></a>
              </li>
              <li className="sidebar-item"><a href="ui-tab.html" className="sidebar-link"><span className="hide-menu"> Tabs </span></a></li>
              <li className="sidebar-item"><a href="ui-tooltip-popover.html" className="sidebar-link"><span className="hide-menu"> Tooltip &amp;
                    Popover</span></a></li>
              <li className="sidebar-item"><a href="ui-notification.html" className="sidebar-link"><span className="hide-menu">Notification</span></a></li>
              <li className="sidebar-item"><a href="ui-progressbar.html" className="sidebar-link"><span className="hide-menu">Progressbar</span></a></li>
              <li className="sidebar-item"><a href="ui-typography.html" className="sidebar-link"><span className="hide-menu">Typography</span></a></li>
              <li className="sidebar-item"><a href="ui-bootstrap.html" className="sidebar-link"><span className="hide-menu">Bootstrap
                    UI</span></a></li>
              <li className="sidebar-item"><a href="ui-breadcrumb.html" className="sidebar-link"><span className="hide-menu">Breadcrumb</span></a></li>
              <li className="sidebar-item"><a href="ui-list-media.html" className="sidebar-link"><span className="hide-menu">List
                    Media</span></a></li>
              <li className="sidebar-item"><a href="ui-grid.html" className="sidebar-link"><span className="hide-menu"> Grid </span></a></li>
              <li className="sidebar-item"><a href="ui-carousel.html" className="sidebar-link"><span className="hide-menu">
                    Carousel</span></a></li>
              <li className="sidebar-item"><a href="ui-scrollspy.html" className="sidebar-link"><span className="hide-menu">
                    Scrollspy</span></a></li>
              <li className="sidebar-item"><a href="ui-toasts.html" className="sidebar-link"><span className="hide-menu"> Toasts</span></a>
              </li>
              <li className="sidebar-item"><a href="ui-spinner.html" className="sidebar-link"><span className="hide-menu"> Spinner </span></a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="ui-cards.html" aria-expanded="false"><i data-feather="sidebar" className="feather-icon" /><span className="hide-menu">Cards
              </span></a>
          </li>
          <li className="list-divider" />
          <li className="nav-small-cap"><span className="hide-menu">Authentication</span></li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-login1.html" aria-expanded="false"><i data-feather="lock" className="feather-icon" /><span className="hide-menu">Login
              </span></a>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-register1.html" aria-expanded="false"><i data-feather="lock" className="feather-icon" /><span className="hide-menu">Register
              </span></a>
          </li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="feather" className="feather-icon" /><span className="hide-menu">Icons
              </span></a>
            <ul aria-expanded="false" className="collapse first-level base-level-line">
              <li className="sidebar-item"><a href="icon-fontawesome.html" className="sidebar-link"><span className="hide-menu"> Fontawesome Icons </span></a></li>
              <li className="sidebar-item"><a href="icon-simple-lineicon.html" className="sidebar-link"><span className="hide-menu"> Simple Line Icons </span></a></li>
            </ul>
          </li>
          <li className="list-divider" />
          <li className="nav-small-cap"><span className="hide-menu">Extra</span></li>
          <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="authentication-login1.html" aria-expanded="false"><i data-feather="log-out" className="feather-icon" /><span className="hide-menu">Logout</span></a></li>
          <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false"><i data-feather="crosshair" className="feather-icon" /><span className="hide-menu">Multi
                level
                dd</span></a>
            <ul aria-expanded="false" className="collapse first-level base-level-line">
              <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item 1.1</span></a>
              </li>
              <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item 1.2</span></a>
              </li>
              <li className="sidebar-item"> <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false"><span className="hide-menu">Menu 1.3</span></a>
                <ul aria-expanded="false" className="collapse second-level base-level-line">
                  <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item
                        1.3.1</span></a></li>
                  <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item
                        1.3.2</span></a></li>
                  <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item
                        1.3.3</span></a></li>
                  <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item
                        1.3.4</span></a></li>
                </ul>
              </li>
              <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><span className="hide-menu"> item
                    1.4</span></a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
  {/* ============================================================== */}
  {/* End Left Sidebar - style you can find in sidebar.scss  */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Page wrapper  */}
  {/* ============================================================== */}
  <div className="page-wrapper">
    {/* ============================================================== */}
    {/* Bread crumb and right sidebar toggle */}
    {/* ============================================================== */}
    <div className="page-breadcrumb">
      <div className="row">
        <div className="col-7 align-self-center">
          <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Good Morning Jason!</h3>
          <div className="d-flex align-items-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0 p-0">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="col-5 align-self-center">
          <div className="customize-input float-end">
            <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
              <option selected>Aug 23</option>
              <option value={1}>July 23</option>
              <option value={2}>Jun 23</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* End Bread crumb and right sidebar toggle */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Container fluid  */}
    {/* ============================================================== */}
    <div className="container-fluid">
      {/* *************************************************************** */}
      {/* Start First Cards */}
      {/* *************************************************************** */}
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card border-end">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <div className="d-inline-flex align-items-center">
                    <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                    <span className="badge bg-primary font-12 text-white font-weight-medium rounded-pill ms-2 d-lg-block d-md-none">+18.33%</span>
                  </div>
                  <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Clients
                  </h6>
                </div>
                <div className="ms-auto mt-md-3 mt-lg-0">
                  <span className="opacity-7 text-muted"><i data-feather="user-plus" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card border-end ">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h2 className="text-dark mb-1 w-100 text-truncate font-weight-medium"><sup className="set-doller">$</sup>18,306</h2>
                  <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Earnings of
                    Month
                  </h6>
                </div>
                <div className="ms-auto mt-md-3 mt-lg-0">
                  <span className="opacity-7 text-muted"><i data-feather="dollar-sign" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card border-end ">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <div className="d-inline-flex align-items-center">
                    <h2 className="text-dark mb-1 font-weight-medium">1538</h2>
                    <span className="badge bg-danger font-12 text-white font-weight-medium rounded-pill ms-2 d-md-none d-lg-block">-18.33%</span>
                  </div>
                  <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Projects
                  </h6>
                </div>
                <div className="ms-auto mt-md-3 mt-lg-0">
                  <span className="opacity-7 text-muted"><i data-feather="file-plus" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="card ">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h2 className="text-dark mb-1 font-weight-medium">864</h2>
                  <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Projects</h6>
                </div>
                <div className="ms-auto mt-md-3 mt-lg-0">
                  <span className="opacity-7 text-muted"><i data-feather="globe" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************************** */}
      {/* End First Cards */}
      {/* *************************************************************** */}
      {/* *************************************************************** */}
      {/* Start Sales Charts Section */}
      {/* *************************************************************** */}
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Total Sales</h4>
              <div id="campaign-v2" className="mt-2" style={{height: 283, width: '100%'}} />
              <ul className="list-style-none mb-0">
                <li>
                  <i className="fas fa-circle text-primary font-10 me-2" />
                  <span className="text-muted">Direct Sales</span>
                  <span className="text-dark float-end font-weight-medium">$2346</span>
                </li>
                <li className="mt-3">
                  <i className="fas fa-circle text-danger font-10 me-2" />
                  <span className="text-muted">Referral Sales</span>
                  <span className="text-dark float-end font-weight-medium">$2108</span>
                </li>
                <li className="mt-3">
                  <i className="fas fa-circle text-cyan font-10 me-2" />
                  <span className="text-muted">Affiliate Sales</span>
                  <span className="text-dark float-end font-weight-medium">$1204</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Net Income</h4>
              <div className="net-income mt-4 position-relative" style={{height: 294}} />
              <ul className="list-inline text-center mt-5 mb-2">
                <li className="list-inline-item text-muted fst-italic">Sales for this month</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Earning by Location</h4>
              <div className style={{height: 180}}>
                <div id="visitbylocate" style={{height: '100%'}} />
              </div>
              <div className="row mb-3 align-items-center mt-1 mt-5">
                <div className="col-4 text-end">
                  <span className="text-muted font-14">India</span>
                </div>
                <div className="col-5">
                  <div className="progress" style={{height: 5}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-3 text-end">
                  <span className="mb-0 font-14 text-dark font-weight-medium">28%</span>
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <div className="col-4 text-end">
                  <span className="text-muted font-14">UK</span>
                </div>
                <div className="col-5">
                  <div className="progress" style={{height: 5}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '74%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-3 text-end">
                  <span className="mb-0 font-14 text-dark font-weight-medium">21%</span>
                </div>
              </div>
              <div className="row mb-3 align-items-center">
                <div className="col-4 text-end">
                  <span className="text-muted font-14">USA</span>
                </div>
                <div className="col-5">
                  <div className="progress" style={{height: 5}}>
                    <div className="progress-bar bg-cyan" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-3 text-end">
                  <span className="mb-0 font-14 text-dark font-weight-medium">18%</span>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-4 text-end">
                  <span className="text-muted font-14">China</span>
                </div>
                <div className="col-5">
                  <div className="progress" style={{height: 5}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-3 text-end">
                  <span className="mb-0 font-14 text-dark font-weight-medium">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************************** */}
      {/* End Sales Charts Section */}
      {/* *************************************************************** */}
      {/* *************************************************************** */}
      {/* Start Location and Earnings Charts Section */}
      {/* *************************************************************** */}
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-start">
                <h4 className="card-title mb-0">Earning Statistics</h4>
                <div className="ms-auto">
                  <div className="dropdown sub-dropdown">
                    <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i data-feather="more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dd1">
                      <a className="dropdown-item" href="#">Insert</a>
                      <a className="dropdown-item" href="#">Update</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-4 mb-5">
                <div className="stats ct-charts position-relative" style={{height: 315}} />
              </div>
              <ul className="list-inline text-center mt-4 mb-0">
                <li className="list-inline-item text-muted fst-italic">Earnings for this month</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Activity</h4>
              <div className="mt-4 activity">
                <div className="d-flex align-items-start border-left-line pb-3">
                  <div>
                    <a href="javascript:void(0)" className="btn btn-info btn-circle mb-2 btn-item">
                      <i data-feather="shopping-cart" />
                    </a>
                  </div>
                  <div className="ms-3 mt-2">
                    <h5 className="text-dark font-weight-medium mb-2">New Product Sold!</h5>
                    <p className="font-14 mb-2 text-muted">John Musa just purchased <br /> Cannon 5M
                      Camera.
                    </p>
                    <span className="font-weight-light font-14 text-muted">10 Minutes Ago</span>
                  </div>
                </div>
                <div className="d-flex align-items-start border-left-line pb-3">
                  <div>
                    <a href="javascript:void(0)" className="btn btn-danger btn-circle mb-2 btn-item">
                      <i data-feather="message-square" />
                    </a>
                  </div>
                  <div className="ms-3 mt-2">
                    <h5 className="text-dark font-weight-medium mb-2">New Support Ticket</h5>
                    <p className="font-14 mb-2 text-muted">Richardson just create support <br />
                      ticket</p>
                    <span className="font-weight-light font-14 text-muted">25 Minutes Ago</span>
                  </div>
                </div>
                <div className="d-flex align-items-start border-left-line">
                  <div>
                    <a href="javascript:void(0)" className="btn btn-cyan btn-circle mb-2 btn-item">
                      <i data-feather="bell" />
                    </a>
                  </div>
                  <div className="ms-3 mt-2">
                    <h5 className="text-dark font-weight-medium mb-2">Notification Pending Order!
                    </h5>
                    <p className="font-14 mb-2 text-muted">One Pending order from Ryne <br /> Doe</p>
                    <span className="font-weight-light font-14 mb-1 d-block text-muted">2 Hours
                      Ago</span>
                    <a href="javascript:void(0)" className="font-14 border-bottom pb-1 border-info">Load More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************************** */}
      {/* End Location and Earnings Charts Section */}
      {/* *************************************************************** */}
      {/* *************************************************************** */}
      {/* Start Top Leader Table */}
      {/* *************************************************************** */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <h4 className="card-title">Top Leaders</h4>
                <div className="ms-auto">
                  <div className="dropdown sub-dropdown">
                    <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i data-feather="more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                      <a className="dropdown-item" href="#">Insert</a>
                      <a className="dropdown-item" href="#">Update</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap v-middle mb-0">
                  <thead>
                    <tr className="border-0">
                      <th className="border-0 font-14 font-weight-medium text-muted">Team Lead
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted px-2">Project
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted">Team</th>
                      <th className="border-0 font-14 font-weight-medium text-muted text-center">
                        Status
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted text-center">
                        Weeks
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-top-0 px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="me-3"><img src=".././src/memberArea/assets/images/users/widget-table-pic1.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna
                              Gover</h5>
                            <span className="text-muted font-14">hgover@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>
                      <td className="border-top-0 px-2 py-4">
                        <div className="popover-icon">
                          <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                          <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                          <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                          <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                        </div>
                      </td>
                      <td className="border-top-0 text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-bs-toggle="tooltip" data-placement="top" title="In Testing" /></td>
                      <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                        35
                      </td>
                      <td className="font-weight-medium text-dark border-top-0 px-2 py-4">$96K
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="me-3"><img src alt="user" className="rounded-circle" width={45} height={45} /></div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Daniel
                              Kristeen
                            </h5>
                            <span className="text-muted font-14">Kristeen@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>
                      <td className="px-2 py-4">
                        <div className="popover-icon">
                          <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                          <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                          <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                        </div>
                      </td>
                      <td className="text-center px-2 py-4"><i className="fa fa-circle text-success font-12" data-bs-toggle="tooltip" data-placement="top" title="Done" />
                      </td>
                      <td className="text-center text-muted font-weight-medium px-2 py-4">32</td>
                      <td className="font-weight-medium text-dark px-2 py-4">$85K</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="me-3"><img src=".././src/memberArea/assets/images/users/widget-table-pic3.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Julian
                              Josephs
                            </h5>
                            <span className="text-muted font-14">Josephs@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>
                      <td className="px-2 py-4">
                        <div className="popover-icon">
                          <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                          <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                          <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                          <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                        </div>
                      </td>
                      <td className="text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-bs-toggle="tooltip" data-placement="top" title="Done" />
                      </td>
                      <td className="text-center text-muted font-weight-medium px-2 py-4">29</td>
                      <td className="font-weight-medium text-dark px-2 py-4">$81K</td>
                    </tr>
                    <tr>
                      <td className="border-bottom-0 px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="me-3"><img src=".././src/memberArea/assets/images/users/widget-table-pic4.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Jan
                              Petrovic
                            </h5>
                            <span className="text-muted font-14">hgover@gmail.com</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-bottom-0 text-muted px-2 py-4 font-14">Hosting Press
                        HTML</td>
                      <td className="border-bottom-0 px-2 py-4">
                        <div className="popover-icon">
                          <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                          <a className="btn btn-success text-white font-20 rounded-circle btn-circle" href="javascript:void(0)">+</a>
                        </div>
                      </td>
                      <td className="border-bottom-0 text-center px-2 py-4"><i className="fa fa-circle text-danger font-12" data-bs-toggle="tooltip" data-placement="top" title="In Progress" /></td>
                      <td className="border-bottom-0 text-center text-muted font-weight-medium px-2 py-4">
                        23</td>
                      <td className="border-bottom-0 font-weight-medium text-dark px-2 py-4">$80K
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************************** */}
      {/* End Top Leader Table */}
      {/* *************************************************************** */}
    </div>
    {/* ============================================================== */}
    {/* End Container fluid  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* footer */}
    {/* ============================================================== */}
    <footer className="footer text-center text-muted">
      All Rights Reserved by Freedash. Designed and Developed by <a href="https://adminmart.com/">Adminmart</a>.
    </footer>
    {/* ============================================================== */}
    {/* End footer */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Page wrapper  */}
  {/* ============================================================== */}
</div>




    
  )
}

export default MemberArea