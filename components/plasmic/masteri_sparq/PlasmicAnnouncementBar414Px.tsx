// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: me5Xm7f3OgReD
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./PlasmicAnnouncementBar414Px.module.css"; // plasmic-import: me5Xm7f3OgReD/css

export type PlasmicAnnouncementBar414Px__VariantMembers = {};
export type PlasmicAnnouncementBar414Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicAnnouncementBar414Px__VariantsArgs;
export const PlasmicAnnouncementBar414Px__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAnnouncementBar414Px__ArgsType = {};
type ArgPropType = keyof PlasmicAnnouncementBar414Px__ArgsType;
export const PlasmicAnnouncementBar414Px__ArgProps = new Array<ArgPropType>();

export type PlasmicAnnouncementBar414Px__OverridesType = {
  div73?: p.Flex<"div">;
  freeShippingOnOrdersOver65?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultAnnouncementBar414PxProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAnnouncementBar414Px__RenderFunc(props: {
  variants: PlasmicAnnouncementBar414Px__VariantsArgs;
  args: PlasmicAnnouncementBar414Px__ArgsType;
  overrides: PlasmicAnnouncementBar414Px__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssuXxHpH6GpmS()
  });

  return (
    <div
      data-plasmic-name={"div73"}
      data-plasmic-override={overrides.div73}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div73
      )}
    >
      <div
        data-plasmic-name={"freeShippingOnOrdersOver65"}
        data-plasmic-override={overrides.freeShippingOnOrdersOver65}
        className={classNames(projectcss.all, sty.freeShippingOnOrdersOver65)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {hasVariant(globalVariants, "screen", "largestMobile")
            ? "FREE SHIPPING ON ORDERS OVER $65"
            : "FREE SHIPPING ON ORDERS OVER $65"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div73: ["div73", "freeShippingOnOrdersOver65", "text"],
  freeShippingOnOrdersOver65: ["freeShippingOnOrdersOver65", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div73: "div";
  freeShippingOnOrdersOver65: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAnnouncementBar414Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAnnouncementBar414Px__VariantsArgs;
    args?: PlasmicAnnouncementBar414Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAnnouncementBar414Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAnnouncementBar414Px__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAnnouncementBar414Px__ArgProps,
          internalVariantPropNames: PlasmicAnnouncementBar414Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAnnouncementBar414Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div73") {
    func.displayName = "PlasmicAnnouncementBar414Px";
  } else {
    func.displayName = `PlasmicAnnouncementBar414Px.${nodeName}`;
  }
  return func;
}

export const PlasmicAnnouncementBar414Px = Object.assign(
  // Top-level PlasmicAnnouncementBar414Px renders the root element
  makeNodeComponent("div73"),
  {
    // Helper components rendering sub-elements
    freeShippingOnOrdersOver65: makeNodeComponent("freeShippingOnOrdersOver65"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicAnnouncementBar414Px
    internalVariantProps: PlasmicAnnouncementBar414Px__VariantProps,
    internalArgProps: PlasmicAnnouncementBar414Px__ArgProps
  }
);

export default PlasmicAnnouncementBar414Px;
/* prettier-ignore-end */
