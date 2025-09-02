import { Input } from "@/components/ui/input";

const Userinput = (props: {
  type: string;
  placeholder: string;
  icon: string;
  Name: string;
  required: boolean;
}) => {
  return (
    <>
      <div className=" relative">
        <div className="">
          <Input
            type={props.type}
            placeholder={props.placeholder}
            name={props.Name}
            required={props.required}
            className="md:w-[459px] sm:w-[250px] h-[60px] mt-5 px-15 text-[16px] font-medium leading-[100%] tracking-normal text-[var(--lightBlack)]"
          />
        </div>
        <div className="absolute top-5 px-3">
          <img src={props.icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Userinput;
