import { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
    display: "inline-block",
    width: "fit-content"
};

type SpinnerProps = {
    loading: boolean;
    color?: string;
    size: number;
}

export default function Spinner({ loading, color = "#ffffff", size }: SpinnerProps) {
  return (
    <PulseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  );
}