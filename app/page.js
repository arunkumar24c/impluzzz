import React from "react";
import Blog from "./homecomponent/Blog";
import Logo from "./homecomponent/Logo";
import About from "./homecomponent/About";
import Services from "./homecomponent/Services";
import Skill from "./homecomponent/Skill";
import Company from "./homecomponent/Company";
import Team from "./homecomponent/Team";
import Shipments from "./homecomponent/Shipments";
import Quotes from "./homecomponent/Quotes";
import Testimonial from "./homecomponent/Testimonial";
import Testimonials from "./homecomponent/Testimonials";

export const metadata = {
  title: "Impluzz",
  description: " Description",
};

export default function Home() {
  return (
    <main>
      <Testimonial />
      <Blog />
      <About />
      <Services />
      <Skill />
      <Company />
      <Team />
      <Shipments />
      <Quotes />
      <Testimonials/>
      <Logo />
    </main>
  );
}
