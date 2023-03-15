// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: 2a3wwF0VG7yif
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
import TextInput from "../../TextInput"; // plasmic-import: PVcACwPnqF_X/component
import Button from "../../Button"; // plasmic-import: y9_AztIaP_fj/component

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./PlasmicSafeLeads.module.css"; // plasmic-import: 2a3wwF0VG7yif/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: MtQqqjfg8Wq_G/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Yja-nQT_PFt45/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: n8PV4AfpehUQb/icon

export type PlasmicSafeLeads__VariantMembers = {};
export type PlasmicSafeLeads__VariantsArgs = {};
type VariantPropType = keyof PlasmicSafeLeads__VariantsArgs;
export const PlasmicSafeLeads__VariantProps = new Array<VariantPropType>();

export type PlasmicSafeLeads__ArgsType = {};
type ArgPropType = keyof PlasmicSafeLeads__ArgsType;
export const PlasmicSafeLeads__ArgProps = new Array<ArgPropType>();

export type PlasmicSafeLeads__OverridesType = {
  leads?: p.Flex<"section">;
  img?: p.Flex<typeof p.PlasmicImg>;
  form?: p.Flex<"form">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultSafeLeadsProps {
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

function PlasmicSafeLeads__RenderFunc(props: {
  variants: PlasmicSafeLeads__VariantsArgs;
  args: PlasmicSafeLeads__ArgsType;
  overrides: PlasmicSafeLeads__OverridesType;
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssuXxHpH6GpmS()
  });

  return (
    (hasVariant(globalVariants, "screen", "smallestMobile") ? true : true) ? (
      <p.Stack
        as={"section"}
        data-plasmic-name={"leads"}
        data-plasmic-override={overrides.leads}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.leads
        )}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={
            hasVariant(globalVariants, "screen", "desktopOnly")
              ? ("150px" as const)
              : ("130px" as const)
          }
          loading={"lazy" as const}
          src={{
            src: "/plasmic/masteri_sparq/images/httpsAppunbouncecomPublishAssets4E7205Ac893811EdB5B00242A3C829A53U3DeuSparqBlackLogo108C08C000000000000028Png.png",
            fullWidth: 300,
            fullHeight: 300,
            aspectRatio: undefined
          }}
        />

        <form
          data-plasmic-name={"form"}
          data-plasmic-override={overrides.form}
          action={"" as const}
          className={classNames(projectcss.all, sty.form)}
          method={"" as const}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, ["textInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            placeholder={"Enter Your Email Address" as const}
            required={true}
            value={p.generateStateValueProp($state, ["textInput", "value"])}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            link={`/thank-you`}
          >
            {"Claim Free Device"}
          </Button>
        </form>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  leads: ["leads", "img", "form", "textInput", "button"],
  img: ["img"],
  form: ["form", "textInput", "button"],
  textInput: ["textInput"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  leads: "section";
  img: typeof p.PlasmicImg;
  form: "form";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSafeLeads__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSafeLeads__VariantsArgs;
    args?: PlasmicSafeLeads__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSafeLeads__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSafeLeads__ArgsType,
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
          internalArgPropNames: PlasmicSafeLeads__ArgProps,
          internalVariantPropNames: PlasmicSafeLeads__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSafeLeads__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "leads") {
    func.displayName = "PlasmicSafeLeads";
  } else {
    func.displayName = `PlasmicSafeLeads.${nodeName}`;
  }
  return func;
}

export const PlasmicSafeLeads = Object.assign(
  // Top-level PlasmicSafeLeads renders the root element
  makeNodeComponent("leads"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    form: makeNodeComponent("form"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSafeLeads
    internalVariantProps: PlasmicSafeLeads__VariantProps,
    internalArgProps: PlasmicSafeLeads__ArgProps
  }
);

export default PlasmicSafeLeads;
/* prettier-ignore-end */
