import ItemSelect from "./ItemSelect";
import QuestionName from "./QuestionName";
import QuestionPicker from "./QuestionPicker";

const QuestionSelect = ItemSelect(QuestionPicker, QuestionName, "question");

export default QuestionSelect;
