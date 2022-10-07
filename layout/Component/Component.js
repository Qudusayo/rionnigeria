import Navbar from "../../components/Navbar/Navbar";

export default function Component({ children }) {
  return (
    <div>
      <div>
        <Navbar type="solid" />
      </div>
      <div
        style={{
          width: "90%",
          margin: "3em auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}
