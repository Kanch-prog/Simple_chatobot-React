import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey Hello, Welcome to our site!",
    trigger: "1"
  },
  {
    id: "1",
    message: "Please write your username",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4
  },
  {
    id: "4",
    options: [
      { value: 1, label: "View Courses", trigger: "View Courses" },
      {
        value: 2,
        label: "Read Articles",
        trigger: "Read Articles"
      }
    ]
  },
  {
    id: "Read Articles",
    message: "Thanks for telling your choice",
    end: true
  },
  {
    id: "View Courses",
    message: "Thanks for telling your choice",
    end: true
  }
];

// Creating our own theme
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const config = {
  width: "400px",
  height: "500px",
  floating: "True",
  botAvatar:
    "https://cdn.pixabay.com/photo/2022/07/02/12/23/bot-7297229_1280.png",
  userAvatar:
    "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833_1280.png"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Bot" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default App;
