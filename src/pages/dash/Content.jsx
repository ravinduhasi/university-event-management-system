import ContentHeader from "./ContentHeader";
import Card from "../components/Card";
import TeacherList from "../components/teacherList";

const Content = () => {
    return (
        <div className="w-3/4">
            <ContentHeader />
            <Card />
            <TeacherList />
        </div>
    );
};

export default Content;
