// events data base
const eventsData = [{
        id: 1,
        title: "  المهرجان الموسيقي الدولي رقم 20",
        date: "2025-10-17",
        time: "4:00 PM",
        location: " دمشق - ساحة الأمويين - المعهد العالي للفنون المسرحية",
        category: "Music",
        image: "img/event1logo.jpg" ,
        gallery: ["img/event1logo.jpg", "img/event1in.jpg", "img/event1map.png"],
        description: " استمتع بعروض موسيقية عالمية تبعث البهجة في القلوب، وتجمع الثقافات بأنغام تنبض بالحياة والإبداع بتجمع أفضل الفنانين المحليين والدوليين في ليلة لا تُنسى من الفن والألحان الرائعة. سيتم البدء في تمام الساعة 4 ظهرا من يوم الجمعة الموافق ل 17/10/2025 لا تنسى حجز تذكرتك عبر تسجيل اسمك في الموقع ",
        featured: true
    },
    {
        id: 2,
        title: "  مباراة الشفق",
        date: "2025-10-25",
        time: "10:00 PM",
        location: " دمشق - ساحة الميسات - ملعب الفيحاء",
        category: "Sport",
        image: "img/event2logo.jpg",
        gallery: ["img/event2logo.jpg", "img/event2in.jpg", "img/event2map.png"],
        description: "انضم إلينا لمتابعة مباراة نارية بين أقوى فريقين محليين فريق النصر ضد فريق الاتحاد حيث ستشهد في هذه المباراة المهارة والحماس  في أمسية كروية سيتم البدء في تمام الساعة 10 مساء يوم السبت الموافق ل 25/10/2025 لا تنسى حجز تذكرتك عبر تسجيل اسمك في الموقع",
        featured: true
    },
    {
        id: 3,
        title: "معرض دمشق الدولي بنسخته رقم 62 ",
        date: "2025-10-28",
        time: "1:00 PM",
        location: " دمشق - طريق المطار - مدينة المعارض",
        category: "Culture",
        image: "img/event3logo.png",
        gallery: ["img/event3logo.png", "img/event3in.jpg", "img/event3map.png"],
        description: "  يعد معرض دمشق الدولي من أعرق الفعاليات الاقتصادية والثقافية في المنطقة, حيث يعود هذا العام بنسخته رقم 62 ليجمع أكثر من 300 شركة من 40 دولة،حيث انه سيشمل أجنحة للصناعات, السياحة, التكنولوجيا, والفنون,  سيتم بدء المعرض  في تمام الساعة 1 ظهرا من يوم الثلاثاء الموافق ل 28/10/2025 لا تنسى حجز تذكرتك عبر تسجيل إسمك في الموقع",
        featured: true
    },
    {
        id: 4,
        title: " التكنلوجيا والمعلومات ",
        date: "2025-11-4",
        time: "11:00 AM",
        location: " دمشق - الهمك - كلية الهندسة المعلوماتية",
        category: "Learn",
        image: "img/event4logo.jpg",
        gallery: ["img/event4logo.jpg", "img/event4in.png", "img/event4map.png"],
        description: "انطلق في رحلتك داخل عالم التقنية والمعرفة حيث انه سيتم القاء محاضرة تعليمية عن دور التكنلوجيا في مستقبلنا وما ستفتحه من افاقا جديدة للابداع والابتكار  سيتم بدء القاء المحاضرة من قبل مختصين  في تمام الساعة 11 صباح  يوم الثلاثاء الموافق ل 4/11/2025 لا تنسى حجز تذكرتك عبر تسجيل اسمك في الموقع ",
        featured: false
    },
    {
        id: 5,
        title: " مباراة القمة ",
        date: "2025-11-12",
        time: "7:00 PM",
        location: "دمشق - البرامكة - ملعب تشرين ",
        category: "Sport",
        image: "img/event5logo.jpg",
        gallery: ["img/event5logo.jpg", "img/event5in.jpg", "img/event5map.png"],
        description: "في أمسية رياضية مشتعلة, يستضيف ملعب تشرين مباراة القمة بين نادي الكرامة ونادي القاهرة الاهلي يوم الاربعاء بتاريخ 12/11/2025  في تمام الساعة 7 مساء. الحدث يأتي ضمن بطولة الدوري السوري الممتاز, ويتوقع حضور جماهيري كبير يتجاوز 15 ألف مشجع. أجواء المنافسة ستكون على أشدها، مع عروض ترفيهية قبل المباراة وتوزيع هدايا للجمهور. احجز تذكرتك الآن عبر  تسجيل اسمك عن طريق الموقع  ",
        featured: false
    },
    {
        id: 6,
        title: " حفلة طقوس سورية",
        date: "2025-12-5",
        time: "3:30 PM",
        location: " دمشق - ساحة اسلبع بحرات - مسرح القباني",
        category: "Music",
        image: "img/event6logo.jpg",
        gallery: ["img/event6logo.jpg", "img/event6in.jpg", "img/event6map.png"],
        description: " حفلة موسيقية محلية لأعمال كورالية لنصوص أدبية وجدانية يغنيها كورال غاردينيا تحت عنوان طقوس سورية تجربة لن تنسى في حين انه ستلحن  اعمال ادبية وغنائها بطريقة كورالية رائعة . سيتم بدء الحفل في تمام الساعة 3:30 ظهرا في يوم الجمعة الموافق ل 5/12/2025 سارع بتسجيل اسمك عبر الموقع لحضور هذا الحفل الرائع",
        featured: false
    },
    {
        id: 7,
        title: " كيف تدخل لعالم التجارة",
        date: "2025-12-20",
        time: "9:30 AM",
        location: "دمشق - سانا - تجمع الكليات - كلية الاقتصاد ",
        category: "Learn",
        image: "img/event7logo.jpg",
        gallery: ["img/event7logo.jpg", "img/event7in.png", "img/event7map.png"],
        description: "  سيتم إلقاء محاضرة تعليمية مخصصة لمن يريد الدخول لعالم التجارة اليوم ولديه الفكرة والإمكانيات المناسبة لكن تنقصه بعض المفاهيم والأسس التي ستجعله ناجحا في تنفيذ فكرته , تهدف هذه المحاضرة إلى تمكين هؤلاء الاشخاص من دخول هذا العالم بثقة ووعي, وسيشارك فيها نخبة من رواد الأعمال السوريين الذين بدأوا من الصفر وحققوا نجاحات باهرة, وستتضمن الفعالية ورش عمل تفاعلية, قصص نجاح ملهمة, ونصائح عملية حول تأسيس المشاريع الصغيرة حيث انها ستقام في دمشق في كلية الاقتصاد يوم  20/12/2025 الموافق ليوم السبت في تمام الساعة 9:30 صباحا , الحضور مجاني , لكن وجب تسجيل إسمك عبر الموقع   ",
        featured: false
    },
    {
        id: 8,
        title: "القراءة تبدا من المنزل",
        date: "2026-1-5",
        time: "7:00 PM",
        location: "دمشق-العدوي-جانب صالة البشر - المركز الثقافي ",
        category: "Culture",
        image: "img/event8logo.jpg",
        gallery: ["img/event8logo.jpg", "img/event8in.jpg", "img/event8map.png"],
        description: " سيتم عقد ندوة ثقافية حوارية عن أهمية دور الأهل في تشجيع أبنائهم على قراءة الكتب والمطالعة في المنزل حيث انه سيتم عقد هذه الندوة في يوم 5/1/2026 الذي سيصادف يوم الاثنين في تمام الساعة 7 مساء سارع بتسجيل إسمك عبر الموقع ولا تفوت هذه الندوة الرائعة",
        featured: false
    },
];

// function : for trending events
function displayFeaturedEvents() {
    const featuredEventsContainer = document.getElementById('featuredEvents');
    const featuredEvents = eventsData.filter(event => event.featured);
    featuredEventsContainer.innerHTML = '';
    featuredEvents.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}"  class="card-img-top rounded-circle mx-auto d-block mt-3" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary navbar mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date} | <i class="far fa-clock me-1"></i> ${event.time}</small>
                        <br>
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                    </div>
                </div>
            </div>
        `;
        featuredEventsContainer.innerHTML += eventCard;
    });

    // event : clicking on event going to detail
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-id');
            window.location.href = `event.html?id=${eventId}`;
        });
    });
}

// function : for latest events
function displayLatestEvents() {
    const latestEventsContainer = document.getElementById('latestEvents');
    // showing 3 events by date
    const latestEvents = eventsData
    .filter(event => !event.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
    latestEventsContainer.innerHTML = '';
    latestEvents.forEach(event => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}" class="card-img-top rounded-circle mx-auto d-block mt-3" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary navbar mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date} | <i class="far fa-clock me-1"></i> ${event.time}</small>
                        <br>
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                    </div>
                </div>
            </div>
        `;
        latestEventsContainer.innerHTML += eventCard;
    });

    // event : clicking on event going to detail
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-id');
            window.location.href = `event.html?id=${eventId}`;
        });
    });
}

// sort by fast category
function setupCategoryFilters() {
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterEvents(category);
        });
    });
}
function filterEvents(category) {
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
        const eventCategory = event.querySelector('.badge').textContent;

        if (category === 'all' || eventCategory === category) {
            event.parentElement.style.display = 'block';
        } else {
            event.parentElement.style.display = 'none';
        }
    });
}

// function showing all events ( in events page )
function displayAllEvents() {
    const eventsContainer = document.getElementById('allEvents');
    eventsData.forEach(event => {
        const eventCard = `
            <div class="col-md-6 col-lg-4 mb-4" data-category="${event.category}">
                <div class="card h-100 event-card" data-id="${event.id}">
                    <img src="${event.image}" class="card-img-top rounded-circle mx-auto d-block mt-3" alt="${event.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${event.category}</span>
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date}</small>
                            <a href="event.html?id=${event.id}" class="btn btn-sm btn-primary">التفاصيل</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        eventsContainer.innerHTML += eventCard;
    });
}

// fuction for fileter events
function setupEventFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAllEvents);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', filterAllEvents);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', filterAllEvents);
    }
}
function filterAllEvents() {
    const categoryValue = document.getElementById('categoryFilter')?.value || 'all';
    const dateValue = document.getElementById('dateFilter')?.value || '';
    const searchValue = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    const eventCards = document.querySelectorAll('#allEvents > div');
    
    eventCards.forEach(card => {
        const eventCategory = card.getAttribute('data-category');
        const eventDate = card.querySelector('.card-footer small')?.textContent.split(' ')[1] || '';
        const eventTitle = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const eventDescription = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
        
        const categoryMatch = categoryValue === 'all' || eventCategory === categoryValue;
        const dateMatch = !dateValue || eventDate === dateValue;
        const searchMatch = !searchValue || 
                           eventTitle.includes(searchValue) || 
                           eventDescription.includes(searchValue);
        
        if (categoryMatch && dateMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// function for deatail " in event detail page"
function displayEventDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id');
  if (!eventId) {
    document.getElementById('eventDetails').innerHTML = `
      <div class="alert alert-danger" role="alert">
        لم يتم العثور على الفعالية المطلوبة.
      </div>
    `;
    return;
  }
  const event = eventsData.find(e => e.id == eventId);
  if (!event) {
    document.getElementById('eventDetails').innerHTML = `
      <div class="alert alert-danger" role="alert">
        لم يتم العثور على الفعالية المطلوبة.
      </div>
    `;
    return;
  }
  document.getElementById('eventDetails').innerHTML = `
    <div class="row">
      <div class="col-md-8">
        <!-- small gallery -->
        <div id="eventGallery" class="position-relative mb-4">
          <img id="galleryImage" src="${event.gallery && event.gallery.length ? event.gallery[0] : event.image}" 
               class="img-fluid rounded w-100" alt="${event.title}">
          <button id="prevBtn" class="btn btn-secondary position-absolute top-50 start-0 translate-middle-y ms-2">
              التالي >
          </button>
          <button id="nextBtn" class="btn btn-secondary position-absolute top-50 end-0 translate-middle-y me-2">
             < السابق  
          </button>
        </div>

        <h1>${event.title}</h1>
        <div class="d-flex align-items-center mb-3">
          <span class="badge bg-primary me-2">${event.category}</span>
          <span class="text-muted"><i class="far fa-calendar-alt me-1"></i> ${event.date}</span>
          <span class="text-muted ms-3"><i class="far fa-clock me-1"></i> ${event.time}</span>
          <span class="text-muted ms-3"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</span>
        </div>
        <p>${event.description}</p>
        
        <div class="d-flex mt-4">
          <button class="btn btn-primary me-2" id="addToCalendar"><i class="far fa-calendar-plus me-1"></i> أضف إلى التقويم</button>
          <button class="btn btn-outline-primary" id="shareEvent"><i class="fas fa-share-alt me-1"></i> مشاركة</button>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">معلومات الفعالية</h5>
          </div>
          <div class="card-body">
            <p><strong>التاريخ:</strong> ${event.date}</p>
            <p><strong>الوقت:</strong> ${event.time}</p>
            <p><strong>المكان:</strong> ${event.location}</p>
            <p><strong>التصنيف:</strong> ${event.category}</p>
          </div>
        </div>

        <div class="card mt-4">
          <div class="card-header">
            <h5 class="card-title mb-0">فعاليات ذات صلة</h5>
          </div>
          <div class="card-body">
            <div class="list-group list-group-flush">
              ${getRelatedEvents(event.id, event.category).map(relatedEvent => `
                <a href="event.html?id=${relatedEvent.id}" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${relatedEvent.title}</h6>
                    <small>${relatedEvent.date}</small>
                  </div>
                  <small class="text-muted">${relatedEvent.location}</small>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // controle button in gallery
  const galleryImages = event.gallery && event.gallery.length ? event.gallery : [event.image];
  let currentIndex = 0;
  const galleryImage = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryImage.src = galleryImages[currentIndex];
  });
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    galleryImage.src = galleryImages[currentIndex];
  });

  // event for button share and add to calender  
    document.getElementById('addToCalendar')?.addEventListener('click', function() {
        alert('تمت وبنجاح تسجيل اسمك ضمن الفعالية');
    });
    document.getElementById('shareEvent')?.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href
            })
            .catch(error => {
                console.log('Error sharing:', error);
            });
        } else {
            alert('مشاركة الرابط: ' + window.location.href);
        }
    });
}
// funiction for getting related events
function getRelatedEvents(currentEventId, category) {
    return eventsData
        .filter(event => event.id != currentEventId && event.category === category)
        .slice(0, 3);
}

// contact with us : function for validate form        
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // check what language did user chose for alerts messages  
        const lang = localStorage.getItem("lang") ;
        const t = translations[lang];

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;
        let errorMessage = '';

        if (name === '') {
            isValid = false;
            errorMessage += t.errorName + '<br>';
        }

        if (email === '' || !emailRegex.test(email)) {
            isValid = false;
            errorMessage += t.errorEmail + '<br>';
        }
        if (message === '') {
            isValid = false;
            errorMessage += t.errorMessage + '<br>';
        }

        if (isValid) {
            const successAlert = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>${t.successTitle}</strong> ${t.successMsg}
                    <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.getElementById('formMessages').innerHTML = successAlert;
            form.reset();
        } else {
            const errorAlert = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>${t.errorTitle}</strong><br>${errorMessage}
                    <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            document.getElementById('formMessages').innerHTML = errorAlert;
        }
    });
}


// setup all functions when page loads
document.addEventListener('DOMContentLoaded', function() {
    //   setup main page
    if (document.getElementById('featuredEvents')) {
        displayFeaturedEvents();
        displayLatestEvents();
        setupCategoryFilters();
    }
    // setup all events page   
    if (document.getElementById('allEvents')) {
        displayAllEvents();
        setupEventFilters();
    }
    // setup deatil page   
    if (document.getElementById('eventDetails')) {
        displayEventDetails();
    }
    // setup contact page
    validateContactForm();
    
});




// language changer
function setLanguage(lang) {
  const t = translations[lang];

  // change direction of writing
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.style.textAlign = (lang === "ar") ? "right" : "left";

  // id list of translated elements
  const elementsToTranslate = [
    {id:"main", text:t.main},
    {id:"events", text:t.events},
    {id:"about", text:t.about},
    {id:"contact", text:t.contact},
    {id:"siteTitle", text:t.siteTitle},

    {id:"h1_entrance", text:t.h1_entrance},
    {id:"eventsbutton", text:t.eventsbutton},
    {id:"p1undh1", text:t.p1undh1},
    {id:"h2", text:t.h2},
    {id:"btn_all", text:t.btn_all},
    {id:"btn_culture", text:t.btn_culture},
    {id:"btn_sport", text:t.btn_sport},
    {id:"btn_learn", text:t.btn_learn},
    {id:"btn_music", text:t.btn_music},
    {id:"h2latest", text:t.h2latest},
    {id:"h2fastcat", text:t.h2fastcat},
    {id:"h2workedby", text:t.h2workedby},
    
    {id:"h1p2eve", text:t.h1p2eve},
    {id:"opt_all", text:t.opt_all},
    {id:"opt_culture", text:t.opt_culture},
    {id:"opt_sport", text:t.opt_sport},
    {id:"opt_music", text:t.opt_music},
    {id:"opt_learn", text:t.opt_learn},

    {id:"infoaboutweb", text:t.infoaboutweb},
    {id:"webview", text:t.webview},
    {id:"pwebview", text:t.pwebview},
    {id:"webgoal", text:t.webgoal},
    {id:"pwebgoal", text:t.pwebgoal},
    {id:"h2politice", text:t.h2politice},
    {id:"h1poli1", text:t.h1poli1},
    {id:"h1poli1s1", text:t.h1poli1s1},
    {id:"h1poli1s2", text:t.h1poli1s2},
    {id:"h1poli1s3", text:t.h1poli1s3},
    {id:"h1poli1s4", text:t.h1poli1s4},

    {id:"h2poli2", text:t.h2poli2},
    {id:"ph2poli2", text:t.ph2poli2},

    {id:"h2poli3", text:t.h2poli3},
    {id:"h2poli3_1", text:t.h2poli3_1},
    {id:"h2poli3_2", text:t.h2poli3_2},
    {id:"h2poli3_3", text:t.h2poli3_3},
    {id:"h2poli3_4", text:t.h2poli3_4},
    {id:"h2poli3_5", text:t.h2poli3_5},
    
    {id:"contacts", text:t.contacts},
    {id:"sendmessage", text:t.sendmessage},
    {id:"fullname", text:t.fullname},
    {id:"uremail", text:t.uremail},
    {id:"typeofmess", text:t.typeofmess},
    {id:"type1", text:t.type1},
    {id:"type2", text:t.type2},
    {id:"type3", text:t.type3},
    {id:"type4", text:t.type4},
    {id:"type5", text:t.type5},
    {id:"type6", text:t.type6},
    {id:"themess", text:t.themess},
    {id:"buttonforsend", text:t.buttonforsend},
    {id:"infoforcontact", text:t.infoforcontact},
    {id:"mail", text:t.mail},
    {id:"phone", text:t.phone},
    {id:"place", text:t.place},
    {id:"timework", text:t.timework},
    {id:"days_hours", text:t.days_hours},
    {id:"map_title", text:t.map_title},
  
  ];

  // translate only elements that existing
  elementsToTranslate.forEach(el => {
    const domEl = document.getElementById(el.id);
    if(domEl) domEl.textContent = el.text;
  });

  // save language (local storage )
  localStorage.setItem("lang", lang);
}


// when load page bring back chosen langauge
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  setLanguage(savedLang);

  
});
// button toggle lang
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const langFlag = document.getElementById("langFlag");

  const savedLang = localStorage.getItem("lang") || "ar";
  setLanguage(savedLang);

  // refresh toggle statue and flag   
  if (savedLang === "en") {
    langToggle.classList.add("active");
    langFlag.src = "img/usa.png";
  } else {
    langToggle.classList.remove("active");
    langFlag.src = "img/syria.png";
  }

  // when clicking on toggle
  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "ar";
    const newLang = currentLang === "ar" ? "en" : "ar";
    
    setLanguage(newLang);

    //  refresh toggle statue and flag after click
    if (newLang === "en") {
      langToggle.classList.add("active");
      langFlag.src = "img/usa.png";
    } else {
      langToggle.classList.remove("active");
      langFlag.src = "img/syria.png";
    }
  });
});

  // theme toggle
 document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.classList.add("active");
    themeIcon.src = "img/moon.png";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.classList.remove("active");
    themeIcon.src = "img/sun.png";
  }

  // click the toggle   
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      themeToggle.classList.add("active");
      themeIcon.src = "img/moon.png";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.classList.remove("active");
      themeIcon.src = "img/sun.png";
      localStorage.setItem("theme", "light");
    }
  });
});

// elements will be translated
const translations = {
  ar: {
    main: "الرئيسي",
    events: "الفعاليات",
    about: "حول الموقع",
    contact: "تواصل معنا ",
    siteTitle: "دليل فعاليات سوريا",
    h1_entrance : "ابقى على إطلاع بأحدث الفعاليات القادمة قريبا ",
    eventsbutton :"عرض جميع الفعاليات المتوفرة",
    p1undh1 : "الدليل الافضل لمساعدتك في ايجاد الفعالية المناسبة من مختلف التصنيفات المتنوعة",
    h2: "ابرز الاحداث في هذا الاسبوع !",
    btn_all : "عرض الكل" ,
    btn_culture : "ثقافي" ,
    btn_sport : "رياضي" ,
    btn_learn : "تعليمي",
    btn_music :"موسيقي",
    h2latest :"أحدث الفعاليات :",
    h2fastcat : " التصنيفات السريعة :",
    h2workedby : "تم تصميم الموقع من قبل  :",

    h1p2eve : "جميع الفعاليات   ",
    opt_all:"عرض الكل",
    opt_culture:"ثقافي",
    opt_sport:"رياضي",
    opt_music:"موسيقي",
    opt_learn:"تعليمي",

    infoaboutweb : "معلومات عن موقعنا",
    webview : " 🌟 رؤية الموقع ",
    pwebview : "نسعى لأن نكون المنصة الأفضل في هذا المجال التي تجمع فعاليات مدينتنا في مكان واحد، وعرض أحدث الفعاليات بكل تفاصيلها الجميلة من كافة التصنيفات المختلفة منها الثقافية والفنية والموسيقة والتعليمية. وأن نربط بين منظمي الفعاليات والجمهور الباحث عن المتعة والمعرفة والتفاعلي",
    webgoal:"🎯رسالة و هدف الموقع  " ,
    pwebgoal: "موقع دليل الفعاليات وجد ليسهل الوصول إلى كل حدث يثري يومك ويقربك من مجتمعك ، ونطمح لتجميع كافة المعلومات عن الفعاليات في مكان واحد , وتقدّيم للمستخدم التجربة المريحة لإكتشاف الفعاليات والمشاركة فيها بسهولة دون عناء" ,
    h2politice : "السياسات والمعايير المطلوبة ",
    h1poli1 : "معيار اضافة الفعاليات ",
    h1poli1s1 : "يجب أن تكون الفعالية ملتزمة بكامل الأنظمة والقوانين المحلية " ,
    h1poli1s2 : "يمنع نشر فعاليات تحوي على محتوى سياسي أو مخالف للاداب العامة ",
    h1poli1s3 : "يشترط تحديد مكان وزمان للفعالية بدقة مع ورود وسائل  تواصل اجتماعية صحيحة " ,
    h1poli1s4 : "يجب تقديم كافة المعلومات بشكل تفصيلي وصحيح دون أخطاء " ,
    h2poli2 : "سياسة الأمن والخصوصية ",
    ph2poli2 : "نحن نحافظ على خصوصيتك وعلى ثقة مستخدمينا حيث ان معلوماتك تستخدم فقط  لتحسين تجربتك داخل الموقع ولن تشارك مع اي طرف ثالث الا عند الضرورة القانونية",
    h2poli3 : "كيف يمكنك اضافة فعاليتك  ؟ ",
    h2poli3_1 : "اولا: اذهب إلى صفحة اتصل بنا  أو contact with us ",
    h2poli3_2 : "ثانيا: املأ النموذج المطلوب بمعلومات فعاليتك",
    h2poli3_3 : "ثالثا: أرفق بعض الصور عن الفعالية",
    h2poli3_4 : "رابعا: انتظهر حتى تتم مراجعة طلبك خلال ال 24 ساعة القادمة",
    h2poli3_5 : "خامسا: سيتم اعلانك بنتيجة القبول أو الرفض خلال بريدك الالكتروني أو معلومات تواصلك المرفقة ",

    sendmessage :"أرسل رسالة",
    fullname : "الاسم الكامل",
    uremail : "البريد الالكتروني",
    typeofmess : "نوع الموضوع",
    type1 : " سؤال عام  ",
    type2 : "  اضافة فعالية ",
    type3 : "شكوى",
    type4 : " فرص تعاون ",
    type5 : "مقترح ",
    type6 : "أخري",
    themess : "الرسالة :",
    buttonforsend : "إرسال" ,
    successTitle: "تم الإرسال بنجاح!",
    successMsg: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.",
    errorTitle: "خطأ في الإرسال:",
    errorName: "الاسم مطلوب.",
    errorEmail: "البريد الإلكتروني غير صحيح.",
    errorMessage: "الرسالة مطلوبة.",
    contacts : "تواصل معنا " ,

    infoforcontact :"معلومات التواصل",
    mail : " البريد الالكتروني: ",
    phone : "  الهاتف: ",
    place : "المكان:",
    timework : " أوقات العمل" ,
    days_hours : "الأحد - الخميس : 8 صباحا -3 ظهرا" ,
    map_title : "خريطة الموقع",
    
  },
  en: {
    main: "Main",
    events: "Events",
    about: "About",
    contact: "Contact with us",
    siteTitle: "Syrian Events Guide",
    h1_entrance : "Stay up to date with the latest events coming soon!",
    eventsbutton :"View all available events",
    p1undh1 : "The best guide to help you find the right event from a variety of categories.",
    h2:" ! Trend for this week",
    btn_all : "All " ,
    btn_culture : "culture" ,
    btn_sport : "sport" ,
    btn_learn : "learn",
    btn_music :"music",
    h2latest :"Latest events : ",
    h2fastcat : "Fast Categories :" ,
    h2workedby : "This site was designed by :",

    h1p2eve : " All events  ",
    opt_all:" show all",
    opt_culture:"culture",
    opt_sport:"sport",
    opt_music:"music",
    opt_learn:"learn",

    infoaboutweb: " Some info about our website ",
    webview: "Site Vision 🌟",
    pwebview: "We strive to be the best platform in this field, bringing together our city's events in one place, showcasing the latest events in all their beautiful details from various categories, including cultural, artistic, musical, and educational. We also aim to connect event organizers with audiences seeking fun, knowledge, and interaction.",
    webgoal: "Message and goal of the site 🎯",
    pwebgoal: "The Events Directory website was created to facilitate access to every event that enriches your day and brings you closer to your community. We aspire to gather all information about events in one place, and provide the user with a comfortable experience to discover events and participate in them easily and without hassle." ,

    h2politice : " policies and standards",

    h1poli1 : "Events addition criteria",
    h1poli1s1 : "The event must comply with all local laws and regulations." ,
    h1poli1s2 : "It is prohibited to publish events that contain political content or content that violates public morals.",
    h1poli1s3 : "It is required to specify the exact location and time of the event, along with the correct social media channels." ,
    h1poli1s4 : "All information must be provided in detail and correctly without errors." ,

    h2poli2 : " Security and Privacy Policy ",
    ph2poli2 : "We maintain your privacy and the trust of our users, as your information is used only to improve your experience on the site and will not be shared with any third party except when legally necessary.",

    h2poli3 : "How can you add your activity?",
    h2poli3_1 : "First: Go to the Contact with Us page.",
    h2poli3_2 : "Second: Fill out the required form with your event information.",
    h2poli3_3 : "Third: Attach some pictures of the event.",
    h2poli3_4 : "Fourth: Wait for your request to be reviewed within the next 24 hours.",
    h2poli3_5 : "Fifth: You will be notified of the acceptance or rejection result via your email or the attached contact information.",

    sendmessage :"Send Message",
    fullname : "Full Name",
    uremail : "Email",
    typeofmess : "Type of topic ",
    type1 : "General question",
    type2 : "Add an event",
    type3 : "Complaint",
    type4 : "Cooperation Opportunities",
    type5 : "Suggestion",
    type6 : "Other",
    themess : "the message :",
    buttonforsend : "Send" ,
    successTitle: "Message sent successfully!",
    successMsg: "Thank you for contacting us. We will get back to you soon.",
    errorTitle: "Error in sending:",
    errorName: "Name is required.",
    errorEmail: "Invalid email address.",
    errorMessage: "Message is required.",

    contacts : "Contact With Us" ,
    infoforcontact :"Info For Contact ",
    mail : "Email :",
    phone : "Phone : ",
    place : "Place :",
    timework : "Working hours" ,
    days_hours : "Sunday - Thursday : 8 AM - 3 PM " ,
    map_title : "Map For Location",
    
    
  }
};







