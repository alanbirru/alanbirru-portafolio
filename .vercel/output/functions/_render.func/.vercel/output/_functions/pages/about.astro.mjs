import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6jZ2A9c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_nB3sirVL.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alan Birrueta | About", "description": "Desarrollador web en Mazatl\xE1n, creando sitios \xFAnicos y funcionales. Explora mi portafolio y transforma tu idea en un sitio web profesional." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>About</main> ` })}`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
