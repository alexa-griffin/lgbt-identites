import Html from "components/Html.jsx"
import Header from "components/Header.jsx"

export default props => <Html stylesheet-href="assets/style/orientations.sass"  title="Orientations">
  <Header />
  <section class="content">
    <h1>Orientations</h1>
    <p>An Orientation (sometimes referred to as a sexual orientation, though it does not have to be sexual in nature) is what you like. This generally falls into 3 categories: romantic, sexual, and the ace/aro spectrum. Sexual and romantic attraction are self explanatory with sexual being that which one is aroused by and romantic being that which one loves, generally speaking for any *-sexual there is also a *-romantic and vice versa. The ace/aro (asexual/arosexual) specturm is the orientation lacking one or both of those.</p>
    <div className="orientations">
      {
        props.orientations.map(orientation => <div>
          <div className="flag">
            {
              orientation.colors.map(color => <div style={{
                backgroundColor: color,
                height: 1 / orientation.colors.length * 100 + "%",
              }}></div>)
            }
          </div>
          <div>{ (orientation.type === "sexual" || orientation.type === "both") && <>
            <h3>{ orientation.prefix + "sexual" }</h3>
            <p>{ ((typeof orientation.description) === "function" ? orientation.description() : "Sexually " + orientation.description) }</p>
          </> }</div>
          <div>{ (orientation.type === "romantic" || orientation.type === "both") && <>
            <h3>{ orientation.prefix + "romantic" }</h3>
            <p>{ ((typeof orientation.description) === "function" ? orientation.description() : "Romantically " + orientation.description) }</p>
          </> }</div>
          { orientation.note && <p>*{orientation.note}</p> }
        </div>)
      }
    </div>
  </section>
</Html>