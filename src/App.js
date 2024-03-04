import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { bottomPattern, topPattern } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Poppins', sans-serif",

    mainBg: "#fff",
    primaryColor: "#000000",
    secondaryColor: "#fff",
    accentColor: "#FFDE59",
    topPattern: topPattern,
    bottomPattern: bottomPattern,
    initialPage: {
      heading:
        "Priciple that will people make say <br/> <span>yes</span> <br/> to you",
      by: "by Dr. Robern Cialdini",
    },
    data: [
      {
        title: "Receprocity",
        info: "The principle of reciprocity suggests that people feel obligated to repay others when they receive a favor or gift. In other words, if you do something nice for someone, they are more likely to do something nice for you in return.",
      },
      {
        title: "Scarcity",
        info: `The principle of scarcity suggests that people value things more when they are rare or in short supply. For example, if a product is advertised as "limited edition" or "while supplies last," people may be more likely to buy it because they don't want to miss out.`,
      },
      {
        title: "Authority",
        info: "The principle of authority suggests that people are more likely to follow the advice or instructions of someone who is seen as an authority figure. For example, a doctor or a police officer may be seen as an authority figure and people may be more likely to follow their advice",
      },
      {
        title: "Consistency",
        info: "The principle of consistency suggests that people like to be consistent with their past behavior and beliefs. For example, if someone has publicly committed to a certain position, they are more likely to stick with it in the future.",
      },
      {
        title: "Liking",
        info: "The principle of liking suggests that people are more likely to say yes to someone they like or who they perceive as similar to themselves. For example, if someone shares the same hobbies or interests as you, you may be more likely to trust them.",
      },
      {
        title: "Social Proof",
        info: "The principle of social proof suggests that people are more likely to do something if they see others doing it. For example, if a restaurant is crowded, people may assume that it is good and be more likely to eat there.",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.primaryColor,
          "--primaryColor": allData.primaryColor,
          "--accentColor": allData.accentColor,
          "--secondaryColor": allData.secondaryColor,
          "--headingFontFamily": allData.headingFontFamily,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
