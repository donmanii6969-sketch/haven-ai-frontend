import ChatBox from "../components/ChatBox";
import Sidebar from "../components/Sidebar";

export default function Page() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ChatBox />
    </div>
  );
}