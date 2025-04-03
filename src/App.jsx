import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LangSwitcher from "./components/LangSwitcher";
import SearchBar from "./components/SearchBar";
import CoffeeSize from "./components/CoffeeSize";
import AcceptTerms from "./components/AcceptTerms";
import { Form } from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);
  const [userData, setUserData] = useState({
    login: "",
    password: "",
  });
  const [formikValues, setFormikValues] = useState({
    username: "",
    email: "",
  });

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { login, password } = form.elements;
    handleLogin({
      login: login.value,
      password: password.value,
    });
    setUserData({ login: "", password: "" });
  };

  return (
    <>
      <FeedbackForm onSubmit={setFormikValues} />
      <Form onLogin={handleLogin} />
      <SearchBar />
      <LangSwitcher value={lang} onChange={setLang} />
      <CoffeeSize coffeeSize={coffeeSize} handleSizeChange={setCoffeeSize} />
      <AcceptTerms hasAccepted={hasAccepted} setHasAccepted={setHasAccepted} />
      <LoginForm
        userData={userData}
        onChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
