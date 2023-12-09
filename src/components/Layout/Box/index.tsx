import { ComponentPropsWithRef, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
