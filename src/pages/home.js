import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav
          id="scrollspy"
          className="navbar page-navbar navbar-dark navbar-expand-md fixed-top"
          data-spy="affix"
          data-offset-top="20"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <strong className="text-primary">RU</strong>
              <span className="text-light">BIC</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#review">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-primary text-dark shadow-none ml-md-4"
                    href="components.html"
                  >
                    Components
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="header d-flex justify-content-center">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-md-7">
                <div className="header-content">
                  <h3 className="header-title">
                    <strong className="text-primary">RU</strong>
                    <span>BIC</span>
                  </h3>
                  <h4 className="header-subtitle">
                    Creative Mylti-purpose Bootstrap theme{" "}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi dolores voluptatem voluptatum adipisci vel, beatae
                    unde! Mollitia voluptatum, ullam quisquam optio!
                  </p>
                  <button className="btn btn-outline-light btn-flat">
                    Download
                  </button>
                </div>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <form className="header-form">
                  <div className="head">
                    Try your <span className="text-primary">Free</span> trial
                    today.
                  </div>
                  <div className="body">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password*"
                      />
                    </div>
                  </div>
                  <div className="footer">
                    <button className="btn btn-primary btn-block">
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div className="social-wrapper" id="features">
          <div className="container">
            <div className="social-txt">
              <h6 className="title">Social Media</h6>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus voluptate numquam sed expedita vitae ipsa?
              </p>
            </div>
            <div className="social-links">
              <a href="" className="link">
                <i className="ti-facebook"></i>
              </a>
              <a href="" className="link">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="" className="link">
                <i className="ti-google"></i>
              </a>
              <a href="" className="link">
                <i className="ti-pinterest-alt"></i>
              </a>
              <a href="" className="link">
                <i className="ti-instagram"></i>
              </a>
              <a href="" className="link">
                <i className="ti-rss"></i>
              </a>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-lg-8">
                <div className="tabs-container">
                  <ul className="nav tab-nav" id="pills-tab">
                    <li className="item">
                      <a
                        className="link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        aria-selected="true"
                      >
                        Tab 1
                      </a>
                    </li>
                    <li className="item">
                      <a
                        className="link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        aria-selected="false"
                      >
                        Tab 2
                      </a>
                    </li>
                    <li className="item">
                      <a
                        className="link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        aria-selected="false"
                      >
                        Tab 3
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-home">
                      <h4 className="title">Some Title</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam repellendus esse consectetur possimus
                        voluptatem veniam quas ducimus ullam deleniti? Possimus,
                        unde eveniet suscipit perspiciatis dicta numquam
                        voluptate fuga id, optio.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit tempore molestiae excepturi commodi ullam
                        provident, optio dicta, nulla officiis consectetur
                        soluta et officia neque odio blanditiis aspernatur cum
                        cumque error?
                      </p>

                      <button className="btn btn-primary mt-3">Download</button>
                    </div>
                    <div className="tab-pane fade" id="pills-profile">
                      <h4 className="title">Another Title</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Velit unde totam nostrum, sunt accusamus in
                        delectus aspernatur, nisi eligendi ipsum eum! Aspernatur
                        recusandae nihil rem qui quam vero, saepe inventore
                        tempora? Necessitatibus corporis, nam minus reiciendis
                        rerum? Eius voluptatem facilis, vitae minima modi
                        corrupti ullam, temporibus vel eum fugit inventore
                        obcaecati provident ratione, ab aliquid perspiciatis
                        commodi, autem in nemo.
                      </p>
                      <p>
                        <strong>
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sit tempore molestiae excepturi commodi ullam
                        provident, optio dicta, nulla officiis consectetur
                        soluta et officia neque odio blanditiis aspernatur cum
                        cumque error?
                      </p>
                    </div>
                    <div className="tab-pane fade" id="pills-contact">
                      <h4 className="title">Some Other </h4>
                      <p>
                        Consectetur amet architecto, temporibus, debitis impedit
                        dolore eius. Enim alias beatae architecto iusto incidunt
                        pariatur reprehenderit impedit ipsum ex at deserunt,
                        inventore corrupti rerum eius obcaecati. Itaque
                        repellendus illum aut beatae ex quasi doloremque
                        voluptatem. Numquam at possimus, obcaecati, voluptas aut
                        vel nam recusandae pariatur error illum quaerat sunt!
                        Ipsam rerum enim hic atque nemo debitis, voluptate
                        obcaecati inventore culpa. Odit adipisci eos natus
                        fugiat. Id, deserunt qui aliquam? Provident tempora
                        repellat, repellendus consequatur quia dolor at dolore
                        temporibus esse in rem ea necessitatibus quo nesciunt
                        eos a dolorum voluptates, tenetur non eius quasi! Autem
                        provident amet, maiores tenetur, eveniet dicta, laborum
                        odio velit sint consequatur beatae nemo at! Aperiam
                        magnam eveniet rerum, optio consequuntur quas maiores
                        ullam necessitatibus nesciunt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block align-self-center">
                <img
                  src="assets/imgs/eiffel-tower.svg"
                  alt=""
                  className="w-100 tower"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-5 align-self-center mb-4 mb-md-0">
                <img
                  src="assets/imgs/img.jpg"
                  alt=""
                  className="shadow w-100"
                />
              </div>
              <div className="col-md-6 col-lg-5">
                <h6 className="title">Section with Media list</h6>
                <p>
                  Consectetur adipisicing elit. Quam odit odio et neque
                  perferendis perspiciatis magnam hic ut facilis
                  possimus!consectetur adipisicing elit. Impedit repellat ipsam
                  quaerat error odit commodi.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="media">
                    <div className="circle-40 mr-3 mt-1">
                      <i className="ti-gift"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-2">List-based media object</h6>
                      <p>Cras sit amet nibh libero, in gravida nulla.</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="circle-40 mr-3 mt-1">
                      <i className="ti-face-smile"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-2">Another one</h6>
                      <p>
                        Cras in gravida nulla. Nulla vel metus scelerisque ante
                        sollicitudin.
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="circle-40 mr-3 mt-1">
                      <i className="ti-microphone"></i>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-2">One more</h6>
                      <p>
                        Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-5 align-self-center">
                <h6 className="title">Standard Picture Section</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio ut voluptatum ipsum. Rerum fuga cumque illo nihil
                  nobis vero ducimus, animi voluptatum nemo facilis quae quia
                  odit accusantium doloremque? Totam.
                </p>
                <p>
                  <strong>
                    Adipisicing elit. Quos ad doloribus numquam cum odio
                    dolorem!
                  </strong>
                </p>
                <p>
                  Rerum fuga cumque consectetur adipisicing elit. Pariatur quis
                  ipsum facere officiis magni ullam quasi fuga magnam dicta
                  quas.
                </p>
              </div>
              <div className="col-md-5 mt-4 mt-md-0">
                <img
                  src="assets/imgs/img1.jpg"
                  alt=""
                  className="shadow w-100"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container text-center">
            <h6 className="display-4 has-line">WHY THIS IS AWESOME</h6>
            <p className="mb-5 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="row">
              <div className="col-lg-4">
                <div className="circle-100 mb-3">
                  <i className="ti-light-bulb"></i>
                </div>
                <h6 className="title mb-3">Thoughtful Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eveniet laborum, vero doloremque sunt tempora.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="circle-100 mb-3">
                  <i className="ti-paint-bucket"></i>
                </div>
                <h6 className="title mb-3">WELL CRAFTED</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eveniet laborum, vero doloremque sunt tempora.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="circle-100 mb-3">
                  <i className="ti-marker-alt"></i>
                </div>
                <h6 className="title mb-3">EASY TO CUSTOMIZE</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eveniet laborum, vero doloremque sunt tempora.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="pricing">
          <div className="container text-center">
            <h6 className="display-4 has-line">PRICING OPTIONS</h6>
            <p className="mb-5 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="row pt-5">
              <div className="col-lg-4">
                <a href="" className="pricing-card">
                  <div className="head">Basib</div>
                  <div className="body">
                    <h1>
                      <small>$</small>0
                    </h1>
                    <p>Free for Life</p>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">1 GB OF SPACE</li>
                    <li className="list-group-item">10 GB OF BANDWIDTH</li>
                    <li className="list-group-item">3 WEBSITES</li>
                    <li className="list-group-item">BASIC CUSTOMIZATION</li>
                    <li className="list-group-item">WORDPRESS INTEGRATION</li>
                    <li className="list-group-item">EMAIL SUPPORT</li>
                  </ul>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="" className="pricing-card popular">
                  <div className="head">Professional</div>
                  <div className="body">
                    <h1>
                      <small>$</small>14.99
                    </h1>
                    <p>Monthly Payment</p>
                  </div>
                  <div className="popular-item">OUR MOST POPULAR</div>
                  <ul className="list-group">
                    <li className="list-group-item">5 GB OF SPACE</li>
                    <li className="list-group-item">50 GB OF BANDWIDTH</li>
                    <li className="list-group-item">10 WEBSITES</li>
                    <li className="list-group-item">ADVANCED CUSTOMIZATION</li>
                    <li className="list-group-item">WORDPRESS INTEGRATION</li>
                    <li className="list-group-item">EMAIL SUPPORT</li>
                  </ul>
                </a>
              </div>
              <div className="col-lg-4">
                <a href="" className="pricing-card">
                  <div className="head">Enterprise</div>
                  <div className="body">
                    <h1>
                      <small>$</small>99
                    </h1>
                    <p>Monthly Payment</p>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">UNLIMITED OF SPACE</li>
                    <li className="list-group-item">UNLIMITED BANDWIDTH</li>
                    <li className="list-group-item">120 WEBSITES</li>
                    <li className="list-group-item">ADVANCED CUSTOMIZATION</li>
                    <li className="list-group-item">WORDPRESS INTEGRATION</li>
                    <li className="list-group-item">EMAIL SUPPORT</li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="review">
          <div className="container text-center">
            <h6 className="display-4 has-line">
              WHAT OUR CUSTOMERS ARE SAYING
            </h6>
            <p className="mb-5 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="row text-left">
              <div className="col-md-4">
                <div className="testmonial">
                  <p className="description">
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi, eaque, repellat. Corporis facilis
                      reprehenderit, cupiditate.
                    </i>
                  </p>
                  <div className="media">
                    <img
                      className="mr-3"
                      src="assets/imgs/avatar1.jpg"
                      width="60"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="title">Emma Re</h6>
                      <p className="text-muted">Web Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testmonial">
                  <p className="description">
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi, eaque, repellat. Corporis facilis
                      reprehenderit, cupiditate.
                    </i>
                  </p>
                  <div className="media">
                    <img
                      className="mr-3"
                      src="assets/imgs/avatar2.jpg"
                      width="60"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="title">John Doe</h6>
                      <p className="text-muted">Freelancer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testmonial">
                  <p className="description">
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi, eaque, repellat. Corporis facilis
                      reprehenderit, cupiditate.
                    </i>
                  </p>
                  <div className="media">
                    <img
                      className="mr-3"
                      src="assets/imgs/avatar3.jpg"
                      width="60"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="title">Emily Roe</h6>
                      <p className="text-muted">Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-img-bg text-center">
          <div className="container">
            <h6 className="display-3 has-line">STYLISH AXURE DESIGN</h6>
            <h5 className="mb-5 font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, itaque.
            </h5>
            <button className="btn btn-outline-light btn-flat">Download</button>
          </div>
        </section>
        <section className="section" id="contact">
          <div className="container text-center">
            <h6 className="display-4 has-line">CONTACT US</h6>
            <p className="mb-5 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form>
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-group pb-1">
                    <input
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group pb-1">
                    <input
                      type="email"
                      className="form-control"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="7"
                    className="form-control"
                    required
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Send Message"
              />
            </form>
          </div>
        </section>
        <footer className="footer py-4 bg-dark text-light">
          <div className="container text-center">
            <p className="mb-4 small">
              Copyright{" "}
              <script>document.write(new Date().getFullYear())</script> &copy;{" "}
              <a href="http://www.devcrud.com">DevCRUD</a>
            </p>
            <div className="social-links">
              <a href="" className="link">
                <i className="ti-facebook"></i>
              </a>
              <a href="" className="link">
                <i className="ti-twitter-alt"></i>
              </a>
              <a href="" className="link">
                <i className="ti-google"></i>
              </a>
              <a href="" className="link">
                <i className="ti-pinterest-alt"></i>
              </a>
              <a href="" className="link">
                <i className="ti-instagram"></i>
              </a>
              <a href="" className="link">
                <i className="ti-rss"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
