const DashboardContent = () => {
  const dataActivity = [
    { id: 1, namaBahan: "Makanan", pesan: "Stok Masuk", jumlah: 10 },
  ];
  return (
    <>
      <div className="mb-10 flex flex-wrap p-2 ">
        <div className="mt-4 grow rounded-lg border-2 p-4 sm:mr-2">
          <h1 className="mb-4 mt-2 text-sm font-bold uppercase text-zinc-400">
            Recent Activity
          </h1>
          {dataActivity.map((activity) => (
            <div
              className="scrollbar-hide max-h-20 overflow-y-auto"
              key={activity.id}
            >
              <p>{activity.namaBahan}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
