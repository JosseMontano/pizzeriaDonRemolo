import React from "react";

const categoria = (props) => {
  const handleSubmit = (id) => {
    props.onSubmit(id);
  };
  return (
    <>
      <div className="cursor-pointer" key={props.cat.id}>
        <div
          style={props.cat.state ? props.cat.stylesDiv : {}}
          className="h-[44px] shadow-botondefault hover:shadow-botonhover border-solid border rounded-[20px] pt-[8px] pb-[8px] pl-[8px] pr-[16px] xl:h-[48px] xl:relative xl:-top-[15px] bg-white mr-[8px] mt-[16px]"
          onClick={() => handleSubmit(props.cat.id)}
        >
          <img
            className="backgroundImgCat w-[32px] h-[32px] xl:w-[27px] xl:h-[27px] xl:relative xl:-top-[2px]"
            src={props.cat.state ? props.cat.imagenOn : props.cat.imagenOff}
          />
          <span
            style={props.cat.state ? props.cat.stylesText : {}}
            className="ml-8 text-center font-normal text-[16px] leading-[120%] relative -top-[30px] xl:relative xl:-top-[25px]"
          >
            {" "}
            {props.cat.nombre}
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default categoria;
