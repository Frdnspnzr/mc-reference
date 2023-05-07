import lume from "lume/mod.ts";
import json from "lume/plugins/json.ts";

const site = lume();
site.use(json()).copy("static").ignore("README.md");

export default site;
