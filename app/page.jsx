export default function Home() {
  // ?˜í”Œ ?°ì´??(?˜ì¤‘??Supabase ?°ì´?°ë¡œ ?€ì²?
  const samples = [
    { id: 1, name: '?˜ì› ?í†µ ì§€??£¼?ì¡°??, region: '?˜ì›??, status: 'ì¡°í•©?¤ë¦½?¸ê?', units: 520 },
    { id: 2, name: '?©ì¸ ì²˜ì¸êµ?ì§€??£¼?ì¡°??, region: '?©ì¸??, status: '?¬ì—…ê³„íš?¹ì¸', units: 1200 },
    { id: 3, name: '?‰íƒ ê³ ë• ì§€??£¼?ì¡°??, region: '?‰íƒ??, status: 'ì°©ê³µ', units: 850 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* ?ë‹¨ ?¤ë” / ?¤ë¹„ê²Œì´??*/}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-1280px mx-auto h-70px flex items-center justify-between px-20px">
          <h1 className="text-24px font-bold text-blue-600 tracking-tight">ì§€ì£¼íƒ.info</h1>
          <nav className="flex gap-30px font-medium text-gray-600">
            <a href="#" className="text-blue-600">ì§€??³„ ?„í™©</a>
            <a href="#" className="hover:text-black">?¨ê³„ë³??µê³„</a>
            <a href="#" className="hover:text-black">ì§€ì£¼íƒ ê°€?´ë“œ</a>
          </nav>
        </div>
      </header>

      {/* ë©”ì¸ ì»¨í…ì¸??ì—­ */}
      <section className="max-w-1280px mx-auto mt-40px px-20px">
        <div className="mb-30px">
          <h2 className="text-32px font-bold text-gray-900">ê²½ê¸°??ì§€??£¼?ì¡°???„í™©</h2>
          <p className="text-gray-500 mt-5px">ê²½ê¸°??ê³µê³µ?°ì´??ê¸°ë°˜ ?¤ì‹œê°??¬ì—…ì§€ ?•ë³´</p>
        </div>

        {/* ?€?´ë“œ ê²€???„í„° ë°?*/}
        <div className="bg-white p-25px rounded-12px shadow-sm border mb-40px flex gap-20px items-end">
          <div className="flex-1 flex gap-20px">
            <div className="flex-1">
              <label className="block text-12px font-bold text-gray-400 mb-8px uppercase">ì§€??? íƒ</label>
              <select className="w-full border-gray-200 border rounded-8px p-12px outline-none focus:border-blue-500 bg-gray-50">
                <option>ê²½ê¸°???„ì²´</option>
                <option>?˜ì›??/option>
                <option>?©ì¸??/option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-12px font-bold text-gray-400 mb-8px uppercase">?¬ì—… ?¨ê³„</label>
              <select className="w-full border-gray-200 border rounded-8px p-12px outline-none focus:border-blue-500 bg-gray-50">
                <option>?„ì²´ ?¨ê³„</option>
                <option>ì¡°í•©?¤ë¦½?¸ê?</option>
                <option>?¬ì—…ê³„íš?¹ì¸</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-40px py-13px rounded-8px font-bold hover:bg-blue-700 transition-colors">
            ê²€?‰í•˜ê¸?
          </button>
        </div>

        {/* ë¦¬ìŠ¤??ê·¸ë¦¬??*/}
        <div className="grid grid-cols-3 gap-25px">
          {samples.map((item) => (
            <div key={item.id} className="bg-white border rounded-12px p-25px hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex justify-between items-start mb-15px">
                <span className="text-12px bg-blue-50 text-blue-600 px-10px py-4px rounded-full font-bold">
                  {item.status}
                </span>
                <span className="text-14px text-gray-400 font-medium">{item.region}</span>
              </div>
              <h3 className="text-18px font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-20px">
                {item.name}
              </h3>
              <div className="flex justify-between items-center pt-15px border-t border-dashed">
                <span className="text-gray-400 text-14px">?¸ë???/span>
                <span className="font-bold text-gray-700">{item.units.toLocaleString()}?¸ë?</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
