import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6jZ2A9c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_nB3sirVL.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alan Birrueta | Proyectos", "description": "Proyectos que he realizado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>Proyectos</main> ` })}`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
