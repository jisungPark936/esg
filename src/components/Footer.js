const navigation = {
    solutions: [
      { name: 'Fax : 02-780-7708',  },
      { name: 'Email : blue840136@naver.com',  },
      { name: '서울특별시 강서구 마곡중앙로 59-11 엠비즈타워 610호', },
    ],
   

  }
  
  export default function Example() {
    return (
      <footer aria-labelledby="footer-heading" className="bg-[#F4FBF6]">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img
                alt="Company name"
                src="https://cdn.imweb.me/thumbnail/20240722/31b28b3daf3b5.png"
                className="h-12"
              />
              <p className="text-sm leading-6 text-gray-600">
              협회는 도시안전을 위해 회원사가 보유한 신기술을 도시에 접목해 시민이 안전하게 생활할 수 있도록 노력하는 국토교통부 인가단체인 비영리 사단법인입니다
              </p>
            
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact US</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <p  className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              
              </div>
              <div className="">
               
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">세미나 문의</h3>
                  <ul role="list" className="mt-6 space-y-4">
                  
                    
                        <p className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        Tel: 02-780-7770
                        </p>
                    
                
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-200/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500 text-center">&copy; 도시재생안전협회 - All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  