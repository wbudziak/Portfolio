import CharBlast from "../components/commons/charBlast";

const useCharBlast = (props) => {
  const generateCharBlast = (props) => {
    const arr = props.split("");

    const arrMapped = arr.map((element, index) => (
      <CharBlast key={index}>{element}</CharBlast>
    ));

    return arrMapped;
  };

  return { generateCharBlast };
};

export default useCharBlast;
