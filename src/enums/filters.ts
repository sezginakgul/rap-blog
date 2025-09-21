export enum FilterId {
  ALL = "all",
  TURK_RAP = "turkRap",
  YABANCI_RAP = "yabanciRap",
  RAP_HABERLERI = "rapHaberleri",
  HAFTANIN_KLIPLERI = "haftaninKlipleri",
  AYIN_KLIPLERI = "ayinKlipleri",
  RAP_SOHBETLERI = "rapSohbetleri",
  RAP_MUSABAKALARI = "rapMusabakalari",
}

export interface FilterItem {
  id: FilterId;
  label: string;
  slug: string;
}

export const FILTERS: FilterItem[] = [
  { id: FilterId.ALL, label: "Tümü", slug: "" },
  { id: FilterId.TURK_RAP, label: "Türk Rap", slug: "turkrap" },
  { id: FilterId.YABANCI_RAP, label: "Yabancı Rap", slug: "yabanci" },
  { id: FilterId.RAP_HABERLERI, label: "Rap Haberleri", slug: "haberler" },
  {
    id: FilterId.HAFTANIN_KLIPLERI,
    label: "Haftanın Klipleri",
    slug: "haftanin-klipleri",
  },
  { id: FilterId.AYIN_KLIPLERI, label: "Ayın Klipleri", slug: "ayin-klipleri" },
  {
    id: FilterId.RAP_SOHBETLERI,
    label: "Rap Sohbetleri",
    slug: "rap-sohbetleri",
  },
  {
    id: FilterId.RAP_MUSABAKALARI,
    label: "Rap Müsabakaları",
    slug: "rap-musabakalari",
  },
];
