import React, { useContext, Component } from "react";

// import config from "../config";

class Quiz extends Component {
  static defaultProps = {
    error: null,
    email: "",
    setEmail: () => {},
  };

  // sendUserData(userData) {
  //   return fetch(`${config.API_ENDPOINT}/user_data`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ ...userData }),
  //   }).then(() => {
  //     this.props.history.push("/dashboard");
  //   });
  // }
  // add to context email
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      gender,
      money,
      height,
      weight,
      activity,
      fruits,
      sun,
      vegan,
      weightLoss,
      weightGain,
      buildMuscle,
      fish,
      pregnancy,
      dairy,
      bloodPressure,
      gluten,
      diabetes,
      smoke,
      arthritis,
      osteoporosis,
      sex,
      digestion,
      detox,
      joint,
      sleep,
      focus,
      memory,
      drowsiness,
      lowEnergy,
      stress,
      preworkout,
      postworkout,
      results,
      intraworkout,
      wrinkle,
      hair,
      hydration,
    } = e.target;

    const payload1 = {
      email: email.value,
      gender: gender.value,
      money: money.value,
      height: height.value,
      weight: weight.value,
      activity: activity.value,
      fruits: fruits.checked ? "true" : "false",
      sun: sun.checked ? "true" : "false",
      vegan: vegan.checked ? "true" : "false",
      weightLoss: weightLoss.checked ? "true" : "false",
      weightGain: weightGain.checked ? "true" : "false",
      buildMuscle: buildMuscle.checked ? "true" : "false",
      // fish we want true/false to be reversed*
      fish: fish.checked ? "false" : "true",
      pregnancy: pregnancy.checked ? "true" : "false",
      dairy: dairy.checked ? "true" : "false",
      bloodPressure: bloodPressure.checked ? "true" : "false",
      gluten: gluten.checked ? "true" : "false",
      diabetes: diabetes.checked ? "true" : "false",
      smoke: smoke.checked ? "true" : "false",
      arthritis: arthritis.checked ? "true" : "false",
      osteoporosis: osteoporosis.checked ? "true" : "false",
      sex: sex.checked ? "true" : "false",
      digestion: digestion.checked ? "true" : "false",
      detox: detox.checked ? "true" : "false",
      joint: joint.checked ? "true" : "false",
      sleep: sleep.checked ? "true" : "false",
      focus: focus.checked ? "true" : "false",
      memory: memory.checked ? "true" : "false",
      drowsiness: drowsiness.checked ? "true" : "false",
      lowEnergy: lowEnergy.checked ? "true" : "false",
      stress: stress.checked ? "true" : "false",
      preworkout: preworkout.checked ? "true" : "false",
      postworkout: postworkout.checked ? "true" : "false",
      results: results.checked ? "true" : "false",
      intraworkout: intraworkout.checked ? "true" : "false",
      wrinkle: wrinkle.checked ? "true" : "false",
      hair: hair.checked ? "true" : "false",
      hydration: hydration.checked ? "true" : "false",
    };
    // console.log(email.value);
    this.context.setEmail(email.value);
    this.sendUserData(payload1);
  };
  render() {
    return (
      <div className="quiz-container">
        <h1>Supplement Personalization Quiz</h1>
        <form className="quiz" onSubmit={this.handleSubmit}>
          <label>
            Check all of the following that apply for each of the following
            categories:
          </label>
          <h2>General Health</h2>
          <br />
          <input type="checkbox" name="fruits" />
          <label>
            Do you ever not eat the recommended daily number of fruits and
            vegetables?
          </label>
          <br />
          <input type="checkbox" name="sun" />
          <label>Do you get 15 minutes of exposure to sunlight daily?</label>
          <br />
          <input type="checkbox" name="vegan" />
          <label>Are you vegan?</label>
          <br />
          <input type="checkbox" name="weightLoss" />
          <label>Do you have trouble losing weight?</label>
          <br />
          <input type="checkbox" name="weightGain" />
          <label>Do you having trouble gaining weight?</label>
          <br />
          <input type="checkbox" name="buildMuscle" />
          <label>Do you have trouble building muscle?</label>
          <br />
          <input type="checkbox" name="fish" />
          <label>Do you regularly eat fish?</label>
          <br />
          <input type="checkbox" name="pregnancy" />
          <label>Are you pregnant?</label>
          <br />
          <input type="checkbox" name="dairy" />
          <label>Do you consume dairy products daily?</label>
          <br />
          <h2>Specific Ailments</h2>
          <input type="checkbox" name="bloodPressure" />
          <label>Do you have high blood pressure?</label>
          <br />
          <input type="checkbox" name="gluten" />
          <label>Do you have a gluten allergy?</label>
          <br />
          <input type="checkbox" name="diabetes" />
          <label>Do you have diabetes (Type I or II?)</label>
          <br />
          <input type="checkbox" name="smoke" />
          <label>Do you smoke?</label>
          <br />
          <input type="checkbox" name="arthritis" />
          <label>Do you suffer from arthritis?</label>
          <br />
          <input type="checkbox" name="osteoporosis" />
          <label>Do you have osteoporosis?</label>
          <br />
          <input type="checkbox" name="sex" />
          <label>Are you interested in improving your sexual health?</label>
          <br />
          <input type="checkbox" name="digestion" />
          <label>Do you have trouble with digestion?</label>
          <br />
          <input type="checkbox" name="detox" />
          <label>
            Are you interested in detoxifying or cleansing your digestive tract?
          </label>
          <br />
          <input type="checkbox" name="joint" />
          <label>Do you have joint pain?</label>
          <br />

          <h2>Mental Health & Cognition</h2>

          <input type="checkbox" name="sleep" />
          <label>Do you have trouble sleeping?</label>
          <br />
          <input type="checkbox" name="focus" />
          <label>Do you find yourself getting distracted easily?</label>
          <br />
          <input type="checkbox" name="memory" />
          <label>Would you like to improve your memory?</label>
          <br />
          <input type="checkbox" name="drowsiness" />
          <label>Do you get drowsy during the day?</label>
          <br />
          <input type="checkbox" name="lowEnergy" />
          <label>Do you experience low energy levels?</label>
          <br />
          <input type="checkbox" name="stress" />
          <label>Do you have trouble relaxing or controlling stress?</label>
          <br />
          <h2>Workout Related</h2>
          <input type="checkbox" name="preworkout" />
          <label>Do you lack motivation to work out?</label>
          <br />
          <input type="checkbox" name="postworkout" />
          <label>Do you have a hard time recovering from your workouts?</label>
          <br />
          <input type="checkbox" name="results" />
          <label>
            Do you feel like you are not seeing results fast enough?
          </label>
          <br />
          <input type="checkbox" name="intraworkout" />
          <label>Do you lack energy during workouts?</label>
          <br />
          <h2>Skin & Beauty</h2>
          <input type="checkbox" name="wrinkle" />
          <label>Would you like to reduce wrinkles?</label>
          <br />
          <input type="checkbox" name="hair" />
          <label>Do you experience more than typical hair loss?</label>
          <br />
          <input type="checkbox" name="hydration" />
          <label>Does your skin and/or hair lack hydration?</label>
          <br />
          <br />
          <label>Select your gender</label>
          <select name="gender">
            <option value="male" name="gender">
              Male
            </option>
            <option value="female" name="gender">
              Female
            </option>
          </select>
          <label>
            How much money are you willing to dedicate to purchasing
            supplements?
          </label>
          <select name="money">
            <option value="51" name="money">
              $50
            </option>
            <option value="100" name="money">
              $100
            </option>
            <option value="200" name="money">
              $200
            </option>
            <option value="201" name="money">
              Whatever is needed to optimize my results
            </option>
          </select>
          <br />
          <br />
          <label>How much do you weigh?</label>
          <input type="number" name="weight" required />
          <br />
          <br />
          <label>How tall are you?</label>
          <input type="number" name="height" required />
          <br />
          <br />
          <label>How active are you on a regular basis?</label>
          <select name="activity">
            <option value="false" name="activity">
              Not active (Sedentary)
            </option>
            <option value="false" name="activity">
              Some activity (working out 1-2 times a week)
            </option>
            <option value="true" name="activity">
              Moderate activity (working out 2-3 times a week)
            </option>
            <option value="true" name="activity">
              High activity (working out 4+ times a week)
            </option>
          </select>
          <br />
          <label>Enter Email*:</label>
          <input type="email" name="email" required />
          <p>Fields with an * are required</p>
          <button type="submit">Submit Quiz</button>
        </form>
      </div>
    );
  }
}
export default Quiz;
