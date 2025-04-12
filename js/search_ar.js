document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.nav-center input');
  const searchButton = document.querySelector('.nav-center button');
  
  const pageMap = {
      'من نحن': 'about.html',
      'نبذة': 'about.html',
      'عن': 'about.html',
      'تواصل': 'contact.html',
      'اتصل': 'contact.html',
      'دعم': 'support.html',
      'متطوع': 'support.html',
      'تطوع': 'support.html',
      'صلاة': 'prayer.html',
      'جمعة': 'prayer.html',
      'خطبة': 'prayer.html',
      'هيكل': 'comm.html',
      'لجان': 'comm.html',
      'اداري': 'comm.html',
      'رئيسي': 'josur1.html',
      'رئيسية': 'josur1.html'
  };

  function performSearch() {
      const searchTerm = searchInput.value.trim();
      
      if (!searchTerm) {
          alert('الرجاء إدخال كلمة بحث');
          return;
      }

      // Check for exact matches first
      if (pageMap[searchTerm]) {
          window.location.href = pageMap[searchTerm];
          return;
      }

      // Check for partial matches in Arabic
      for (const [key, url] of Object.entries(pageMap)) {
          if (searchTerm.includes(key)) {
              window.location.href = url;
              return;
          }
      }

      alert('لم يتم العثور على صفحة مطابقة. جرب: من نحن، تواصل، دعم، صلاة، هيكل');
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
});