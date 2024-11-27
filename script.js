const routes = {
  home: '<h1>Welcome to Home Page</h1>',
  about: '<h1>About Us</h1><p>This is the about page.</p>',
  contact: '<h1>Contact Us</h1><p>Email us at contact@example.com</p>',
};

function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = routes[page] || '<h1>Page not found</h1>';
}

// Set default page
navigate('home');