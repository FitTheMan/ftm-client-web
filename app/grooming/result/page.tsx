import ResultView from "./components";
import { userGroomingResultDetail } from "./api";

const Page = async ({
  searchParams,
}: {
  searchParams: { date: string; answers: string };
}) => {
  const { date, answers } = searchParams;
  let resultDetails = [];

  // 결과 조회
  if (date) {
    const result = await userGroomingResultDetail(date);

    resultDetails = result.data.answers;
  }

  //  결과 생성
  if (answers) {
    try {
      resultDetails = JSON.parse(decodeURIComponent(answers));
    } catch (e) {
      console.error(e);
      resultDetails = [];
    }
  }

  return <ResultView answers={resultDetails} />;
};

export default Page;
