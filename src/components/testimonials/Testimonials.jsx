import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Web Development",
      title: "",
      icon: "assets/globe.png",
      desc:
        "Web development imply designing, building, integrating, scaling and maintaining software that work via intranet or internet. A full-stack web development startup company with 4 years of experience in the field.",
    },
    {
      id: 2,
      name: "Web Design",
      title: "",
      icon: "assets/Writing.png",
      desc:
        "Our team tailors our web design services to your company and its unique needs. That’s why you can customize every feature of our services to your company, products or services, and goals.",
      featured: true,
    },
    {
      id: 3,
      name: "Responsive Web Apps",
      title: "",
      icon: "assets/mobile.png",
      desc:
        "Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Services</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <h4>{d.name}</h4>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
