interface IAboutInfo {
  email: string;
  address: string;
  phone: string;
  initialPage: number;
  totalPages: number;
  maxPagesToCache: number;
  pdfScale: {
    min: number;
    max: number;
    step: number;
    default: number;
  };
  facebook: { url: string; title: string };
}
