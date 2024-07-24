import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent, e as renderHead, f as renderSlot } from './astro/server_D6jZ2A9c.mjs';
import 'kleur/colors';
/* empty css                         */
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useRef } from 'react';
import { cva } from 'class-variance-authority';
import { useMotionValue, motion, useTransform, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from 'react-tooltip';

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
  return /* @__PURE__ */ jsx("div", { className: "fixed translate-x-[-50%] bottom-9 left-[50%] hidden sm:block", children: /* @__PURE__ */ jsxs(
    Dock,
    {
      magnification: 60,
      direction: "bottom",
      className: "backdrop-blur-sm bg-[#ffffff07] border-neutral-600 gap-5",
      children: [
        /* @__PURE__ */ jsxs(DockIcon, { "data-tooltip-id": "menu", "data-tooltip-content": "Menu", children: [
          /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "avatar.jpg",
              alt: "logo",
              className: "relative rounded-full w-9 hover:scale-150 transition-all duration-200 "
            }
          ) }),
          /* @__PURE__ */ jsx(Tooltip, { id: "menu" })
        ] }),
        /* @__PURE__ */ jsxs(DockIcon, { "data-tooltip-id": "about", "data-tooltip-content": "About", children: [
          /* @__PURE__ */ jsx("a", { href: "/about", children: /* @__PURE__ */ jsx("div", { className: "z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200", children: /* @__PURE__ */ jsxs(
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
          ) }) }),
          /* @__PURE__ */ jsx(Tooltip, { id: "about" })
        ] }),
        /* @__PURE__ */ jsxs(DockIcon, { "data-tooltip-id": "proyectos", "data-tooltip-content": "Proyectos", children: [
          /* @__PURE__ */ jsx("a", { href: "/proyectos", children: /* @__PURE__ */ jsx("div", { className: "z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200", children: /* @__PURE__ */ jsxs(
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
          ) }) }),
          /* @__PURE__ */ jsx(Tooltip, { id: "proyectos" })
        ] }),
        /* @__PURE__ */ jsxs(DockIcon, { "data-tooltip-id": "stack", "data-tooltip-content": "Stack", children: [
          /* @__PURE__ */ jsx("a", { href: "/stack", children: /* @__PURE__ */ jsx("div", { className: "z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200", children: /* @__PURE__ */ jsxs(
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
          ) }) }),
          /* @__PURE__ */ jsx(Tooltip, { id: "stack" })
        ] })
      ]
    }
  ) });
}

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="avatar.jpg"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "TopBlur", $$TopBlur, {})} <div class="container mx-auto sm:py-36 py-24"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "NavMenu", NavMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/components/NavMenu", "client:component-export": "default" })} ${renderComponent($$result, "BottomBlur", $$BottomBlur, {})}  </body> </html>`;
}, "C:/Users/alanb/Desktop/DI-crea/paginas/alanbirru-portafolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
