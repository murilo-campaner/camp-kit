export const TextInput = ({ type = "text", ...props }) => {
  return <input type={type} {...props} />;
};
