import { PhActivity } from "phosphor-vue";

export type TIcon = typeof PhActivity;

export type TIconStyle = Pick<TIcon, "color" | "weight" | "size">;
