<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="../css/navbar.css">

<nav class="navbar navbar-expand-custom navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="../index.php">Ace Training</a>
    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'dashboard') ? 'active' : ''; ?>">
                <a class="nav-link" href="../index.php"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
            </li>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'attendance') ? 'active' : ''; ?>">
                <a class="nav-link" href="#"><i class="far fa-address-book"></i>Attendance</a>
            </li>
            <?php if ($_SESSION['role'] == 'tutor') { ?>
                <li class="nav-item <?php echo ($_SESSION['activepage'] == 'tutor-page') ? 'active' : ''; ?>">
                    <a class="nav-link" href="../tutor-page.php"><i class="fas fa-users"></i>Tutor Page</a>
                </li> <?php } ?>
            <?php if ($_SESSION['role'] == 'admin') { ?>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'admin-page') ? 'active' : ''; ?>">
                <a class="nav-link" href="../admin-page.php"><i class="far fa-clone"></i>Admin page</a>
            </li> <?php } ?>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'timetable') ? 'active' : ''; ?>">
                <a class="nav-link" href="../timetable.php"><i class="far fa-calendar-alt"></i>Timetable</a>
            </li>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'progress') ? 'active' : ''; ?>">
                <a class="nav-link" href="../progress.php"><i class="far fa-chart-bar"></i>Progress</a>
            </li>
            <li class="nav-item <?php echo ($_SESSION['activepage'] == 'documents') ? 'active' : ''; ?>">
                <a class="nav-link" href="../documents.php"><i class="far fa-copy"></i>Documents</a>
            </li>
        </ul>
    </div>
</nav>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../js/navbar.js"></script>
