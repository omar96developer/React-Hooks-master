import React, {useRef} from "react";

const RefExample = () => {
  const scrollref = useRef(null);
  const handleScroll = () => {
    if(!scrollref || !scrollref.current){
      return
    }
    scrollref.current.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
  return (
    <>
      <h1>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: "100vh",
        }}
      >
        <button className="btn btn-info" onClick={handleScroll}>Scroll</button>
        
      </div>

      <div
        style={{
          height: "100vh",
        }}
      ></div>

      <h2 ref={scrollref}>Testo Testo</h2>
      <div
        style={{
          height: "30vh",
        }}
      ></div>
    </>
  );
};

export default RefExample;
