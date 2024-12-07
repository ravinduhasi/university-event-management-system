import ContentHeader from "./ContentHeader";
import Card from "./Card";
import Clublist from "./Clublist";

const Content = () => {
  return (
    <div className="w-full">
      <ContentHeader />
      <div className="flex flex-col gap-4">
        <Card />
        <Clublist />
      </div>
    </div>
  );
};

export default Content;