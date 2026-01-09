export default function Home() {
  // 샘플 데이터 (나중에 Supabase 데이터로 대체)
  const samples = [
    { id: 1, name: '수원 영통 지역주택조합', region: '수원시', status: '조합설립인가', units: 520 },
    { id: 2, name: '용인 처인구 지역주택조합', region: '용인시', status: '사업계획승인', units: 1200 },
    { id: 3, name: '평택 고덕 지역주택조합', region: '평택시', status: '착공', units: 850 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* 상단 헤더 / 네비게이션 */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-1280px mx-auto h-70px flex items-center justify-between px-20px">
          <h1 className="text-24px font-bold text-blue-600 tracking-tight">지주택.info</h1>
          <nav className="flex gap-30px font-medium text-gray-600">
            <a href="#" className="text-blue-600">지역별 현황</a>
            <a href="#" className="hover:text-black">단계별 통계</a>
            <a href="#" className="hover:text-black">지주택 가이드</a>
          </nav>
        </div>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <section className="max-w-1280px mx-auto mt-40px px-20px">
        <div className="mb-30px">
          <h2 className="text-32px font-bold text-gray-900">경기도 지역주택조합 현황</h2>
          <p className="text-gray-500 mt-5px">경기도 공공데이터 기반 실시간 사업지 정보</p>
        </div>

        {/* 와이드 검색 필터 바 */}
        <div className="bg-white p-25px rounded-12px shadow-sm border mb-40px flex gap-20px items-end">
          <div className="flex-1 flex gap-20px">
            <div className="flex-1">
              <label className="block text-12px font-bold text-gray-400 mb-8px uppercase">지역 선택</label>
              <select className="w-full border-gray-200 border rounded-8px p-12px outline-none focus:border-blue-500 bg-gray-50">
                <option>경기도 전체</option>
                <option>수원시</option>
                <option>용인시</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-12px font-bold text-gray-400 mb-8px uppercase">사업 단계</label>
              <select className="w-full border-gray-200 border rounded-8px p-12px outline-none focus:border-blue-500 bg-gray-50">
                <option>전체 단계</option>
                <option>조합설립인가</option>
                <option>사업계획승인</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-40px py-13px rounded-8px font-bold hover:bg-blue-700 transition-colors">
            검색하기
          </button>
        </div>

        {/* 리스트 그리드 */}
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
                <span className="text-gray-400 text-14px">세대수</span>
                <span className="font-bold text-gray-700">{item.units.toLocaleString()}세대</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}