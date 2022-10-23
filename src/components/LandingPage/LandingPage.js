
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <section className="LandingPage">
        {/* banner Page
    ==========================================*/}
        <section id="home-banner" className="leviolet">
          <div className="content">
            <div className="container" data-wow-duration="1s">
              {" "}
              <span className="wow fadeIn" />
              <h1 className="wow fadeInUp">
                Accompagner <span>aujourd'hui</span> pour la décentralisation{" "}
                <span>de demain.</span>
                <br /> <br />
                We <span id="typed" />.
              </h1>
              {/* Mettre effet dynamique et remplacer régulierement "décentralisation" par "souveraineté"
ou autres mots " " 
et pour le "Build" changer dynamiquement par "create" ou d'autres mots */}
            </div>
          </div>
          <div className="arrow bounce">
            <a id="flecheanime" href="#about-us-block">
              <i className="fa fa-arrow-down fa-2x" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
export default LandingPage;