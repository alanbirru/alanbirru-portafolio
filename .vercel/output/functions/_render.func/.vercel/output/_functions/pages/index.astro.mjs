import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from '../chunks/astro/server_D6jZ2A9c.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_nB3sirVL.mjs';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { $ as $$Image } from '../chunks/_astro_assets_CSsF0mUw.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor,
  duration
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);
  return /* @__PURE__ */ jsxs("div", { ref, style: { position: "relative", width, overflow: "hidden" }, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        },
        initial: "hidden",
        animate: mainControls,
        transition: { duration: duration ? duration : 0.5, delay: 0.25 },
        children
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: {
          hidden: { left: 0 },
          visible: { left: "100%" }
        },
        initial: "hidden",
        animate: slideControls,
        transition: { duration: duration ? duration : 0.5, ease: "easeIn" },
        style: {
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor ? boxColor : "#5046e6"
        }
      }
    )
  ] });
};

const AvatarImg = new Proxy({"src":"/_astro/avatar.q2dZkbhS.jpg","width":432,"height":432,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/images/avatar.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$AvatarIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AvatarIcon;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative rounded-full w-12 shine-effect ${className}`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": AvatarImg, "alt": "avatar", "loading": "eager", "class": "rounded-full w-full h-full" })} </div>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/icons/AvatarIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const boxColor = "#c2fe0c";
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-3ef6ksr2> ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.2, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AvatarIcon", $$AvatarIcon, { "className": "mb-3", "data-astro-cid-3ef6ksr2": true })} ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <span class="font-bold text-3xl inline-block mb-1" data-astro-cid-3ef6ksr2><span class="text-primary" data-astro-cid-3ef6ksr2> Alan</span> Birrueta</span> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <p class="mb-3" data-astro-cid-3ef6ksr2>
Desarrollador web en Mazatlán, creando sitios únicos y funcionales. <br data-astro-cid-3ef6ksr2>
Explora mi portafolio y transforma tu idea en un sitio web profesional.
</p> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="inline-block p-1 rounded-md mb-3" data-astro-cid-3ef6ksr2> <div class="m-0 flex items-center justify-center" data-astro-cid-3ef6ksr2> <div class="pr-1" data-astro-cid-3ef6ksr2> <span class="pulse green" data-astro-cid-3ef6ksr2></span> </div> <span class="text-xs inline-block" data-astro-cid-3ef6ksr2>
Disponible para nuevos proyectos</span> </div> </div> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.4, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="text-neutral-400 flex gap-5 mb-11 py-2" data-astro-cid-3ef6ksr2> <a href="https://github.com/alanbirru" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26    " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" data-astro-cid-3ef6ksr2> <title>github icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="mailto:alanb_99@hotmail.com" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail" data-astro-cid-3ef6ksr2> <title>email icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-3ef6ksr2></path> <path d="M3 7l9 6l9 -6" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://www.linkedin.com/in/alan-birrueta-176a4223" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" data-astro-cid-3ef6ksr2> <title>linkedin icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-astro-cid-3ef6ksr2></path> <path d="M8 11l0 5" data-astro-cid-3ef6ksr2></path> <path d="M8 8l0 .01" data-astro-cid-3ef6ksr2></path> <path d="M12 16l0 -5" data-astro-cid-3ef6ksr2></path> <path d="M16 16v-3a2 2 0 0 0 -4 0" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://wa.link/wvb56g" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg target="_blank" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp" data-astro-cid-3ef6ksr2> <title>whatsapp icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-3ef6ksr2></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-3ef6ksr2></path></svg> </a> </div> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": "#fff", "duration": 0.5, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a href="curriculum.pdf" download="Alan-Birrueta-Curriculum.pdf" target="_blank" class="rounded-md px-3 py-2 border inline-block hover:border-primary hover:bg-[#c1fe0c23] transition-all duration-500" data-astro-cid-3ef6ksr2>Descargar cv</a> ` })} </div> `;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/Header.astro", void 0);

const $$BentoGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex gap-4 flex-wrap pt-24 justify-center items-center"> <article class="w-[500px] h-[200px] rounded-lg bg-gradient-to-r from-[#191a1c] to-[#141516] border border-neutral-800"></article> <article class="w-[500px] h-[200px] rounded-lg bg-gradient-to-r from-[#191a1c] to-[#141516] border border-neutral-800"></article> <article class="w-[500px] h-[200px] rounded-lg bg-gradient-to-r from-[#191a1c] to-[#141516] border border-neutral-800"></article> <article class="w-[500px] h-[200px] rounded-lg bg-gradient-to-r from-[#191a1c] to-[#141516] border border-neutral-800"></article> </section>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/BentoGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alan Birrueta | Desarrollo web", "description": "Desarrollador web en Mazatl\xE1n, creando sitios \xFAnicos y funcionales. Explora mi portafolio y transforma tu idea en un sitio web profesional." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "BentoGrid", $$BentoGrid, {})} </main> ` })}`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
