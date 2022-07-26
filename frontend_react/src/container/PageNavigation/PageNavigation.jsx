import React from "react";
// Components
import { SocialMedia, DotNavigation } from "../../components";
// Styles
import "./PageNavigation.scss";
const PageNavigation = ({ children }) => (
  <div className="page-navigation">
    <SocialMedia />
    {children}
    <DotNavigation />
  </div>
);

export default PageNavigation;
