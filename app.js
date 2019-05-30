const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

// Home State
// Modify the UI depending on where we are
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a jumbotron to test the home page state.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About Benneee';
  document.querySelector('#content').innerHTML = `
    <h3> This is a page about Benneee</h3>
    <p> 
      Benneee is a front-end developer cum civil engineer passionate about building productivity
      and engineering related tools to help people live an easier life and just enjoy things.
    </p>
  `;
};

const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact Benneee';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label> Name </label>
          <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label> Email Address </label>
          <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
     </form> 
  `;
};

// Instantiate the page state
const page = new PageState();

// Initialise the first state
page.init();

// Need to create event listeners to display any of the pages on the navbar that is clicked
// Variables from the UI

function choosePage(id, displaPage) {
  document.getElementById(id).addEventListener('click', displaPage);
}

choosePage('home', displayHome);
function displayHome(e) {
  page.change(new homeState());

  e.preventDefault();
}

choosePage('about', displayAbout);
function displayAbout(e) {
  page.change(new aboutState());

  e.preventDefault();
}

choosePage('contact', displayContact);
function displayContact(e) {
  page.change(new contactState());

  e.preventDefault();
}
