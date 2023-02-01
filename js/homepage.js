// Change text color after toggling the button in Diagram section
    let toggleCheckbox = document.querySelectorAll('.toggle-checkbox-item');
    toggleCheckbox.forEach(element => {
        element.addEventListener('change', (event) => {
            if(event.currentTarget.checked){
                element.previousElementSibling.style.color = '#40189D'
            }
            else{
                element.previousElementSibling.style.color = '#5C5C5C'
            }
        })
    });

// Chart 
    let vacancyStats = [
        {week: "Week 01", stats: { applicationSent: 78, interviews:30 } },
        {week: "Week 02", stats: { applicationSent: 80, interviews:52 } },
        {week: "Week 03", stats: { applicationSent: 23, interviews:33 } },
        {week: "Week 04", stats: { applicationSent: 35, interviews:40 } },
        {week: "Week 05", stats: { applicationSent: 63, interviews:34 } },
        {week: "Week 06", stats: { applicationSent: 70, interviews:22 } },
        {week: "Week 07", stats: { applicationSent: 36, interviews:44 } },
        {week: "Week 08", stats: { applicationSent: 34, interviews:15 } },
        {week: "Week 09", stats: { applicationSent: 35, interviews:5 } },
        {week: "Week 10", stats: { applicationSent: 15, interviews:5 } }
    ]

// setup 
    const data = {
    datasets: [{
        label: 'Appication Sent',
        data: vacancyStats,
        backgroundColor: '#40189D',
        borderColor: '#40189D',
        tension: 0.4,
        parsing: {
            xAxisKey: 'week',
            yAxisKey: 'stats.applicationSent'           
        },
        borderWidth: 4,
        pointRadius: 5,
        pointBackgroundColor: '#40189D',
        pointBorderWidth: 2,
        pointBorderColor: 'transparent',
        pointHoverRadius: 10,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: '#FFFFFF',
        }, {
        label: 'Interviews',
        data: vacancyStats,
        backgroundColor: '#1BD084',
        borderColor: '#1BD084',
        tension: 0.4,
        parsing: {
            xAxisKey: 'week',
            yAxisKey: 'stats.interviews'           
        },
        borderWidth: 4,
        pointRadius: 5,
        pointBackgroundColor: '#1BD084',
        pointBorderWidth: 2,
        pointBorderColor: 'transparent',
        pointHoverRadius: 10,
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: '#FFFFFF',
        }],
    };

// config 
    const config = {
    type: 'line',
    data,
    options: {
        scales: {
        y: {
            max: 100,
            min: 0,
            ticks: {
                stepSize: 20,
                color: 'rgba(120, 120, 120, 1)',
            },
        },
        x: {
            ticks: {
                color: 'rgba(120, 120, 120, 1)'
            },
        },
        },
        responsive: true,
    }
    };

// render init block
    const myChart = new Chart(
    document.getElementById('chart'),
    config
    );

// Jobs Owl Carousel
    $('.jobs-carousel').owlCarousel({
        loop:true,
        nav:false, //or true
        dots:false, // or false
        autoplay:false,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            576:{
                items:1,
                margin: 0
            },
            700:{
                items:2,
                margin: 8
            },
            768:{
                items:2,
                margin:16,
            },
            992:{
                items:2,
                margin:16,
            },
            1200:{
                items:2.5,
                margin:24,
            }
        }
    })

// Vacancy Owl Carousel
    $('.vacancy-items-bottom').slick({
    arrows:false,
    dots:true,
    infinite:false,
    slidesToShow:4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
        }
      },
    ]
    });


//============SEARCH-JOB-PAGE============

//DROPDOWN MENU
    // Toggle the menu
    $('.custom-dropdown-menu').click(()=>{
        $('.dropdown-elements').toggleClass('display-block-class')
    })

    // Show chosen option
    let dropdownOptions = document.getElementsByClassName('dropdown-options');
    let dropdownShowingOption = document.querySelector('.dropdown-btn-showing');
    for(i = 0; i < dropdownOptions.length; i++){
        dropdownOptions[i].onclick = function (){
            dropdownShowingOption.innerText = this.innerText
        }
    }

    // Suggestion links while active
    let suggestionLinks = document.querySelectorAll('.suggestion-links-item');
    suggestionLinks.forEach(pickOneLink);
    function pickOneLink(item,index,arr){
        item.onclick = function(e){
            for(i = 0; i < arr.length; i++){
                arr[i].classList.remove('suggestions-active')
            }
            item.classList.add('suggestions-active');
            e.preventDefault(); 
        }
    }

    