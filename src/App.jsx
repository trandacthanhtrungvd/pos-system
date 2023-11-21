import FeedbackStatus from "./components/Status/FeedbackStatus";
import OrderStatus from "./components/Status/OrderStatus";
import RoomStatus from "./components/Status/RoomStatus";

function App() {
  return (
    <div className="flex h-screen w-full flex-wrap content-around items-center justify-center">
      OrderStatus: <br />
      <OrderStatus status={'completed'}/>
      <OrderStatus status={'preparing'}/>
      <OrderStatus status={'pending'}/>
      RoomStatus: <br />
      <RoomStatus status={'a'} />
      <RoomStatus status={'na'} />
      FeedbackStatus: <br />
      <FeedbackStatus status={'answered'}/>
      <FeedbackStatus status={'pending'}/> 
    </div>
  );
}

export default App;