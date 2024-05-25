import PropTypes from "prop-types";

const InputControl = (props) => {
  return (
    <div className="mb-4">
      {props.label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {props.label}
        </label>
      )}
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

InputControl.propTypes = {
  label: PropTypes.string,
};

export default InputControl;
