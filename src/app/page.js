import ChooseUsSection from "@/components/ChooseUsSection";
import ExtraSections1 from "@/components/ExtraSections1";
import ExtraSections2 from "@/components/ExtraSections2";
import ExtraSections3 from "@/components/ExtraSections3";
import SearchBanner from "@/components/SearchBanner";

export default function Home() {
  return (
    <div>
      <SearchBanner></SearchBanner>
      <ExtraSections2></ExtraSections2>
      <ChooseUsSection></ChooseUsSection>
      <ExtraSections3></ExtraSections3>
      <ExtraSections1></ExtraSections1>
    </div>
  );
}
