import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="header-container">
          <h1>URM Application</h1>
          <nav>
            <div className="call-to-action">
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">SignUp</a></li>
                <li><a href="roles.html">Roles</a></li>
                <li><a href="https://fascinating-jayasuryaguna.wordpress.com/">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Homepage Content */}
        <section id="homepage">
          <h2>Homepage</h2>
          <p>The URM Application project aims to address the underrepresentation of underrepresented minority (URM)
            candidates in academia by providing a platform that connects academia, URM candidates, diversity,
            equity, and inclusion (DEI) officers, and recruiters. The website serves as a centralized platform that
            facilitates communication, job search, and matching processes. This report provides an in-depth
            understanding of the project, focusing on the entity relationship diagram (ERD) and the system's
            functionality.
          </p>
        </section>

        {/* Goal Content */}
        <section id="goal">
          <h2>Your SUCCESS story is next</h2>
          <div className="tile-container">
            <article className="style1">
              <span className="image">
                <h3 className="text">Surya</h3>
                {/* <img src="/wdm_project/static/images/surya.jpg" alt="" /> */}
              </span>
              <div className="overlay">
                <div className="content">
                  <p className="details">Luffy</p>
                </div>
              </div>
            </article>
            <article class="style1">
              <span class="image">
                <h3 class="text">Sankalp</h3>
                <img src="/wdm_project/static/images/uta_logo.png" alt="" />
              </span>
              <div class="overlay">

                <div class="content">
                  <p>Zoro</p>
                </div>
              </div>
            </article>
            <article class="style1">
              <span class="image">
                <h3 class="text">Shaunak</h3>
                <img src="/wdm_project/static/images/uta_logo.png" alt="" />
              </span>
              <div class="overlay">

                <div class="content">
                  <p>Brook</p>
                </div>
              </div>
            </article>
            <article class="style1">
              <span class="image">
                <h3 class="text">Aditya</h3>
                <img src="/wdm_project/static/images/uta_logo.png" alt="" />
              </span>
              <div class="overlay">

                <div class="content">
                  <p>Sanji</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 URM Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
