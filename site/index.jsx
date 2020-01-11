import Html from "components/Html.jsx"
import Header from "components/Header.jsx"


export default props => 
<Html stylesheet-href="assets/style/home.sass" title="Lgbt Identities">
  <Header />
  <section className="hero">
    <h1>LGBTQ+ Identites and Orientations</h1>
    <p>Because people have trouble remembering every identity or orientation out there I have created this website as a reference. <br/>
    If there is something I have missed or am mistaken please feel free to <a href="https://github.com/alexa-griffin/lgbt-identites/issues">open an issue</a></p>
    <p>This website was made as a test for <a href="https://www.npmjs.com/package/jsx-static">jsx-static</a>.</p>
    <div className="categories">
      <a href="">Identities</a>
      <a href="orientations.jsx">Orientations</a>
    </div>
  </section>
</Html>
