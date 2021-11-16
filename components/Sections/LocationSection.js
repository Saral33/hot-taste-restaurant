import Animate from '../Animations/Animate';
import Card from '../Utils/Card';
const LocationSection = () => {
  return (
    <section className="location-section">
      <Animate
        type="left-right"
        initx="-80vw"
        finalx={0}
        style={{ color: '#f5deee' }}
        className="section-header"
      >
        Find us at your hometown
      </Animate>
      <div className="section__contents">
        <Animate
          type="left-right"
          initx="80vw"
          finalx="0"
          className="section__para"
          style={{ padding: '0 20rem', color: '#fff', fontWeight: '100' }}
        >
          Currently we are open in six cities. We will expand in more cities in
          upcoming future. Our goal is to open branch in many cities as possible
          to provide our awesome taste to make you happy. Stay tuned and wait
          for us.
        </Animate>
        <div className="card__container">
          <Card
            nolink
            image="/images/ktm.jpg"
            title="Kathmandu, Nepal"
            communication="+977 9812309855"
            staffs="143 fulltime staffs"
            time="8:00 AM - 10:00 PM"
          />
          <Card
            nolink
            image="/images/beijing.jpg"
            title="Beijing, China"
            communication="+86 16532921067"
            staffs="35 fulltime staffs"
            time="8:00 AM - 8:00 PM"
          />
          <Card
            nolink
            image="/images/barcelona.jpg"
            title="Barcelona, Spain"
            communication="+34 651 017 627"
            staffs="59 fulltime staffs"
            time="8:00 AM - 10:00 PM"
          />
          <Card
            nolink
            image="/images/newyork.jpg"
            title="New York, USA"
            communication="+1 555 663 1252"
            staffs="111 fulltime staffs"
            time="8:00 AM - 12:00 PM"
          />

          <Card
            nolink
            image="/images/tokyo.jpg"
            title="Tokyo, Japan"
            communication="+81 75 056 0464"
            staffs="48 fulltime staffs"
            time="9:00 AM - 11:00 PM"
          />
          <Card
            nolink
            image="/images/berlin.jpg"
            title="Berlin, Germany"
            communication="+49 30 380328308"
            staffs="69 fulltime staffs"
            time="8:30 AM - 11:00 PM"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
