import {
  TypographyVariants,
  TypographyVariantsOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h7: React.CSSProperties;
    h8: React.CSSProperties;
    h9: React.CSSProperties;
    h10: React.CSSProperties;
    body3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h7: React.CSSProperties;
    h8: React.CSSProperties;
    h9: React.CSSProperties;
    h10: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h9: true;
    h10: true;
    body3: true;
  }
}
