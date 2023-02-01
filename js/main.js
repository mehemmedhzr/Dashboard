let sidebarToggleBtn = document.querySelector('.toggleBtn'),
    sidebarActiveToggle = document.querySelector('.toggleBtn-active'),
    asideMenu = document.querySelector('aside'),
    searchArea = document.querySelector('.nav-right form input'),
    main = document.querySelector('main'),
    myContainer = document.querySelector('.my-container'),
    emptyDiv = document.querySelector('.empty-div'),
    closeBtnSidebar = document.querySelector('.close-btn'),
    body = document.querySelector('body'),
    featuredCardItems = document.querySelector('.featured-card-item');
    

// MAKES SIDEBAR APPEAR & DISAPPEAR

$('.toggleBtn').click(()=>{
    $('.my-container').toggleClass('grid-container');
    $('aside').toggleClass('active');
    $('.nav-right form input').toggleClass('nav-search-active');
    $('main').toggleClass('main-border');
    $('body').toggleClass('body-bg-color');
})



closeBtnSidebar.addEventListener("click", () => {
        myContainer.classList.remove('grid-container');
        asideMenu.classList.remove('active');
        sidebarToggleBtn.style.display = 'block';
        sidebarActiveToggle.style.display = 'none';
        main.style.borderRadius = '0 0 0 0';
        body.style.backgroundColor = 'initial';
        emptyDiv.classList.remove('fixed-sidebar');
})

emptyDiv.addEventListener("click", () => {
    myContainer.classList.remove('grid-container');
    asideMenu.classList.remove('active');
    sidebarToggleBtn.style.display = 'block';
    sidebarActiveToggle.style.display = 'none';
    main.style.borderRadius = '0 0 0 0';
    body.style.backgroundColor = 'initial';
    emptyDiv.classList.remove('fixed-sidebar');
})

// SIDEBAR ITEMS' ACTIVE BEHAVIOUR 
    
    // let sideBarItems = document.querySelectorAll('.sidebar-item');


    // sideBarItems.forEach((sideBarItem) => {
    //   sideBarItem.addEventListener('click', (e) => {
    //     sideBarItems.forEach((sideBarItem) => {
    //         sideBarItem.classList.remove('active-sidebar');
    //     });
    //     e.preventDefault();
    //     sideBarItem.classList.add('active-sidebar');
    //   });
    // });

    $('.dashboard-link').click(function(){
        $('.sidebar-item').removeClass('active-sidebar');
        $(this).parent().addClass('active-sidebar');
        $('.dashboard-page').css('display', 'block');
        $('.search-job-page').css('display', 'none');
    })

    $('.search-job-link').click(function(){
        $('.sidebar-item').removeClass('active-sidebar');
        $(this).parent().addClass('active-sidebar');
        $('.dashboard-page').css('display', 'none');
        $('.search-job-page').css('display', 'block');
    })



    


