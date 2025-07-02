/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";

const Title = ({
  title = "SauChat",
  description = "This is the Chat App called SauChat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;