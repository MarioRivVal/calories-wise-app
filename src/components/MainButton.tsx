import Icon from "./Icons";

type MainButtonProps = {
  type: string;
  handleDisplayForm: (action: string) => void;
};

export default function MainButton({
  type,
  handleDisplayForm,
}: MainButtonProps) {
  return (
    <button
      className=" w-1/2 border-0 rounded-3xl bg-my-blue px-5 py-5 cursor-pointer flex flex-col items-center"
      onClick={() => handleDisplayForm(type)}
    >
      <Icon type={type} color="#f8f8f8" size={64} />
      <p className=" text-xl text-my-white uppercase font-semibold font-spartan mt-2 ">
        <span className=" block">Add</span>
        <span className=" block">{type}</span>
      </p>
    </button>
  );
}
