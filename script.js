// your code here
 document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      
      var name = document.getElementById('name').value;
      var year = document.getElementById('year').value;
      var url = document.getElementById('url');
      
      // Update the URL with the appropriate query string
      url.textContent = 'https://localhost:8080/?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
    });