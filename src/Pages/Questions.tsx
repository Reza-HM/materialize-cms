const Questions = () => {
  return (
    <div className="mt-8 p-8">
      <div className="bg-[url('/img/faq-search.jpg')] bg-cover bg-no-repeat p-24 rounded-lg shadow-lg flex flex-col items-center gap-8">
        <h2 className="text-zinc-700 text-4xl font-bold">سوالات متداول</h2>
        <p className="text-slate-500">
          برای پاسخ‌های سریع، مرکز راهنمایی ما را جستجو کنید
        </p>
        <input
          type="text"
          className="rounded-full mt-8 p-6 w-full shadow-md shadow-zinc-700 text-slate-500 text-2xl"
          placeholder="شروع به تایپ جستجوی خود کنید..."
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};
export default Questions;
