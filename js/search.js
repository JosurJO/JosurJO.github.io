document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.nav-center input');
  const searchButton = document.querySelector('.nav-center button');
  
  const pageMap = {
      'about': 'about_en.html',
      'contact': 'contact_en.html',
      'volunteer': 'support_en.html',
      'prayer': 'prayer_en.html',
      'committees': 'comm_en.html',
      'home': 'josur_en.html'
  };

  function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      if (!searchTerm) {
          alert('Please enter a search term');
          return;
      }

      if (pageMap[searchTerm]) {
          window.location.href = pageMap[searchTerm];
      } else {
          // Try partial matches
          for (const [key, url] of Object.entries(pageMap)) {
              if (searchTerm.includes(key)) {
                  window.location.href = url;
                  return;
              }
          }
          alert('No matching page found. Try: about, contact, volunteer, prayer, committees');
      }
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
});