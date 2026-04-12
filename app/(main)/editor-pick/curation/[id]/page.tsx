import { Wrapper } from "./components";
import { CURATION_DETAIL_MOCK } from "./mock";
import { CurationDetailType } from "./types";

export default function CurationDetailPage() {
  const data = CURATION_DETAIL_MOCK as CurationDetailType;

  return <Wrapper data={data} />;
}
