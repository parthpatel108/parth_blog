const Config = {
  brandsColors: {
    default: "#171717",
    cxosync: "#22518a",
    hr: "#22518a",
    cx: "#22518a",
    ciosynergy: "#149cea",
    fintechcio: "#149cea",
    ciohealth: "#0273b2",
    secureciso: "#dc0000",
    fintechciso: "#dc0000",
    cmoorg: "#eb962d",
    cmodinners: "#ec671b",
    cfoorg: "#47b946",
    merchantorg: "#f0823b",
    eps: "#00b3e2",
    dinners: "#9254FF",
    cxosports: "#00ff00",
    cxostories: "#149cea",
    panels: "#149cea",
    notice: "#00ff00",
    white: "#ffffff",
  },
};
export const BrandColor = (name) => {
  switch (name) {
    case "cxosync":
      return Config.brandsColors.cxosync;
    case "ciosynergy":
      return Config.brandsColors.ciosynergy;
    case "fintechcio":
      return Config.brandsColors.fintechcio;
    case "ciohealth":
      return Config.brandsColors.ciohealth;
    case "secureciso":
      return Config.brandsColors.secureciso;
    case "fintechciso":
      return Config.brandsColors.fintechciso;
    case "cfo.org":
      return Config.brandsColors.cfoorg;
    case "cmo.org":
      return Config.brandsColors.cmoorg;
    case "merchant.org":
      return Config.brandsColors.merchantorg;
    case "hr":
      return Config.brandsColors.hr;
    case "cx":
      return Config.brandsColors.cx;
    case "eps":
      return Config.brandsColors.eps;
    case "cxosports":
      return Config.brandsColors.cxosports;
    case "cxostories":
      return Config.brandsColors.cxostories;
    case "panels":
      return Config.brandsColors.panels;
    case "notice":
      return Config.brandsColors.notice;
    case "white":
      return Config.brandsColors.white;
    default:
      return Config.brandsColors.default;
  }
};
