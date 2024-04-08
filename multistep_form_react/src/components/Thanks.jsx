import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Almost done...</h2>
      <p>
        Your opinion is very important for us,sooner you will receive a 20%
        discount coupon for your next purchase.
      </p>
      <p>To finish you evaluation press the submit button below.</p>
      <h3>Here is the resume of your evaluation:{data.name}</h3>
      <p className="review-data">
        <span>Satisfaction with the product:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comment:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
