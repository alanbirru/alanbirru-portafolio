import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, d as renderComponent, e as renderSlot, f as createAstro } from '../chunks/astro/server_CDjah9KZ.mjs';
import 'kleur/colors';
/* empty css                                 */
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { useMotionValue, motion, useTransform, useSpring, useAnimation, useInView } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { $ as $$Image } from '../chunks/_astro_assets_CaI57A1d.mjs';
export { renderers } from '../renderers.mjs';

const $$TopBlur = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 w-full bg-[#00000000] h-6 backdrop-blur-sm z-10 backdrop-filter"></div>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/TopBlur.astro", void 0);

const $$BottomBlur = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-0 w-full bg-[#00000000] h-6 backdrop-blur-sm z-10 backdrop-filter"></div>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/BottomBlur.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const dockVariants = cva(
  "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800"
);
const Dock = React.forwardRef(
  ({
    className,
    children,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    direction = "bottom",
    ...props
  }, ref) => {
    const mouseX = useMotionValue(Infinity);
    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          mouseX,
          magnification,
          distance
        });
      });
    };
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        onMouseMove: (e) => mouseX.set(e.pageX),
        onMouseLeave: () => mouseX.set(Infinity),
        ...props,
        className: cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom"
        }),
        children: renderChildren()
      }
    );
  }
);
Dock.displayName = "Dock";
const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );
  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      style: { width },
      className: cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      ),
      ...props,
      children
    }
  );
};
DockIcon.displayName = "DockIcon";

function NavMenu() {
  const size = "28";
  const stroke = "1.3";
  return /* @__PURE__ */ jsx("div", { className: "fixed translate-x-[-50%] bottom-9 left-[50%]", children: /* @__PURE__ */ jsxs(
    Dock,
    {
      direction: "middle",
      className: " gap-6 backdrop-blur-sm bg-[#ffffff07] border-neutral-600",
      children: [
        /* @__PURE__ */ jsx(DockIcon, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "avatar.jpg",
            alt: "logo",
            className: "relative rounded-full w-12 shine-effect "
          }
        ) }),
        /* @__PURE__ */ jsx(DockIcon, { children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: stroke,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-user",
            children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
              /* @__PURE__ */ jsx("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(DockIcon, { children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: stroke,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-code",
            children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M7 8l-4 4l4 4" }),
              /* @__PURE__ */ jsx("path", { d: "M17 8l4 4l-4 4" }),
              /* @__PURE__ */ jsx("path", { d: "M14 4l-4 16" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(DockIcon, { children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: stroke,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-stack-3",
            children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M12 2l-8 4l8 4l8 -4l-8 -4" }),
              /* @__PURE__ */ jsx("path", { d: "M4 10l8 4l8 -4" }),
              /* @__PURE__ */ jsx("path", { d: "M4 18l8 4l8 -4" }),
              /* @__PURE__ */ jsx("path", { d: "M4 14l8 4l8 -4" })
            ]
          }
        ) })
      ]
    }
  ) });
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "TopBlur", $$TopBlur, {})} <div class="container mx-auto sm:py-36 py-24"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "NavMenu", NavMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/NavMenu", "client:component-export": "default" })} ${renderComponent($$result, "BottomBlur", $$BottomBlur, {})} </body></html>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/layouts/Layout.astro", void 0);

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
Soy diseñador web y frontend <br data-astro-cid-3ef6ksr2> sit amet consectetur adipisicing elit.
      Delectus, fugiat.
</p> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="inline-block p-1 rounded-md mb-3" data-astro-cid-3ef6ksr2> <div class="m-0 flex items-center justify-center" data-astro-cid-3ef6ksr2> <div class="pr-1" data-astro-cid-3ef6ksr2> <span class="pulse green" data-astro-cid-3ef6ksr2></span> </div> <span class="text-xs inline-block" data-astro-cid-3ef6ksr2>
Disponible para nuevos proyectos</span> </div> </div> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": boxColor, "duration": 0.4, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="text-neutral-400 flex gap-5 mb-11 py-2" data-astro-cid-3ef6ksr2> <a href="https://github.com/alanbirru" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26    " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" data-astro-cid-3ef6ksr2> <title>github icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="mailto:alanb_99@hotmail.com" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail" data-astro-cid-3ef6ksr2> <title>email icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-3ef6ksr2></path> <path d="M3 7l9 6l9 -6" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://www.linkedin.com/in/alan-birrueta-176a4223" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" data-astro-cid-3ef6ksr2> <title>linkedin icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-astro-cid-3ef6ksr2></path> <path d="M8 11l0 5" data-astro-cid-3ef6ksr2></path> <path d="M8 8l0 .01" data-astro-cid-3ef6ksr2></path> <path d="M12 16l0 -5" data-astro-cid-3ef6ksr2></path> <path d="M16 16v-3a2 2 0 0 0 -4 0" data-astro-cid-3ef6ksr2></path> </svg> </a> <a href="https://wa.link/wvb56g" target="_blank" class="hover:-translate-y-1 transition duration-200 shadow-lg hover:text-primary" data-astro-cid-3ef6ksr2> <svg target="_blank" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp" data-astro-cid-3ef6ksr2> <title>whatsapp icon</title> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-3ef6ksr2></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-3ef6ksr2></path></svg> </a> </div> ` })} ${renderComponent($$result, "BoxReveal", BoxReveal, { "boxColor": "#fff", "duration": 0.5, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/magicui/box-reveal", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a href="curriculum.pdf" download="Alan-Birrueta-Curriculum.pdf" target="_blank" class="rounded-md px-3 py-2 border inline-block hover:border-primary hover:bg-[#c1fe0c23] transition-all duration-500" data-astro-cid-3ef6ksr2>Descargar cv</a> ` })} </div> `;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/Header.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alan Birrueta | Desarrollo web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Header", $$Header, {})} </main> ` })}`;
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
