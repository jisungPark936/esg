

const tiers = [
  {
  
    features: ['강사진 사정에 따라 변경될 수 있음', '중식(도시락) 제공',],
    featured: false,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function info() {
  return (
    <div className="relative isolate bg-white px-6">
   
    
  
      <div className="mx-auto items-center">
        {tiers.map((tier,) => (
          <div
            key={tier.id}
          >
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <img src="https://techworld.speedgabia.com/seminar/ESG/img/icon_green.png"
                    aria-hidden="true"
                    className='text-indigo-400h-6 w-5 flex-none '
                  />
                  {feature}
                </li>
              ))}
            </ul>
          
          </div>
        ))}
      </div>
    </div>
  )
}
