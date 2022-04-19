import "./Usecase.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Scrollword from "../Scrollword/Scrollword";
import Showcase from "../Showcase/Showcase";


const Usescase = () => {
  return (
    <div className="usescases">
      <Controller>
        <Scene
          indicators={false}
          triggerHook={"onLeave"}
          triggerElement={"body"}
          offset={0}
          reverse={true}
          duration={"100%"}
        >
          <Tween
            from={{
              scale: 1,
              rotation: 0,
            }}
            to={{
              scale: 0.8,
              rotation: 0,
            }}
            ease={"Power3.easeOut"}
            duration={0.3}
          >
            <div className="Title_use_case">
              {" "}
              ENHANCE YOUR
              <Scrollword
                words={[" HOTEL", " GYM.", " CAFE", "  RESTAURANT"]}
                timeout={1500}
              />
              <span className="styling"> </span>{" "}
            </div>
          </Tween>
        </Scene>
      </Controller>
      
      <Showcase
        backgroundColor={"#45E5B7"}
        formColor={"#511AC5"}
        image={"01.png"}
        title={"Available Everywhere"}
        text={
          "Our erp solutions are available everywhere. Many of our modules are web-based wich means all your employess have access to your erp at any time, on their phone tablet or desktop."
        }
        first
        gradient={false}
        formType={"square"}
        imageStyle={{
          color: "blue",
          height: "65%",
          filter: "drop-shadow(0px 0px 33px rgba(0, 0, 0, 0.3))"
        }}
      />

      <Showcase
        backgroundColor={"#511AC5"}
        formColor={"#45E5B7"}
        image={"02.png"}
        title={"It's in the Cloud"}
        text={
          "All the data is saved in the cloud where you will know it's safe and secure. Our services will always be online and you will never lose any of your data."
        }
        gradient={false}
        formType={"circle"}
        imageStyle={{
          color: "blue",
          // filter: "drop-shadow(0px 0px 33px rgba(0, 0, 0, 0.3))",
          // filter: "drop-shadow(12px 12px 7px rgba(0,0,0,0.1))",
          // filter: "drop-shadow(2px 0px 1px #4E4DC1)",
          filter: "drop-shadow(0px 0px 33px rgba(0, 0, 0, 0.3))",
          height: "50%",
          left: -35,
          bottom: -35
          // position: "absolute"
        }}
      />

      <Showcase
        backgroundColor={"#45E5B7"}
        formColor={"#511AC5"}
        image={"03.png"}
        title={"Live Metrics"}
        text={
          "Your data will get your company to the next level. Our metric system is easy to use, up to date and always available."
        }
        gradient={false}
        htmlImage={<div>Test</div>}
        formType={"frame"}
        imageStyle={{
          color: "blue",
          filter: "drop-shadow(0px 0px 33px rgba(0, 0, 0, 0.3))",
          height: "100%",
          width: "100%"
        }}
      />
    </div>
  );
};

export default Usescase;
