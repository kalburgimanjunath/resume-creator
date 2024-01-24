export default function Header() {
  return (
    <div className="flex justify-between text-center items-center header w-full">
      <div className="p-2 font-bold">Title</div>
      <div className="flex">
        <div>Notification</div>
        <div>Profile</div>
      </div>
    </div>
  );
}
