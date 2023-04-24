import lume from "lume/mod.ts";

const site = lume();
site.copy("static");
site.ignore("README.md");

export default site;
