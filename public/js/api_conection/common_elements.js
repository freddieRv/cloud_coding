let top_nav = function top_nav() {
    return `<div class="row top-nav">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="topnav-icon">
                        <div class="dropdown">
                            <img onclick="myFunction()" id="img_2" border="0" src="../../public/img/common/test_1.png" alt="ediTHOR" class="dropbtn edithor-navbar">
                            <div id="myDropdown" class="dropdown-content">
                                <a href="../users/index.html"><p>My profile</p></a>
                                <a href="../projects/index.html"><p>My projects</p></a>
                                <a href="../other/about_us.html"><p>About edithor</p></a>
                                <p id="log-out">Log out</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <p id="user-logged">You are logged in as: <a href="../users/index.html">${localStorage.getItem('username')}</a></p>
                </div>
            </div>
        </div>
    </div>`;
}

let search_projects = function search_projects(){
    return `<div class="row">

        <div class="col-md-3">
        <br>
            <a class="btn-success" href="create.html">Create new project</a>
        </div>
    </div>
    <div class="card-actions" id="filters">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <label>
                    Name
                    <input type="text" name="" value="" placeholder="My project" id="search_filter">
                </label>
            </div>
            <div class="col-sm-6">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <button type="button" name="button" class="btn" id="filter-button">
                    <i class="fas fa-filter"></i>
                    <span class="btn-txt">Filter</span>
                </button>
            </div>
            <div class="col-sm-3">
                <button type="button" name="button" class="btn" id="filternt-button">
                    <i class="fas fa-filter"></i>
                    <span class="btn-txt">Show all</span>
                </button>
            </div>
        </div>
    </div>
    <div class="card-actions" style="display: none;" id="actions">
        <div class="row">
            <div class="col-3">
                <button type="button" name="button" class="btn" id="btnDelete">
                    <i class="fas fa-times-circle"></i>
                    <span class="btn-txt">Delete</span>
                </button>
            </div>
            <div class="col-3">
                <button type="button" name="button" class="btn" id="btnSelect">
                    <i class="fas fa-check-circle"></i>
                    <span class="btn-txt">Select all</span>
                </button>
                <button type="button" name="button" class="btn" id="btnDeselect" style="display: none;">
                    <i class="fas fa-circle"></i>
                    <span class="btn-txt">Deselect all</span>
                </button>
            </div>
        </div>
    </div>`;
}

let project_card = function project_card(data){
    return `<div class="card">
        <div class="row">
            <div class="col-sm-3">
                <img src="../../public/img/common/folder.png" alt="Project A">
            </div>
            <div class="col-sm-6">
                <div class="title">
                    <a href="show.html?project_id=${data.id}" id="project-${data.id}">${data.name}</a>
                </div>
                <div class="description">
                    Project description: ${data.description}
                </div>
            </div>
            <div class="col-sm-3 project-footer">
            </div>
        </div>
    </div>`;
    // TODO: put some extra information?
}

let footer_code = function footer_code(){
    return `
    <div class="row">
        <div class="col-sm-12" id="filled-element">
        <br>
        </div>
    </div>
    <div class="row footer">
        <div class="col-sm-12">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <a href="../other/contact.html"><span>Contact</span></a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="../other/privacy.html"><span>Privacy</span></a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="../other/about_us.html"><span>About us</span></a>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="../other/FAQ.html"><span>FAQ</span></a>
                </div>
            </div>
        </div>
    </div>`
};
